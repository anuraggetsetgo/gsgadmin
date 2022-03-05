import React, { useState, useEffect } from 'react';
// Recipe Screen
import RecipeScreen from '../Screens/Recipe.screen';
// CONFIG
import Config from '../Utilities/config';
// Util Functions
import { validateText } from '../Utilities/utilFunctions';
// CALL API FUNCTIONS
import { searchRecipeAPI, fetchRecipeAPI, approveRecipeAPI, rejectRecipeAPI } from '../GSGAPI/AdminToolAPIs';

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
	});
	// Fetch Recipe API Data
	const [fetchRecipeAPIData, setFetchRecipeAPIData] = useState({ code: '' });
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
	const [apporveRecipeDetails, setApporveRecipeDetails] = useState({
		openDialog: false,
		approvingRecipe: false,
		recipe_code: '',
	});
	// Reject Recipe
	const [rejectRecipeDetails, setRejectRecipeDetails] = useState({
		openDialog: false,
		recipe_code: '',
		rejectingRecipe: false,
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
		if (fetchRecipeAPIData.code.length > 0) {
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
				setFetchRecipeAPIData({ code: recipe_code });
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
					approvingRecipe: false,
					recipe_code: recipe_code,
				}));
				break;
			case 'close-approve-dialog':
				setApporveRecipeDetails((prevState) => ({
					...prevState,
					openDialog: false,
					approvingRecipe: false,
					recipe_code: '',
				}));
				break;
			case 'approve-recipe':
				setApporveRecipeDetails((prevState) => ({
					...prevState,
					approvingRecipe: true,
				}));
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
					rejectingRecipe: false,
					recipe_code: recipe_code,
					recipe_comments: '',
				}));
				break;
			case 'close-reject-dialog':
				setRejectRecipeDetails((prevState) => ({
					...prevState,
					openDialog: false,
					rejectingRecipe: false,
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
				if (!validateText(recipe_comments)) {
					showSnackbar(`${recipe_comments} is an invalid comment. Please check!`);
				} else {
					setRejectRecipeDetails((prevState) => ({ ...prevState, rejectingRecipe: true }));
					setRejectRecipeAPIData((prevState) => ({
						...prevState,
						recipe_code: recipe_code,
						recipe_comments: recipe_comments,
					}));
				}

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
			showSnackbar('Something went wrong. Please try again!');
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
		} else {
			setRecipePreviewDetails((prevState) => ({
				...prevState,
				open: false,
				isLoading: false,
				recipe: {},
				mappedIngredients: [],
			}));
			awsAPIFailed(response);
		}
		setFetchRecipeAPIData({ code: '' });
	};
	// APPROVE Recipe API RESPONSE
	const handleApproveRecipeAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';
		if (response.data.success) {
			if (recipeList.length === 1) {
				// this means it was the last recipe on that page
				handlePageUpdate(1);
			} else {
				searchRecipies();
			}
			showSnackbar(message);
		} else {
			awsAPIFailed(response);
		}
		handleRecipeApproveActions('close-approve-dialog');
	};

	// REJECT Recipe API RESPONSE
	const handleRejectRecipeAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';
		if (response.data.success) {
			if (recipeList.length === 1) {
				// this means it was the last recipe on that page
				handlePageUpdate(1);
			} else {
				searchRecipies();
			}
			showSnackbar(message);
		} else {
			awsAPIFailed(response);
		}
		handleRecipeRejectActions('close-reject-dialog');
	};

	// AWS API FAILED
	const awsAPIFailed = (error) => {
		// Checking for timeout
		let errorMessage = error.data.errorMessage ? error.data.errorMessage : '';
		if (errorMessage.includes('timed out')) {
			showSnackbar('It took too long to respond. Please try again!');
		} else {
			showSnackbar('Something went wrong. Please try again!');
		}
	};

	// API FAILED
	const apiFailed = (error) => {
		let message = error.message ? error.message : 'Something went wrong. Please try again!';
		if (error.message.includes('timeout')) {
			message = 'It took too long to respond. Please try again!';
		}
		setIsSearching(false);
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
