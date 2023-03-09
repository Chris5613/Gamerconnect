import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Home/Nav";
import MainPage from "./components/Home/MainPage";
import PostList from "./components/Community/PostList";
import UserLoginForm from "./components/Login/userLoginForm";
import { AuthProvider, useToken } from "./components/Login/auth";
import SignUpForm from "./components/SignUp/SignUpForm";
import PostForm from "./components/Community/PostForm";
import Footer from "./components/Home/Footer";
import PostDetails from "./components/Community/postsDetail";
import Profile from "./components/User/Profile";
import Settings from "./components/User/Settings";

function GetToken() {
  useToken();
  return null;
}

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <GetToken />
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<UserLoginForm />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
