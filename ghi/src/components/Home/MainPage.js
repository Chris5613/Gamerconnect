import AboutUs from './Team';
import Footer from './Footer';
import './homepage.css';

const Main = () => {
	return (
		<>
			<div className="main">
				<div className="main-container">
					<div className="main-content">
						<h1>
							<span id="title-first-half">GAMER</span>
							<span id="title-second-half">CONNECT</span>
						</h1>
						<p className="texts">
							We don't touch <span id="grass-text">grass</span>,
							do you?
						</p>
						<a href="http://localhost:3000/signup">
							<button type="" className="homepage-btn">
								Get Started
							</button>
						</a>
					</div>
					<div className="main-img">
						<img
							src="https://preview.redd.it/buzyn25jzr761.png?width=1000&format=png&auto=webp&s=c8a55973b52a27e003269914ed1a883849ce4bdc"
							alt="valorant logo"
							className="main-img"
							width="200px"
						/>
						<img
							src="https://logodownload.org/wp-content/uploads/2019/02/apex-legends-logo-9.png"
							alt="apex logo"
							className="main-img"
							width="200px"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png"
							alt="overwatch logo"
							className="main-img"
							width="200px"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png"
							alt="fortnite logo"
							className="main-img"
							width="200px"
						/>
					</div>
				</div>
				<div>
					<AboutUs />
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Main;
