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
                <i class="fa-brands fa-facebook socials"></i>
                <i class="fa-brands fa-instagram socials"></i>
                <i class="fa-brands fa-youtube socials"></i>
                <i class="fa-brands fa-twitter socials"></i>
              </h4>
              <h5 className="list-unstyled">
                <li>646-345-2345</li>
                <li>San, Francisco</li>
                <li>123 Street</li>
              </h5>
            </div>
            <div className="col">
              <h4>Community</h4>
              <ui className="list-unstyled">
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
              </ui>
            </div>
            <div className="col">
              <h4>Contact Us</h4>
              <ui className="list-unstyled">
                <li>Email</li>
                <li>Report a Bug</li>
                <li>Report a User</li>
                <li>Join the Team</li>
              </ui>
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
