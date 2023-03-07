import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './utils';
import usePasswordValidator from './usePasswordValidator';
import './Signup.css';

function SignUpForm() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');

	const [password, setPassword, passwordError] = usePasswordValidator({
		min: 8,
		max: 15,
	});

	const navigate = useNavigate();

	useEffect(() => {
		if (!email) {
			setEmailError('');
		} else {
			if (validateEmail(email)) {
				setEmailError('');
			} else {
				setEmailError('Please enter a valid email.');
			}
		}
	}, [email]);

	useEffect(() => {
		if (!confirmPassword || !password) {
			setConfirmPasswordError('');
		} else {
			if (password !== confirmPassword) {
				setConfirmPasswordError('The passwords must match.');
			} else {
				setConfirmPasswordError('');
			}
		}
	}, [password, confirmPassword]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = {};
		console.log(data);

		data.username = username;
		data.email = email;
		data.password = confirmPassword;

		const locationUrl = `${process.env.REACT_APP_POSTS_API_HOST}/signup`;
		const fetchConfig = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const response = await fetch(locationUrl, fetchConfig);
			if (response.ok) {
				navigate('/login');
			}
		} catch (error) {
			console.log(error);
			navigate('/login');
		}
	};

	return (
		<>
			<section>
				<div className="signup-container">
					<img
						src="https://i.gyazo.com/67b8b582ea05ff31ad8c78ba42055df2.png"
						alt="logo"
						className="logo"
					/>
					<form onSubmit={handleSubmit} className="signup-form">
						<h3 id="signup-title">
							<strong>Member Signup</strong>
						</h3>
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							type="text"
							className="fontAwesome"
							placeholder="&#xf007;  Username"
						/>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							className="fontAwesome"
							placeholder="&#xf0e0;  Email"
						/>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							className="fontAwesome"
							placeholder="&#xf023;  Password"
						/>
						<input
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							type="password"
							className="fontAwesome"
							placeholder="&#xf023;  Confirm Password"
						/>
						<div className="error-container">
							<div className="error">{confirmPasswordError}</div>
							<div className="error">{passwordError}</div>
							<div className="error">{emailError}</div>
						</div>
						<button className="btn btn-primary signup-btn">
							Submit
						</button>
						<div className="login-link">
							<a href="login">Already have an account? Login</a>
						</div>
					</form>
				</div>
			</section>
			<div className="ghost"></div>
		</>
	);
}
export default SignUpForm;
