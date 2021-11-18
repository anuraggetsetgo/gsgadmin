import React, { useState, useEffect } from 'react';
import HomeView from '../UI/recipeView';
import Config from '../Utilities/Config';
import { callAPI } from '../Utilities/Api';

function HomeActions() {
	// CONFIG
	const recipe_count = Config.recipe_count;

	// States-----

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

	// View Recipe
	const [viewDetails, setViewDetails] = useState({ type: 'recipe', code: '' });
	const [viewRecipe, setViewRecipe] = useState(false);
	const [viewLoading, setViewLoading] = useState(true);
	const [viewRecipeDetails, setViewRecipeDetails] = useState({ recipe: {}, mappedIngredients: [] });

	// Admin Actions
	const [adminActionDetails, setAdminActionDetails] = useState({ type: 'recipe', action: '', code: '', reason: '' });
	const [approveDialogDetails, setApproveDialogDetails] = useState({ open: false, code: '' });
	const [rejectDialogDetails, setRejectDialogDetails] = useState({ show: false, code: '', comment: '' });

	useEffect(() => {
		// if (loggedInStatus) {
		console.log(searchDetails, 'search details');
		callAPI(
			' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
			'GET',
			searchDetails,
			handleSearchRecipeResponse,
			apiFailed,
		);
		// }
	}, [searchDetails]);

	useEffect(() => {
		if (viewDetails.code !== '') {
			callAPI(
				'https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/view-item',
				'GET',
				viewDetails,
				handleViewRecipeResponse,
				apiFailed,
			);
		}
	}, [viewDetails]);

	useEffect(() => {
		console.log('Approving', adminActionDetails.code);
		if (adminActionDetails.code !== '') {
			callAPI(
				'https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/admin',
				'POST',
				adminActionDetails,
				handleAdminActionResponse,
				apiFailed,
			);
		}
	}, [adminActionDetails]);

	// *** Functions***

	const handleTabChange = (e, newCurrentTabValue) => {
		// console.log(newCurrentTabValue);
		setTabDetails((prevState) => ({ ...prevState, currentTab: newCurrentTabValue }));
		setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true }));
		setSearchDetails((prevState) => ({ ...prevState, status: Number(newCurrentTabValue) }));
	};

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

	const handleViewRecipeResponse = (response) => {
		if (response.data.success) {
			setViewRecipeDetails((prevState) => ({
				...prevState,
				recipe: response.data.recipe,
				mappedIngredients: response.data.mappedIngredients,
			}));
			setViewLoading(false);
		}
		// setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};

	const handleAdminActionResponse = (response) => {
		console.log(response);
		if (response.data.success) {
			if (adminActionDetails.action === 'approve') {
				handleRecipeActions('close-approve-dialog');
			} else {
				handleRecipeActions('close-reject-dialog');
			}
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
					page: newPage,
				}));
				setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true, searchTerm: '' }));
				break;
			case 'view':
				// setTimeout(() => {
				let recipeCode = additionalData[0];
				// console.log('To be virwd', recipeCode);
				setViewRecipe(true);
				setViewLoading(true);
				setViewDetails((prevState) => ({ ...prevState, code: recipeCode }));
				// }, 1000);
				break;
			case 'close-view':
				setViewRecipe(false);
				setViewLoading(true);
				break;
			case 'open-approve-dialog':
				console.log('opeming');
				let approve_recipe_code = additionalData[0];
				console.log(approve_recipe_code);
				setApproveDialogDetails((prevState) => ({ ...prevState, open: true, code: approve_recipe_code }));
				break;
			case 'close-approve-dialog':
				console.log('closing approve dialog');
				setApproveDialogDetails((prevState) => ({ ...prevState, open: false, code: '' }));
				break;
			case 'approve':
				let recipe_code = approveDialogDetails.code;
				console.log(recipe_code);
				let approve_admin_action_details = { type: 'recipe', action: 'approve', code: recipe_code };
				setAdminActionDetails(approve_admin_action_details);
				break;
			case 'open-reject-dialog':
				console.log('opeming');
				let reject_recipe_code = additionalData[0];
				setRejectDialogDetails((prevState) => ({ ...prevState, show: true, code: reject_recipe_code }));
				break;
			case 'add-comment':
				let comment = additionalData[0];
				console.log(comment);
				setRejectDialogDetails((prevState) => ({ ...prevState, comment: comment }));

				break;
			case 'close-reject-dialog':
				setRejectDialogDetails((prevState) => ({ ...prevState, show: false, code: '', comment: '' }));
				break;
			case 'reject':
				let reject_code = rejectDialogDetails.code;
				let reject_comments = rejectDialogDetails.comment;
				setAdminActionDetails((prevState) => ({
					...prevState,
					type: 'recipe',
					action: 'reject',
					code: reject_code,
					comment: reject_comments,
				}));
				let tempSearchDetails = searchDetails;
				setSearchDetails(tempSearchDetails);
				break;

			default:
				break;
		}
	};

	const handleToastOperation = (action) => {
		switch (action) {
			case 'close':
				setToastDetails((prevState) => ({ ...prevState, open: false, message: '' }));

				break;

			default:
				break;
		}
	};

	return (
		<HomeView
			status={searchDetails.status}
			recipeList={recipeList}
			isSearching={preSearchDetails.isSearching}
			tabDetails={tabDetails}
			handleTabChange={handleTabChange}
			paginationDetails={paginationDetails}
			toastDetails={toastDetails}
			handleRecipeActions={handleRecipeActions}
			viewRecipe={viewRecipe}
			viewLoading={viewLoading}
			viewRecipeDetails={viewRecipeDetails}
			approveDialogDetails={approveDialogDetails}
			rejectDialogDetails={rejectDialogDetails}
			toastDetails={toastDetails}
			handleToastOperation={handleToastOperation}
		/>
	);
}

export default HomeActions;
