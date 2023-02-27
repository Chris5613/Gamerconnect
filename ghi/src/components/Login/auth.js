import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let internalToken = null;
let user_info = null;

export function getToken() {
  return [internalToken, user_info];
}

export async function getTokenInternal() {
  const url = "http://localhost:8001/token";
  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      internalToken = data.access_token;
      user_info = data.account.id;
      return internalToken, user_info;
    }
  } catch (e) {}
  return false;
}

function handleErrorMessage(error) {
  if ("error" in error) {
    error = error.error;
    try {
      error = JSON.parse(error);
      if ("__all__" in error) {
        error = error.__all__;
      }
    } catch {}
  }
  if (Array.isArray(error)) {
    error = error.join("<br>");
  } else if (typeof error === "object") {
    error = Object.entries(error).reduce(
      (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
      ""
    );
  }
  return error;
}

export const AuthContext = createContext({
  token: null,
  setToken: () => null,
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export function useToken() {
  const { token, setToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchToken() {
      const token = await getTokenInternal();
      setToken(token);
    }
    if (!token) {
      fetchToken();
    }
  }, [setToken, token]);

  async function logout() {
    if (token) {
      const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/token`;
      await fetch(url, { method: "delete", credentials: "include" });
      internalToken = null;
      setToken(null);
      navigate("/");
    }
  }

  async function login(username, password) {
    const url = "http://localhost:8001/token";
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });
    if (response.ok) {
      const userInput = await response.json();
      const token = await getTokenInternal();
      setToken(token);
      return userInput;
    }
    let error = await response.json();
    return handleErrorMessage(error);
  }

  async function signup(username, password, email, firstName, lastName) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/sign_up`;
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login(username, password);
    }
    return false;
  }

  async function update(username, password, email, firstName, lastName) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/accounts`;
    const response = await fetch(url, {
      method: "patch",
      body: JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login(username, password);
    }
    return false;
  }

  return { token, login, logout, signup, update };
}

export const useUser = (token) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!token) {
      return;
    }

    async function getUser() {
      const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/current_user`;
      const response = await fetch(url, {
        credentials: "include",
      });
      if (response.ok) {
        const newUser = await response.json();
        setUser(newUser);
      }
    }

    getUser();
  }, [token]);

  return user;
};
