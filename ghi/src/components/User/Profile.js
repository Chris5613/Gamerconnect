import "./user.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToken } from "../Login/auth";

const Profile = () => {
  const [userPost, setUserPost] = useState([]);
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState("");
  const { token } = useToken();

  const userData = async () => {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/token`;
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const user_info = data.account.id;
        const user_name = data.account.username;
        setUserId(user_info);
        setUsername(user_name);
      }
    } catch (e) {}
    return false;
  };

  useEffect(() => {
    userData();
  }, []);

  const user_id = userId;
  const user_name = username;

  useEffect(() => {
    const fetchPost = async () => {
      const postUrl = `${process.env.REACT_APP_POSTS_API_HOST}/post/user/${user_id}`;
      const fetchConfig = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(postUrl, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setUserPost(data);
      }
    };
    fetchPost();
  }, [user_id, token]);

  return (
    <>
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile">
            <div>
              <img
                src="https://kr4m.com/wp-content/uploads/2019/05/Webp.net-compress-image-3.jpg"
                alt="user"
                width="300px"
                height="250px"
              />
            </div>
            <div className="profile-content">
              <h4>{user_name}</h4>
              <button className="homepage-btn">Add as Friend</button>
              <hr></hr>
              <a href="settings">Update my profile</a>
            </div>
          </div>
        </div>
        <h2>
          <u>{user_name}'s posts</u>
        </h2>
        <div className="user-posts">
          {userPost.map((post) => {
            if (post.length > 0)
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
                      <button className="detail-button1" key={post.id}>
                        <Link
                          className="detail-link"
                          to={`/posts/${post.id}`}
                          state={post.id}
                        >
                          Link to post
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            else return <h1>No Post</h1>;
          })}
        </div>
        <div className="user-comments">
          <h2>
            <u>{user_name}'s comments</u>
          </h2>
          <h1 id="profile-comments">No Comments</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
