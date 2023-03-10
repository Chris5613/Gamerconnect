import React from "react";

const footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>
                <span id="title-first-half">GAMER</span>
                <span id="title-second-half">CONNECT</span>
              </h4>
              <h4>
                <i className="fa-brands fa-facebook socials"></i>
                <i className="fa-brands fa-instagram socials"></i>
                <i className="fa-brands fa-youtube socials"></i>
                <i className="fa-brands fa-twitter socials"></i>
              </h4>
            </div>
            <div className="col">
              <h4>Community</h4>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="posts">
                    Posts
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="chat">
                    Chat
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="news">
                    News
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="events">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Email</li>
                <li>Report a Bug</li>
                <li>Report a User</li>
                <li>Join the Team</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Gamerconnect | All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
