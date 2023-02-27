import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./PostList.css";

function PostList() {
	const [posts, setPosts] = useState([]);
	const [games, setGames] = useState([]);

	const fetchData = async () => {
		const url = 'http://localhost:8001/post';
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			setPosts(data);
		}
	};

	const [game, setGame] = useState('');
	const gamechange = (event) => {
		const value = event.target.value;
		setGame(value);
	};

	const getGames = async () => {
		const url = 'http://localhost:8001/games';
		const response = await fetch(url);
		if (response.ok) {
			const game = await response.json();
			setGames(game);
		}
	};

	useEffect(() => {
		fetchData();
		getGames();
	}, []);

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
						Choose a game
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
      <button>
        <NavLink
                to="/posts/new"
                className="nav-link text-dark"

              >
                Create Post
          </NavLink>
      </button>
      </div>
			<div className="post-container">
				<div className="container1">
					{posts.map((post) => {
						if (post.game === game)
							return (
								<div className="page1">
									<div className="card-deck1 hvr-grow">
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
												<button className="detail-button1">
													Post Detail
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						else if (game === '')
							return (
								<div className="page1">
									<div className="card-deck1 hvr-grow">
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
												<button className="detail-button1">
													Post Detail
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
