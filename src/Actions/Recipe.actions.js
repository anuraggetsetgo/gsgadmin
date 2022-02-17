import React, { useState, useEffect } from 'react';
// Recipe Screen
import RecipeScreen from '../Screens/Recipe.screen';
// CONFIG
import Config from '../Utilities/config';
// CALL API FUNCTIONS
import { searchRecipeAPI } from '../GSGAPI/AdminToolAPIs';
import { fetchRecipeAPI } from '../GSGAPI/AdminToolAPIs';
import { approveRecipeAPI } from '../GSGAPI/AdminToolAPIs';
import { rejectRecipeAPI } from '../GSGAPI/AdminToolAPIs';

function RecipeActions() {
	// -----------
	// CONFIG DATA
	// -----------
	const recipe_count = Config.recipe_count;

	// ----------
	// USE STATES
	// ----------
	// Recipe Search API Data
	const [recipeSearchAPIData, setRecipeSearchAPIData] = useState({
		count: recipe_count,
		page: 1,
		search: '',
		status: 0,
		metaData: false,
	});
	// Fetch Recipe API Data
	const [fetchRecipeAPIData, setFetchRecipeAPIData] = useState({ recipe_code: '' });
	// Approve Recipe API Data
	const [approveRecipeAPIData, setApproveRecipeAPIData] = useState({ recipe_code: '' });
	// Reject Recipe API Data
	const [rejectRecipeAPIData, setRejectRecipeAPIData] = useState({
		recipe_code: '',
		recipe_comments: '',
	});
	// Recipe LIST
	const [recipeList, setRecipeList] = useState([]);
	// Pagination Details
	const [paginationDetails, setPaginationDetails] = useState({ page: recipeSearchAPIData.page, count: 1 });
	// Is Searching
	const [isSearching, setIsSearching] = useState(true);
	// Snackbar Details
	const [snackbarDetails, setSnackbarDetails] = useState({ open: false, message: '' });
	// Handle Tab Change
	const handleStatusTabChange = (event, newStatusValue) => {
		setRecipeSearchAPIData((prevState) => ({ ...prevState, status: parseInt(newStatusValue), page: 1 }));
	};
	// Recipe Preview Details
	const [recipePreviewDetails, setRecipePreviewDetails] = useState({
		open: false,
		recipe: {},
		mappedIngredients: {},
		isLoading: true,
	});
	// Recipe Approve Details
	const [apporveRecipeDetails, setApporveRecipeDetails] = useState({ openDialog: false, recipe_code: '' });
	// Reject Recipe
	const [rejectRecipeDetails, setRejectRecipeDetails] = useState({
		openDialog: false,
		recipe_code: '',
		recipe_comments: '',
	});

	// -------------
	// USE EFFETCTS
	// -------------
	// Recipe Search
	useEffect(() => {
		setIsSearching(true);
		searchRecipeAPI(recipeSearchAPIData, handleRecipeSearchAPIResponse, apiFailed);
	}, [recipeSearchAPIData]);
	// Fetch Recipe
	useEffect(() => {
		if (fetchRecipeAPIData.recipe_code.length > 0) {
			//   We have a valid Recipe code
			fetchRecipeAPI(fetchRecipeAPIData, handleFetchRecipeAPIRespone, apiFailed);
		}
	}, [fetchRecipeAPIData]);
	// Approve Recipe
	useEffect(() => {
		if (apporveRecipeDetails.recipe_code !== '') {
			approveRecipeAPI(approveRecipeAPIData, handleApproveRecipeAPIResponse, apiFailed);
		}
	}, [approveRecipeAPIData]);
	// Reject Recipe
	useEffect(() => {
		if (rejectRecipeAPIData.recipe_code !== '') {
			rejectRecipeAPI(rejectRecipeAPIData, handleRejectRecipeAPIResponse, apiFailed);
		}
	}, [rejectRecipeAPIData]);

	// -----------------
	// HANDLER FUNCTIONS
	// -----------------
	// Search Recipes
	const searchRecipies = () => {
		searchRecipeAPI(recipeSearchAPIData, handleRecipeSearchAPIResponse, apiFailed);
	};
	// Show Snackbar
	const showSnackbar = (message) => {
		setSnackbarDetails({ open: true, message: message });
	};
	// Close Snackbar
	const closeSnackbar = () => {
		setSnackbarDetails({ open: false, message: '' });
	};
	// Handle Page Update
	const handlePageUpdate = (newPage) => {
		setPaginationDetails((prevState) => ({ ...prevState, page: newPage }));
		setRecipeSearchAPIData((prevState) => ({ ...prevState, page: newPage }));
	};
	// Handle Recipe Preview
	const handleRecipePreviewActions = (action, ...additionalData) => {
		let recipe_code = additionalData[0];
		switch (action) {
			case 'open-preview':
				setFetchRecipeAPIData({ recipe_code: recipe_code });
				setRecipePreviewDetails((prevState) => ({ ...prevState, open: true, isLoading: true }));
				break;
			case 'close-preview':
				setRecipePreviewDetails((prevState) => ({
					...prevState,
					open: false,
					isLoading: true,
					re: {},
					mappedIngredients: [],
				}));
				break;
			default:
				break;
		}
	};
	// Handle Approve Recipe Actions
	const handleRecipeApproveActions = (action, ...additionalData) => {
		switch (action) {
			case 'open-approve-dialog':
				let recipe_code = additionalData[0];
				setApporveRecipeDetails((prevState) => ({
					...prevState,
					openDialog: true,
					recipe_code: recipe_code,
				}));
				break;
			case 'close-approve-dialog':
				setApporveRecipeDetails((prevState) => ({ ...prevState, openDialog: false, recipe_code: '' }));
				break;
			case 'approve-recipe':
				setApproveRecipeAPIData({ recipe_code: apporveRecipeDetails['recipe_code'] });
				break;
			default:
				break;
		}
	};
	// Handle Recipe Reject
	const handleRecipeRejectActions = (action, ...additionalData) => {
		let recipe_code, recipe_comments;
		switch (action) {
			case 'open-reject-dialog':
				recipe_code = additionalData[0];
				setRejectRecipeDetails((prevState) => ({
					...prevState,
					openDialog: true,
					recipe_code: recipe_code,
					recipe_comments: '',
				}));
				break;
			case 'close-reject-dialog':
				setRejectRecipeDetails((prevState) => ({
					...prevState,
					openDialog: false,
					recipe_code: '',
					recipe_comments: '',
				}));
				break;
			case 'add-comment':
				recipe_comments = additionalData[0];
				setRejectRecipeDetails((prevState) => ({
					...prevState,
					recipe_comments: recipe_comments,
				}));
				break;
			case 'reject-recipe':
				recipe_code = rejectRecipeDetails['recipe_code'];
				recipe_comments = rejectRecipeDetails['recipe_comments'];
				setRejectRecipeAPIData((prevState) => ({
					...prevState,
					recipe_code: recipe_code,
					recipe_comments: recipe_comments,
				}));

				break;

			default:
				break;
		}
	};

	// Distinguish Card Clicks
	const distinguishCardClicks = (id, ...additionalData) => {
		let recipe_code = additionalData[0];
		switch (id) {
			case 'view-button':
				handleRecipePreviewActions('open-preview', recipe_code);
				break;
			case 'approve-button':
				handleRecipeApproveActions('open-approve-dialog', recipe_code);

				break;
			case 'reject-button':
				handleRecipeRejectActions('open-reject-dialog', recipe_code);

				break;
			case 'card':
				handleRecipePreviewActions('open-preview', recipe_code);

				break;
			default:
				handleRecipePreviewActions('open-preview', recipe_code);
				break;
		}
	};

	// -------------
	// API FUNCTIONS
	// -------------
	// Recipies Search API RESPONSE
	const handleRecipeSearchAPIResponse = (response) => {
		if (response.data.success) {
			setRecipeList(response.data.data.data);
			setPaginationDetails((prevState) => ({
				...prevState,
				count: Math.ceil(response.data.data.count / recipe_count),
			}));
		} else {
			// Incase of failure, recipeList should be set to null array
			setRecipeList([]);
		}
		setIsSearching(false);
	};
	// Fetch Recipe API Response
	const handleFetchRecipeAPIRespone = (response) => {
		if (response.data.success) {
			setRecipePreviewDetails((prevState) => ({
				...prevState,
				isLoading: false,
				recipe: response.data.data.recipe,
				mappedIngredients: response.data.data.mappedIngredients,
			}));
			setFetchRecipeAPIData({ recipe_code: '' });
		}
	};
	// APPROVE Recipe API RESPONSE
	const handleApproveRecipeAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';
		if (response.data.success) {
			handleRecipeApproveActions('close-approve-dialog');
			if (recipeList.length === 1) {
				// this means it was the last recipe on that page
				handlePageUpdate(1);
			} else {
				searchRecipies();
			}
		}
		showSnackbar(message);
	};

	// REJECT Recipe API RESPONSE
	const handleRejectRecipeAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';

		if (response.data.success) {
			handleRecipeRejectActions('close-reject-dialog');
			if (recipeList.length === 1) {
				// this means it was the last recipe on that page
				handlePageUpdate(1);
			} else {
				searchRecipies();
			}
		}
		showSnackbar(message);
	};

	// API FAILED
	const apiFailed = (error) => {
		let message = error.message ? error.message : 'Something went wrong. Please try again!';
		if (error.message.includes('timeout')) {
			message = 'Request timed out. Please try again!';
		}
		showSnackbar(message);
	};

	return (
		<RecipeScreen
			// RecipeList
			recipeList={recipeList}
			// Seaching List
			isSearching={isSearching}
			// Tabs
			currentTab={String(recipeSearchAPIData.status)}
			handleStatusTabChange={handleStatusTabChange}
			// Paginations
			paginationDetails={paginationDetails}
			handlePageUpdate={handlePageUpdate}
			// Distinguish Card Clicks
			distinguishCardClicks={distinguishCardClicks}
			// Recipe Preview
			recipePreviewDetails={recipePreviewDetails}
			handleRecipePreviewActions={handleRecipePreviewActions}
			// Approve Recipe
			apporveRecipeDetails={apporveRecipeDetails}
			handleRecipeApproveActions={handleRecipeApproveActions}
			// Reject Recipe
			rejectRecipeDetails={rejectRecipeDetails}
			handleRecipeRejectActions={handleRecipeRejectActions}
			// Snackbar
			snackbarDetails={snackbarDetails}
			closeSnackbar={closeSnackbar}
		/>
	);
}

export default RecipeActions;
