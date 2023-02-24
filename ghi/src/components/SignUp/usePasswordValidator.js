import { useState, useEffect } from 'react';

function usePasswordValidator(config = { min: 8, max: 15 }) {
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');

	useEffect(() => {
		setPasswordError('');
		if (!password) return;

		if (password.length < 8) {
			setPasswordError(`Password must be at least 8 characters.`);
		} else if (password.length > 15) {
			setPasswordError(`Password must be less than 15 characters.`);
		}
	}, [password]);

	return [password, setPassword, passwordError];
}

export default usePasswordValidator;
