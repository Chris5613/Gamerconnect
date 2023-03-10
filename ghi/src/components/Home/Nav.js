import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useToken } from "../Login/auth";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { token } = useToken();
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);

  const logout = async () => {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/token`;
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      navigate("/");
      setLoggedIn(false);
    }
  };

  return (
    <>
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <div className="container-fluid">
            <img
              src="https://cdn2.iconfinder.com/data/icons/xbox-one-controllers/500/gamer_Gear_Red-256.png"
              width="150px"
              alt="logo"
              id="navbar-logo"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar-right"
              id="navbarScroll"
            >
              <ul
                className="navbar-nav ms-auto"
                style={{ "--bs-scroll-height": "100px" }}
              >
                {loggedIn ? (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link dropdown-links" to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle bg-black"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Community
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            className="dropdown-item dropdown-links"
                            to="posts"
                          >
                            Posts
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/396/396449.png?w=826&t=st=1676745310~exp=1676745910~hmac=64854919d3cafb9ed6d69d0dd9d8baa6846af6ef3810a226c163a472e623cad3"
                          alt="user"
                          width="30px"
                        />
                      </a>
                      <ul className="dropdown-menu dropdown">
                        <li>
                          <NavLink
                            className="dropdown-item dropdown-links"
                            to="/"
                            onClick={logout}
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink className="nav-links dropdown-links" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-links dropdown-links" to="login">
                        Log in
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
