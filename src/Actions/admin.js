import React, { useState, useEffect } from 'react';
import AdminView from '../UI/adminView';
import Config from '../Utilities/Config';

export default function Admin(props) {
	// States
	const [loggedInStatus, setLoggedInStatus] = useState(false);
	const [loggingIn, setIsLoggingIn] = useState(false);
	const redirectURL = Config.redirectURL;
	const viewList = Config.viewList;
	const [menuDetails, setMenuDetails] = useState({ open: false, view: viewList[0] });

	// Functions

	const handleLoggedInStatus = (status) => {
		setLoggedInStatus(status);
	};

	const setLoggingIn = (loggingIn) => {
		setIsLoggingIn(loggingIn);
	};

	const handleMenuActions = (action, ...additionalData) => {
		switch (action) {
			case 'open':
				setMenuDetails((prevState) => ({ ...prevState, open: true, value: '' }));
				break;
			case 'close':
				setMenuDetails((prevState) => ({ ...prevState, open: false, value: '' }));
				break;
			case 'set-view':
				let view = additionalData[0];
				setMenuDetails((prevState) => ({ ...prevState, open: false, view: view }));

				break;
			default:
				break;
		}
	};

	const handleLoginActions = (action, ...additionalDetails) => {
		switch (action) {
			case 'login':
				setIsLoggingIn(true);
				setTimeout(() => {
					redirectToLogin()
				}, 2000);

				break;
			case 'logout':
				console.log('You just clicked on logout button tologout');
				setLoggedInStatus(false);
				window.location.href = `${redirectURL}`;

				break;
			default:
		}
	};

	const redirectToLogin = ()=>{
		setTimeout(() => {
					window.location.href = `https://sign-up-auth.s3.ap-south-1.amazonaws.com/index.html?redirect=${redirectURL}`;

		}, 2000);

	}

	return (
		<AdminView
			loggedInStatus={loggedInStatus}
			handleLoggedInStatus={handleLoggedInStatus}
			loggingIn={loggingIn}
			setLoggingIn={setLoggingIn}
			handleLoginActions={handleLoginActions}
			viewList={viewList}
			menuDetails={menuDetails}
			handleMenuActions={handleMenuActions}
			redirectToLogin={redirectToLogin}
		/>
	);
}
