import React, { useState } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";

function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props;

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
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
    e.preventDefault()
    const userInput = await UserLogin(username, password);
    console.log("HEREEEE!@!!!", userInput)
    setUsername('')
    setPassword('')
    if (userInput["access_token"]) {
      navigation("/posts");
    }else {
      navigation("/userloginform")
  }
}
  return (
    <form onSubmit={handleSubmit}>
      <BootstrapInput
        id="username"
        placeholder="Username"
        labelText="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
        type="username"
      />
      <BootstrapInput
        id="password"
        placeholder="Password"
        labelText="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        type="password"
      />
      <button
        disabled={username.length === 0 && password.length === 0}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
export default UserLoginForm
