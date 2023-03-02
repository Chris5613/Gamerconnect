import { useToken } from "../Login/auth";

const Button = () => {
  const { token } = useToken();
  if (!token) {
    return (
      <div>
        <button type="" className="homepage-btn">
          Get Started
        </button>
      </div>
    );
  }
};

export default Button;
