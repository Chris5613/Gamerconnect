import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Home/Nav';
import MainPage from './components/Home/MainPage';
import PostList from './components/Community/PostList';

function App(props) {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/posts" element={<PostList />} />
				{/* // <Route path="/signup" element={<SignUpForm />} /> */}
				{/* <Route path="/posts" element={<MainPage />} />
        <Route path="/events" element={<MainPage />} />
        <Route path="/settings" element={<MainPage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
