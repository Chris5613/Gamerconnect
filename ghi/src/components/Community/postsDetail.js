import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./postDetail.css";
import { useAuthContext } from "../Login/auth";

function PostDetails() {
<<<<<<< HEAD
  const[post, setPost] = useState([])
  const params = useParams();
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchpost = async () => {
      const postUrl = `http://localhost:8001/getpost/${params.id}`;
      const fetchConfig = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(postUrl, fetchConfig);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPost(data);
      }
    };
    if (token === false) {
      navigate("/login");
    }
    fetchpost();
  }, [token, navigate, params.id]);


  return (
      <div id="main-content" className="blog-page">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 left-box">
              <div className="card single_post">
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
              <div className="card">
                <div className="header">
                  <h2>Comments 3</h2>
                </div>
                <div className="body">
                  <ul className="comment-reply list-unstyled">
                    <li className="row clearfix">
                      <div className="icon-box col-md-2 col-4">
                        <img
                          className="img-fluid img-thumbnail"
                          src="https://kr4m.com/wp-content/uploads/2019/05/Webp.net-compress-image-3.jpg"
                          alt="second slide"
                        />
                      </div>
                      <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                        <h5 className="post-text">Pete "skete" davidson</h5>
                        <p>
                          The games the same thing every year, such a bad game
                        </p>
                        <ul className="list-inline">
                          <li>
                            <div className="post-text">Mar 09 2018</div>
                          </li>
                          <li>
                            <div className="post-text">Reply</div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="row clearfix">
                      <div className="icon-box col-md-2 col-4">
                        <img
                          className="img-fluid img-thumbnail"
                          src="https://progameguides.com/wp-content/uploads/2017/12/fortnite-outfit-default6.jpg?resize=928%2C760"
                          alt="third slide"
                        />
                      </div>
                      <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                        <h5 className="post-text">Kanye West</h5>
                        <p>The game's good, you're just bad!</p>
                        <ul className="list-inline">
                          <li>
                            <div className="post-text">Mar 09 2018</div>
                          </li>
                          <li>
                            <div className="post-text">Reply</div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="row clearfix">
                      <div className="icon-box col-md-2 col-4">
                        <img
                          className="img-fluid img-thumbnail"
                          src="https://wallpapercave.com/wp/wp4022717.jpg"
                          alt="fourth slide"
                        />
                      </div>
                      <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                        <h5 className="post-text">Recruit 3</h5>
                        <p>
                          Tbh, I agree, the games have been getting worse year
                          after year. It's obvious this years game is just a
                          money grab.
                        </p>
                        <ul className="list-inline">
                          <li>
                            <div className="post-text">Mar 09 2018</div>
                          </li>
                          <li>
                            <div className="post-text">Reply</div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <h2>
                    Leave a comment{" "}
                    <small>
                      Your email address will not be published. Required fields
                      are marked*
                    </small>
                  </h2>
                </div>
                <div className="body">
                  <div className="comment-form">
                    <form className="row clearfix">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            rows="4"
                            className="form-control no-resize"
                            placeholder="Please type what you want..."
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
export default PostDetails
