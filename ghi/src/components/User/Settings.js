import React from "react";
import { useState, useEffect } from "react";
import { useToken } from "../Login/auth";
import "./user.css";

const Settings = () => {
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { token } = useToken();

  useEffect(() => {
    const userData = async () => {
      const url = `${process.env.REACT_APP_POSTS_API_HOST}/token`;
      try {
        const response = await fetch(url, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          const user_info = data.account.id;
          const user_name = data.account.username;
          const email = data.account.email;
          setUserId(user_info);
          setUsername(user_name);
          setEmail(email);
        }
      } catch (e) {}
      return false;
    };
    userData();
  }, []);

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_POSTS_API_HOST}/update/${userId}`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify({
        username: username,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      console.log("Profile Updated");
    }
  };

  return (
    <div className="form-container">
      <h1>Update your account</h1>
      <form onSubmit={handleSubmit} className="update-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default Settings;
