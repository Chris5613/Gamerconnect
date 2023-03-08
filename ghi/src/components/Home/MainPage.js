import AboutUs from "./Team";
import "./homepage.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <h1>
            <span id="title-first-half">GAMER</span>
            <span id="title-second-half">CONNECT</span>
          </h1>
          <p className="texts">
            We don't touch <span id="grass-text">grass</span>, do you?
          </p>
          <NavLink to="signup">
            <Button />
          </NavLink>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
      <div className="ghost"></div>
    </>
  );
};

export default Main;
