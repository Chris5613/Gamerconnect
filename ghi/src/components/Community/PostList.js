import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "../Login/auth";
import "./PostList.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [games, setGames] = useState([]);
  const [likess, setLikes] = useState([])
  const [cur_user, setUser] = useState("");
  const { token } = useAuthContext();

  const [game, setGame] = useState("");
  const gamechange = (event) => {
    const value = event.target.value;
    setGame(value);
  };

  const userData = async () => {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/token`;
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const user_info = data.account.id;
        setUser(user_info);
      }
    } catch (e) {}
    return false;
  };

  const fetchData = async (token) => {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/posts`;
    const fetchConfig = {
      method: "GET",
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

  const getLikes = async () => {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/likes`;
    const response = await fetch(url);
    if (response.ok) {
      const likes = await response.json();
      setLikes(likes);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData(token);
      getGames();
      userData();
      getLikes();
    }
  }, [token]);

  async function likepost(id) {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/like/${id}/${cur_user}`
    const fetchConfig = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    };
    await fetch(url, fetchConfig);
    window.location.reload();
  }

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
        <NavLink to="/new" className="text-dark create-btn">
          Create Post
        </NavLink>
      </div>
      <div className="post-container">
        <div className="container1">
          {posts.map((post) => {
            if (post.game === game)
              return (
                <div className="page1" key={post.id}>
                  <div className="card-deck1 hvr-grow" key={post.id}>
                    <div className="card1">
                      <img
                        className="card-img-top1"
                        src={post.picture_url}
                        alt="Card cap"
                      />
                      <div className="card-body1">
                        <h5 className="card-title1">{post.title} </h5>
                        <p className="card-text1">{post.description}</p>
                      </div>
                      <div className="card-footer1">
                        <small className="text-muted1">{post.game}</small>
                        <small className="text-muted1">@ {post.username}</small>
                      </div>
                      <div class="heart-btn">
                        <button
                                onClick={() => likepost(post.id)}
                                type="button"
                                className="content"
                              >
                                <span className="heart"></span>
                                <div className="text">
                                  Like {likess.map((likesss) => {
                                  if (likesss.postid === post.id)
                                    return (
                                      likesss.num_likes
                                    );
                                  else
                                    return null
                                })}
                                </div>
                        </button>
                      </div>
                      <div>
                        <button className="detail-button1" key={post.id}>
                          <Link className="text-1" to={`/posts/${post.id}`} state={post.id}>
                            Post Detail
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            else if (game === "")
              return (
                <div className="page1" key={post.id}>
                  <div className="card-deck1 hvr-grow" key={post.id}>
                    <div className="card1" key={post.id}>
                      <img
                        className="card-img-top1"
                        src={post.picture_url}
                        alt="Card cap"
                      />
                      <div className="card-body1">
                        <h5 className="card-title1">{post.title}</h5>
                        <p className="card-text1">{post.description}</p>
                      </div>
                      <div className="card-footer1">
                        <small className="text-muted1">{post.game}</small>
                        <small className="text-muted1">@ {post.username}</small>
                      </div>
                      <div class="heart-btn">
                        <button
                                onClick={() => likepost(post.id)}
                                type="button"
                                className="content"
                              >
                                <span className="heart"></span>
                                <div className="text">
                                  Like {likess.map((likesss) => {
                                  if (likesss.postid === post.id)
                                    return (
                                      likesss.num_likes
                                    );
                                  else
                                    return null
                                })}
                                </div>
                        </button>
                      </div>
                      <div>
                        <button className="detail-button1" key={post.id}>
                          <Link className="text-1" to={`/posts/${post.id}`} state={post.id}>
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
