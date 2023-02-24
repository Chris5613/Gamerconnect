import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './utils';
import usePasswordValidator from './usePasswordValidator';

import './styles.css';

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

		data.username = username;
		data.email = email;
		data.password = confirmPassword;
		console.log(data);

		const locationUrl = 'http://localhost:8001/signup';
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
				navigate('/');
			}
		} catch (error) {
			console.log(error);
			navigate('/');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>Create Account</h3>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Username"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email"
				/>
				<div className="error">{emailError}</div>

				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<div className="error">{passwordError}</div>

				<input
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="password"
					placeholder="Confirm Password"
				/>
				<div className="error">{confirmPasswordError}</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
export default SignUpForm;
