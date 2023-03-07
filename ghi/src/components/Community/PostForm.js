import React, { useState, useEffect } from "react";
import { useAuthContext } from "../Login/auth";
import "./PostForm.css";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const { token } = useAuthContext();
  const [games, setGames] = useState([]);
  const [cur_user, setUser] = useState("");
  const navigate = useNavigate();

  const gamesData = async () => {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/games`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setGames(data);
    }
  };

  const userData = async () => {
    const url = `${process.env.REACT_APP_POSTS_API_HOST}/token`;
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const user_info = data.account.id;
        setUser(user_info);
      }
    } catch (e) {}
    return false;
  };

  useEffect(() => {
    gamesData();
    userData();
    if (token === false) {
      navigate("/login");
    }
  }, [token, navigate]);

  const [title, setTitle] = useState("");
  const titlechange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const [description, setDescription] = useState("");
  const descriptionchange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const [picture, setPicture] = useState("");
  const picturechange = (event) => {
    const value = event.target.value;
    setPicture(value);
  };

  const [game, setGame] = useState("");
  const gamechange = (event) => {
    const value = event.target.value;
    setGame(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};
    data.title = title;
    data.description = description;
    data.picture_url = picture;
    if (picture === "") {
      data.picture_url =
        "https://progameguides.com/wp-content/uploads/2019/01/fortnite-outfit-jonesy.jpg?fit=875%2C915";
    }
    data.game_id = game;
    data.user_id = cur_user;

    const postURL = `${process.env.REACT_APP_POSTS_API_HOST}/post`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(postURL, fetchConfig);
    console.log(response);
    if (response.ok) {
      const newPost = await response.json();
      console.log(newPost);
      navigate(`/posts/${newPost.id}`);

      setTitle("");
      setDescription("");
      setPicture("");
      setGame("");
    }
  };

  return (
    <div className="my-5 container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h1 className="card-title">Create a post</h1>

                <div className="row">
                  <div className="col">
                    <div className="create-form">
                      <div className="form-floating mb-3">
                        <input
                          onChange={titlechange}
                          required
                          placeholder="Title"
                          type="text"
                          id="title"
                          name="title"
                          className="form-control"
                          value={title}
                        />
                        <label htmlFor="title">Title</label>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          onChange={descriptionchange}
                          className="form-control"
                          name="description"
                          id="description"
                          rows="3"
                          value={description}
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <input
                          onChange={picturechange}
                          placeholder="Picture URL"
                          type="url"
                          name="picture_url"
                          id="picture_url"
                          className="form-control"
                          value={picture}
                        />
                        <label htmlFor="picture">Picture URL</label>
                      </div>

                      <select
                        onChange={gamechange}
                        required
                        id="game"
                        name="game"
                        className="form-select"
                        value={game}
                      >
                        <option className="dropdown-3" value="">
                          Choose a game
                        </option>
                        {games.map((gamess) => {
                          return (
                            <option
                              className="dropdown-3"
                              key={gamess.id}
                              value={gamess.id}
                            >
                              {gamess.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">Post</button>
              </form>
              <div
                className="alert alert-success d-none mb-0"
                id="success-message"
              >
                Your post has been made.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
