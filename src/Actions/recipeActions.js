import React, { useState, useEffect } from 'react';
import HomeView from '../UI/recipeView';
import Config from '../Utilities/Config';
import { callAPI } from '../Utilities/Api';
// API FUNCTIONS
import { viewRecipeAPI } from '../GSGAPI/admintool.api';
import { approveRecipeAPI } from '../GSGAPI/admintool.api';
import { rejectRecipeAPI } from '../GSGAPI/admintool.api';
function RecipeActions(props) {
	const { redirectToLogin } = props;
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
		metaData: false,
	});

	// Pagination
	const [paginationDetails, setPaginationDetails] = useState({
		page: searchDetails.page,
		count: '',
		recipe_count: recipe_count,
	});

	// Tab Work
	const [tabDetails, setTabDetails] = useState({
		tabs: ['0', '1', '2'],
		tabLabel: ['Pending', 'Approved', 'Rejected'],
		currentTab: '0',
		// tabContent: [<LoginActions handleLoggedInStatus={handleLoggedInStatus} />, <HomeActions />],
	});

	// View Recipe
	const [viewDetails, setViewDetails] = useState({ code: '' });
	const [viewRecipe, setViewRecipe] = useState(false);
	const [viewLoading, setViewLoading] = useState(true);
	const [viewRecipeDetails, setViewRecipeDetails] = useState({ recipe: {}, mappedIngredients: [] });

	// Admin Actions
	const [adminActionDetails, setAdminActionDetails] = useState({ type: 'recipe', action: '', code: '', reason: '' });
	const [approveRecipeAPIData, setApproveRecipeAPIData] = useState({ recipe_code: '' });
	const [rejectRecipeAPIData, setRejectRecipeAPIData] = useState({ recipe_code: '', recipe_comments: '' });
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
			viewRecipeAPI(viewDetails, handleViewRecipeResponse, apiFailed);
		}
	}, [viewDetails]);

	useEffect(() => {
		if (approveRecipeAPIData.recipe_code !== '') {
			approveRecipeAPI(approveRecipeAPIData, handleApproveRecipeAPIResponse, apiFailed);
		}
	}, [approveRecipeAPIData]);

	useEffect(() => {
		if (rejectRecipeAPIData.recipe_code !== '') {
			rejectRecipeAPI(rejectRecipeAPIData, handleRejectRecipeAPIResponse, apiFailed);
		}
	}, [rejectRecipeAPIData]);

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

	const searchRecipies = () => {
		callAPI(
			' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
			'GET',
			searchDetails,
			handleSearchRecipeResponse,
			apiFailed,
		);
	};

	const handleTabChange = (e, newCurrentTabValue) => {
		// console.log(newCurrentTabValue);
		setTabDetails((prevState) => ({ ...prevState, currentTab: newCurrentTabValue }));
		setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true }));
		setSearchDetails((prevState) => ({ ...prevState, status: Number(newCurrentTabValue), page: 1 }));
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
		// setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
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
			searchRecipies();
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};

	const handleApproveRecipeAPIResponse = (response) => {
		if (response.data.success) {
			handleRecipeActions('close-approve-dialog');
			searchRecipies();
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};

	const handleRejectRecipeAPIResponse = (response) => {
		if (response.data.success) {
			handleRecipeActions('close-reject-dialog');
			searchRecipies();
		}
	};

	const apiFailed = (error) => {
		let message = error.message;
		if (error.message.includes('timeout')) {
			message = 'Request timed out. Please try again!';
		}
		if (error.response.status == 401) {
			redirectToLogin();
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: message }));
	};

	const distinguishClicks = (id, ...additionalData) => {
		console.log(id, additionalData);
		let recipe_code = additionalData[0];
		switch (id) {
			case 'view-button':
				// ingredient_code = additionalData[0];
				handleRecipeActions('view', recipe_code);
				break;
			case 'approve-button':
				handleRecipeActions('open-approve-dialog', recipe_code);

				break;
			case 'reject-button':
				handleRecipeActions('open-reject-dialog', recipe_code);

				break;
			case 'card':
				handleRecipeActions('view', recipe_code);

				break;
			default:
				handleRecipeActions('view', recipe_code);

				break;
		}
		// console.log(event, additionalData);
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
				let approve_recipe_code = additionalData[0];
				setApproveDialogDetails((prevState) => ({ ...prevState, open: true, code: approve_recipe_code }));
				break;
			case 'close-approve-dialog':
				setApproveDialogDetails((prevState) => ({ ...prevState, open: false, code: '' }));
				break;
			case 'approve':
				let recipe_code = approveDialogDetails.code;
				// console.log(recipe_code);
				// let approve_admin_action_details = { type: 'recipe', action: 'approve', code: recipe_code };
				// setAdminActionDetails(approve_admin_action_details);
				setApproveRecipeAPIData({ recipe_code: recipe_code });
				break;
			case 'open-reject-dialog':
				let reject_recipe_code = additionalData[0];
				setRejectDialogDetails((prevState) => ({ ...prevState, show: true, code: reject_recipe_code }));
				break;
			case 'add-comment':
				let comment = additionalData[0];
				setRejectDialogDetails((prevState) => ({ ...prevState, comment: comment }));

				break;
			case 'close-reject-dialog':
				setRejectDialogDetails((prevState) => ({ ...prevState, show: false, code: '', comment: '' }));
				break;
			case 'reject':
				let reject_code = rejectDialogDetails.code;
				let reject_comments = rejectDialogDetails.comment;
				setRejectRecipeAPIData((prevState) => ({
					...prevState,
					recipe_code: reject_code,
					recipe_comments: reject_comments,
				}));
				// let tempSearchDetails = searchDetails;
				// setSearchDetails(tempSearchDetails);
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
			distinguishClicks={distinguishClicks}
		/>
	);
}

export default RecipeActions;
