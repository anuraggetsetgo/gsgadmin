import React, { useState, useEffect } from 'react';
import HomeView from '../UI/homeView';
import Config from '../Utilities/Config';
import { callAPI } from '../Utilities/Api';

function HomeActions() {
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
	// Tab Work
	const [tabDetails, setTabDetails] = useState({
		tabs: ['0', '1', '2'],
		tabLabel: ['Pending', 'Approved', 'Rejected'],
		currentTab: '0',
		// tabContent: [<LoginActions handleLoggedInStatus={handleLoggedInStatus} />, <HomeActions />],
	});
	const handleTabChange = (e, newCurrentTabValue) => {
		console.log(newCurrentTabValue, Number(newCurrentTabValue));

		setTabDetails((prevState) => ({ ...prevState, currentTab: newCurrentTabValue }));
		setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true }));
		setSearchDetails((prevState) => ({ ...prevState, status: Number(newCurrentTabValue) }));
	};

	useEffect(() => {
		setTimeout(() => {
			callAPI(
				' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
				'GET',
				searchDetails,
				handleSearchRecipeResponse,
				apiFailed,
			);
		}, 2000);
	}, [searchDetails]);

	const handleSearchRecipeResponse = (response) => {
		// console.log(response, 'SEARCH RECIPE RESPONSE');
		if (response.data.success) {
			setRecipeList(response.data.data.data);
			// setPaginationDetails((prevState) => ({
			// 	...prevState,
			// 	count: response.data.data.count,
			// }));
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

	return (
		<HomeView
			recipeList={recipeList}
			isSearching={preSearchDetails.isSearching}
			tabDetails={tabDetails}
			handleTabChange={handleTabChange}
		/>
	);
}

export default HomeActions;
