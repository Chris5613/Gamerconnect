import React, { useState } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";
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
    <>
      <div className="login-container">
        <img
          src="https://i.gyazo.com/67b8b582ea05ff31ad8c78ba42055df2.png"
          alt="logo"
          className="logo"
        />
        <form onSubmit={handleSubmit} className="login-form">
          <h3 id="signup-title">
            <strong>Member Login</strong>
          </h3>
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
            className="btn login-btn"
          >
            Submit
          </button>
          <div className="login-link">
            <a href="/signup">Don't have a account? Sign up</a>
          </div>
        </form>
      </div>
      <div className="ghost"></div>
    </>
  );
}
export default UserLoginForm;
