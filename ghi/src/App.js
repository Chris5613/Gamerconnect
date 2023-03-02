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

function GetToken() {
  useToken();
  return null;
}
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GetToken />
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts">
            <Route index element={<PostList />} />
            <Route path="new" element={<PostForm />} />
          </Route>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<UserLoginForm />} />
          <Route path="/posts/:id" element={<PostDetails />}></Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
