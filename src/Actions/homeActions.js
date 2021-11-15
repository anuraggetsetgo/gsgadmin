import React, { useState, useEffect } from 'react';
import HomeView from '../UI/homeView';
import Config from '../Utilities/Config';
import { callAPI } from '../Utilities/Api';

function HomeActions() {
	// CONFIG
	const redirectURL = Config.redirectURL;
	const authorization = Config.authorization;
	const recipe_count = Config.recipe_count;
	const urlParams = new URLSearchParams(window.location.search);
	let authParam = urlParams.get('auth');
	if (!authParam) {
		authParam = '';
	}

	// States-----

	// Login
	const [loggedInStatus, setLoggedInStatus] = useState(false);
	const [isLoggingIn, setIsLoggingIn] = useState(false);
	// Recipe
	const [recipeList, setRecipeList] = useState([]);
	const [toastDetails, setToastDetails] = useState({ open: false, message: '' });
	const [preSearchDetails, setPreSearchDetails] = useState({
		isSearching: true,
		searchTerm: '',
		timeout: 0,
	});
	const [searchDetails, setSearchDetails] = useState({
		search: '',
		type: 'recipe',
		page: 1,
		count: Config.recipe_count,
		userId: 18,
		status: 0,
	});

	// Pagination
	const [paginationDetails, setPaginationDetails] = useState({ page: 1, count: '', recipe_count: recipe_count });

	// Tab Work
	const [tabDetails, setTabDetails] = useState({
		tabs: ['0', '1', '2'],
		tabLabel: ['Pending', 'Approved', 'Rejected'],
		currentTab: '0',
		// tabContent: [<LoginActions handleLoggedInStatus={handleLoggedInStatus} />, <HomeActions />],
	});

	useEffect(() => {
		// console.log('Authorization', authorization, 'Auth', authParam);

		if ((authorization === '' || authParam === '') && loggedInStatus === false) {
			console.log('Logging In...');
			setIsLoggingIn(true);
			setTimeout(() => {
				window.location.href = `https://sign-up-auth.s3.ap-south-1.amazonaws.com/index.html?redirect=${redirectURL}`;
			}, 3000);
		} else {
			console.log('Logged In :)');
			let returnedURL = new URLSearchParams(window.location.search);
			let returnedParam = returnedURL.get('auth');
			localStorage.setItem('authorization', returnedParam);
			setLoggedInStatus(true);
			setIsLoggingIn(false);
		}
	}, []);

	// *** Functions***

	const handleLoginActions = (action, ...additionalDetails) => {
		switch (action) {
			case 'login':
				setIsLoggingIn(true);
				setTimeout(() => {
					window.location.href = `https://sign-up-auth.s3.ap-south-1.amazonaws.com/index.html?redirect=${redirectURL}`;
					// let returnedURL = new URLSearchParams(window.location.search);
					// let returnedParam = returnedURL.get('auth');
					// localStorage.setItem('authorization', returnedParam);
					// setLoggedInStatus(true);
					// setIsLoggingIn(false);
					// setToastDetails((prevState) => ({ ...prevState, open: true, message: 'Hurray!, Logged In.' }));
				}, 3000);

				break;
			case 'logout':
				setLoggedInStatus(false);

				break;
			default:
		}
	};

	const handleTabChange = (e, newCurrentTabValue) => {
		console.log(newCurrentTabValue);
		setTabDetails((prevState) => ({ ...prevState, currentTab: newCurrentTabValue }));
		setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true }));
		setSearchDetails((prevState) => ({ ...prevState, status: newCurrentTabValue }));
	};

	useEffect(() => {
		// if (loggedInStatus) {
		setTimeout(() => {
			callAPI(
				' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
				'GET',
				searchDetails,
				handleSearchRecipeResponse,
				apiFailed,
			);
		}, 2000);
		// }
	}, [searchDetails]);

	const handleSearchRecipeResponse = (response) => {
		// console.log(response, 'SEARCH RECIPE RESPONSE');
		if (response.data.success) {
			setRecipeList(response.data.data.data);
			setPaginationDetails((prevState) => ({
				...prevState,
				count: response.data.data.count,
			}));
			setPreSearchDetails((prevState) => ({ ...prevState, isSearching: false, searchTerm: '' }));
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};
	const apiFailed = (error) => {
		let message = error.message;
		if (error.message.includes('timeout')) {
			message = 'Request timed out. Please try again!';
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: message }));
	};

	const handleRecipeActions = (action, ...additionalData) => {
		switch (action) {
			case 'page-update':
				let newPage = additionalData[0];
				console.log('upatig page');
				setPaginationDetails((prevState) => ({
					...prevState,
					page: newPage,
				}));
				setSearchDetails((prevState) => ({
					...prevState,
					search: '',
					type: 'recipe',
					page: newPage,
					count: recipe_count,
				}));
				setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true, searchTerm: '' }));

				break;

			default:
				break;
		}
	};

	return (
		<HomeView
			loggedInStatus={loggedInStatus}
			isLoggingIn={isLoggingIn}
			handleLoginActions={handleLoginActions}
			recipeList={recipeList}
			isSearching={preSearchDetails.isSearching}
			tabDetails={tabDetails}
			handleTabChange={handleTabChange}
			paginationDetails={paginationDetails}
			toastDetails={toastDetails}
			handleRecipeActions={handleRecipeActions}
		/>
	);
}

export default HomeActions;
