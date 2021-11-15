import React, { useState, useEffect } from 'react';
import LoginView from '../UI/loginView';
import Config from '../Utilities/Config';

export default function LoginActions(props) {
	// Props
	const { handleLoggedInStatus } = props;

	// URL and Params
	const redirectURL = Config.redirectURL;
	const authorization = Config.authorization;
	const urlParams = new URLSearchParams(window.location.search);
	let authParam = urlParams.get('auth');
	if (!authParam) {
		authParam = '';
	}

	// States
	const [loggedInStatus, setLoggedInStatus] = useState(false);

	useEffect(() => {
		// console.log('Authorization', authorization, 'Auth', authParam);

		if (authorization === '' || authParam === '') {
			console.log('Logging In...');
			setTimeout(() => {
				window.location.href = `https://sign-up-auth.s3.ap-south-1.amazonaws.com/index.html?redirect=${redirectURL}`;
			}, 3000);
		} else {
			console.log('Logged In :)');
			handleLoggedInStatus(true);
			let returnedURL = new URLSearchParams(window.location.search);
			let returnedParam = returnedURL.get('auth');
			localStorage.setItem('authorization', returnedParam);
		}
	}, [loggedInStatus]);

	// localStorage.setItem('loggedInStatus', loggedInStatus);

	return (
		<div>
			<LoginView loggedInStatus={loggedInStatus} />
		</div>
	);
}
