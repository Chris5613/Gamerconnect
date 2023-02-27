import React, { useState } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";
import videoBg from "./video.mp4";
import "./Login.css";

function BootstrapInput(props) {
  const { id, placeholder, value, onChange, type } = props;

  return (
    <div className="mb-3">
      <input
        value={value}
        onChange={onChange}
        required
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

function UserLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useToken();
  const UserLogin = token["login"];
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const userInput = await UserLogin(username, password);
    setUsername("");
    setPassword("");
    if (userInput["access_token"]) {
      navigation("/posts");
    } else {
      navigation("/login");
    }
  }
  return (
    <div className="login-container">
      <video autoPlay loop muted className="video">
        <source src={videoBg} type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <BootstrapInput
          id="username"
          placeholder="Username"
          labelText="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="username"
        />
        <BootstrapInput
          id="password"
          placeholder="Password"
          labelText="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <button
          disabled={username.length === 0 && password.length === 0}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default UserLoginForm;
