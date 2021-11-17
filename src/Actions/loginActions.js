import React, { useState, useEffect } from 'react';
import LoginView from '../UI/loginView';
import Config from '../Utilities/Config';

export default function LoginActions(props) {
	console.log(props, 'LOGIN ACTION');
	// Props
	const { handleLoggedInStatus, loggedInStatus, loggingIn, setLoggingIn } = props;
	// URL and Params
	const redirectURL = Config.redirectURL;
	const authorization = Config.authorization;
	const urlParams = new URLSearchParams(window.location.search);
	let authParam = urlParams.get('auth');
	if (!authParam) {
		authParam = '';
	}

	// States
	// const [loggedInStatus, setLoggedInStatus] = useState(false);
	// const [isLoggingIn, setIsLoggingIn] = useState(LoggingIn);

	useEffect(() => {
		console.log(
			'Authorization',
			authorization,
			'Auth',
			authParam,
			loggedInStatus,
			redirectURL,
			authorization === '',
			authParam === '',
			loggedInStatus === false,
		);

		// Just Loaded
		if ((authorization === '' || authParam === '') && loggedInStatus === false) {
			console.log('Just loaded Logging In...');
			setLoggingIn(true);
			setTimeout(() => {
				window.location.href = `https://sign-up-auth.s3.ap-south-1.amazonaws.com/index.html?redirect=${redirectURL}`;
			}, 2000);
		} else {
			console.log(' Returned after Logging in :)');
			let returnedURL = new URLSearchParams(window.location.search);
			let returnedParam = returnedURL.get('auth');
			console.log(returnedParam, 'RETURNED AUTH');
			localStorage.setItem('authorization', returnedParam);
			handleLoggedInStatus(true);
			setLoggingIn(false);
		}
		// Returned afterlogin
		// if ((authorization !== '' || authParam !== '') && loggedInStatus === false) {
		// }

		// Returned after login
	}, []);

	// localStorage.setItem('loggedInStatus', loggedInStatus);

	return (
		<div>
			<LoginView loggedInStatus={loggedInStatus} loggingIn={loggingIn} />
		</div>
	);
}
