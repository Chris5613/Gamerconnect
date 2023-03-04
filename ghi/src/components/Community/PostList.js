import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../Login/auth';
import './PostList.css';
import { Link } from 'react-router-dom';

function PostList() {
	const [posts, setPosts] = useState([]);
	const [games, setGames] = useState([]);
	const { token } = useAuthContext();

	const [game, setGame] = useState('');
	const gamechange = (event) => {
		const value = event.target.value;
		setGame(value);
	};

	const fetchData = async (token) => {
		const url = `${process.env.REACT_APP_POSTS_API_HOST}/posts`;
		const fetchConfig = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const response = await fetch(url, fetchConfig);
		console.log(response);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			setPosts(data);
		}
	};

	const getGames = async () => {
		const url = `${process.env.REACT_APP_POSTS_API_HOST}/games`;
		const response = await fetch(url);
		if (response.ok) {
			const game = await response.json();
			setGames(game);
		}
	};

	useEffect(() => {
		if (token) {
			fetchData(token);
			getGames();
		}
	}, [token]);

	return (
		<div>
			<div className="dropdown">
				<select
					className="dropdown-2"
					onChange={gamechange}
					required
					id="game"
					name="game"
					value={game}
				>
					<option className="dropdown-3" value="">
						All
					</option>
					{games.map((gamess) => {
						return (
							<option
								className="dropdown-3"
								key={gamess.id}
								value={gamess.title}
							>
								{gamess.title}
							</option>
						);
					})}
				</select>
			</div>
			<div>
				<NavLink to="/new" className="nav-link text-dark create-btn">
					Create Post
				</NavLink>
			</div>
			<div className="post-container">
				<div className="container1">
					{posts.map((post) => {
						if (post.game === game)
							return (
								<div className="page1" key={post.id}>
									<div
										className="card-deck1 hvr-grow"
										key={post.id}
									>
										<div className="card1">
											<img
												className="card-img-top1"
												src={post.picture_url}
												alt="Card cap"
											/>
											<div className="card-body1">
												<h5 className="card-title1">
													{post.title}{' '}
												</h5>
												<p className="card-text1">
													{post.description}
												</p>
											</div>
											<div className="card-footer1">
												<small className="text-muted1">
													{post.game}
												</small>
												<small className="text-muted1">
													@ {post.username}
												</small>
											</div>
											<div>
												<button
													className="detail-button1"
													key={post.id}
												>
													<Link
														to={`/posts/${post.id}`}
														state={post.id}
													>
														Post Detail
													</Link>
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						else if (game === '')
							return (
								<div className="page1" key={post.id}>
									<div
										className="card-deck1 hvr-grow"
										key={post.id}
									>
										<div className="card1" key={post.id}>
											<img
												className="card-img-top1"
												src={post.picture_url}
												alt="Card cap"
											/>
											<div className="card-body1">
												<h5 className="card-title1">
													{post.title}
												</h5>
												<p className="card-text1">
													{post.description}
												</p>
											</div>
											<div className="card-footer1">
												<small className="text-muted1">
													{post.game}
												</small>
												<small className="text-muted1">
													@ {post.username}
												</small>
											</div>
											<div>
												<button
													className="detail-button1"
													key={post.id}
												>
													<Link
														to={`/posts/${post.id}`}
														state={post.id}
													>
														Post Detail
													</Link>
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						else return null;
					})}
				</div>
			</div>
		</div>
	);
}

export default PostList;
