import { useEffect, useState } from "react";
import "./PostList.css";

function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8001/post";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="post-container">
      <div className="container1">
        {posts.map((post) => {
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
                    <h5 className="card-title1">{post.title}</h5>
                    <p className="card-text1">{post.description}</p>
                  </div>
                  <div className="card-footer1">
                    <small className="text-muted1">{post.game}</small>
                    <small className="text-muted1">@ {post.username}</small>
                  </div>
                  <div>
                    <button className="detail-button1">Post Detail</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
