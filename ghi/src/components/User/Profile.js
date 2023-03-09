import "./user.css";

const Profile = () => {
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
              <h4>Chris5613</h4>
              <button className="homepage-btn">Add as Friend</button>
            </div>
          </div>
        </div>
        <div className="user-posts">
          <h2>Chris5613's Posts</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
