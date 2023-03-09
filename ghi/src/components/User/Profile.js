import "./user.css";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userPost, setUserPost] = useState([]);
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState("");

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
        },
      };
      const response = await fetch(postUrl, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setUserPost(data);
      }
    };
    fetchPost();
  }, [user_id]);

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
        <h2>{user_name}'s posts</h2>
        <div className="user-posts">
          {userPost.map((post) => {
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="user-comments">
          <h2>{user_name}'s comments</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
