import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [UserMenu, setUserMenu] = useState(false);
  const userDropdown = [
    // <NavLink className="nav-links" to="/profile">
    //   Profile
    // </NavLink>,
    <NavLink className="nav-links" to="/settings">
      Settings
    </NavLink>,
    <NavLink className="nav-links" to="/logout">
      Logout
    </NavLink>,
  ];
  const [communityMenu, setCommunityMenu] = useState(false);
  const communityDropdown = [
    <NavLink className="nav-links" to="/posts">
      Posts
    </NavLink>,
    <NavLink className="nav-links" to="/events">
      Events
    </NavLink>,
  ];
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <h1 id="navbar-logo">
            <img
              src="https://cdn2.iconfinder.com/data/icons/xbox-one-controllers/500/gamer_Gear_Red-256.png"
              width="150px"
              alt="logo"
            />
          </h1>
          <div className="menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav-menu">
            <li>
              <NavLink className="nav-links" to="/">
                Home
              </NavLink>
            </li>
            <div className="nav-dropdown-section">
              <li>
                <p
                  className="nav-links"
                  onClick={() => setCommunityMenu(!communityMenu)}
                >
                  Community
                </p>
                {communityMenu && (
                  <div className="nav-dropdown">
                    <ul>
                      {communityDropdown.map((menu) => (
                        <li
                          className=" dropdown-items"
                          key={menu}
                          onClick={() => setCommunityMenu(false)}
                        >
                          {menu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </div>

            {/* if user is not logged in */}
            <li>
              <NavLink className="nav-links" to="/login">
                Log in
              </NavLink>
            </li>

            {/* if user is logged in: */}
            <div className="nav-dropdown-section">
              <li>
                <strong
                  className="profile-pic nav-links"
                  onClick={() => setUserMenu(!UserMenu)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/396/396449.png?w=826&t=st=1676745310~exp=1676745910~hmac=64854919d3cafb9ed6d69d0dd9d8baa6846af6ef3810a226c163a472e623cad3"
                    alt="user"
                    width="30px"
                  ></img>
                </strong>
                {UserMenu && (
                  <div className="nav-dropdown">
                    <ul>
                      {userDropdown.map((menu) => (
                        <li
                          className=" dropdown-items"
                          key={menu}
                          onClick={() => setUserMenu(false)}
                        >
                          {menu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;