import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './postDetail.css';
import { useAuthContext } from '../Login/auth';

function PostDetails() {
	const [post, setPost] = useState([]);
	const params = useParams();
	const { token } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchpost = async () => {
			const postUrl = `${process.env.REACT_APP_POSTS_API_HOST}/getpost/${params.id}`;
			const fetchConfig = {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const response = await fetch(postUrl, fetchConfig);
			console.log(response);
			if (response.ok) {
				const data = await response.json();
				setPost(data);
			}
		};
		if (token === false) {
			navigate('/login');
		}
		fetchpost();
	}, [token, navigate, params.id]);

	const [comment, setComment] = useState('');
	const commentchange = (event) => {
		const value = event.target.value;
		setComment(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {};
		data.comments = comment;
		data.post_id = post.id;
		console.log('LOOOOOOOK HEREEEEEEEE', data);

		const postURL = `${process.env.REACT_APP_POSTS_API_HOST}/comment`;
		const fetchConfig = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await fetch(postURL, fetchConfig);
		console.log(response);
		if (response.ok) {
			const newPost = await response.json();
			navigate(`/posts/${post.id}`);
			setComment('');
		}
	};
	const [commentslist, setCommentslist] = useState([]);
	useEffect(() => {
		const fetchComments = async () => {
			const url = `${process.env.REACT_APP_POSTS_API_HOST}/getcomments`;
			const fetchConfig = {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const response = await fetch(url, fetchConfig);
			console.log(response);
			if (response.ok) {
				const data1 = await response.json();
				console.log(
					'CHECKOUT ALL THE COMMENTS RIGHT HERE!!!!!!',
					data1
				);
				setCommentslist(data1);
			}
		};
		fetchComments();
	}, [token, navigate, params.id]);

	return (
		<div id="main-content" className="blog-page">
			<div className="container">
				<div className="row clearfix">
					<div className="col-lg-8 col-md-12 left-box">
						<div className="card3 single_post">
							<div className="body">
								<div className="img-post">
									<img
										className="d-block img-fluid"
										src="https://progameguides.com/wp-content/uploads/2019/01/fortnite-outfit-jonesy.jpg?fit=875%2C915"
										alt="First slide"
									/>
								</div>
								<h3>
									<a href="blog-details.html">{post.title}</a>
								</h3>
								<p className="post-text">{post.description}</p>
							</div>
						</div>
						<div className="card3">
							<div className="header">
								<h2>Comments 3</h2>
							</div>
							<div className="body">
								{commentslist.map((comments) => {
									if (comments.post_id === post.id)
										return (
											<li className="row clearfix">
												<div className="icon-box col-md-2 col-4">
													<img
														className="img-fluid img-thumbnail"
														src="https://kr4m.com/wp-content/uploads/2019/05/Webp.net-compress-image-3.jpg"
														alt="second slide"
													/>
												</div>
												<div className="text-box col-md-10 col-8 p-l-0 p-r0">
													<h5 className="post-text">
														Username
													</h5>
													<p className="post-text">
														{' '}
														{comments.comments}{' '}
													</p>
													<ul className="list-inline">
														<li>
															<div className="post-text">
																DateTimeField
															</div>
														</li>
														<li>
															<div className="post-text"></div>
														</li>
													</ul>
												</div>
											</li>
										);
								})}
							</div>
						</div>
						<div className="card3">
							<div className="header">
								<h2>Leave a comment </h2>
							</div>
							<div className="body">
								<div className="comment-form">
									<form
										className="row clearfix"
										onSubmit={handleSubmit}
									>
										<div className="col-sm-12">
											<div className="form-group">
												<textarea
													rows="4"
													className="form-control no-resize"
													placeholder="Comment here"
													onChange={commentchange}
													required
													value={comment}
												></textarea>
											</div>
											<button
												type="submit"
												className="btn btn-block btn-primary"
											>
												SUBMIT
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PostDetails;
