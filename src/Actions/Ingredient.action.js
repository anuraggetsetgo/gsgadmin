import React, { useState, useEffect } from 'react';
// Ingredient Screen
import IngredientScreens from '../Screens/Ingredient.screen';
// CONFIG
import Config from '../Utilities/config';

// Util Functions
import { validateText } from '../Utilities/utilFunctions';
// CALL API FUNCTIONS
import {
	searchIngredientsAPI,
	fetchIngredientAPI,
	approveIngredientAPI,
	rejectIngredientAPI,
} from '../GSGAPI/AdminToolAPIs';

function IngredientActions() {
	// -----------
	// CONFIG DATA
	// -----------
	const ingredient_count = Config.ingredient_count;
	const defaultErrorMessage = Config.defaultErrorMessage;

	// ----------
	// USE STATES
	// ----------
	// CURRENT TAB
	const [currentTab, setCurrentTab] = useState('0');
	// Ingredient Search API Data
	const [ingredientsSearchAPIData, setIngredientsSearchAPIData] = useState({
		count: ingredient_count,
		page: 1,
		search: '',
		status: 0,
	});
	// Fetch Ingredient API Data
	const [fetchIngredientAPIData, setFetchIngredientAPIData] = useState({ code: '' });
	// Approve Ingredient API Data
	const [approveIngredientAPIData, setApproveIngredientAPIData] = useState({ ingredient_code: '' });
	// Reject Ingredient API Data
	const [rejectIngredientAPIData, setRejectIngredientAPIData] = useState({
		ingredient_code: '',
		ingredient_comments: '',
	});
	// INGREDIETNS LIST
	const [ingredientsList, setIngredientsList] = useState([]);
	// Pagination Details
	const [paginationDetails, setPaginationDetails] = useState({ page: ingredientsSearchAPIData.page, count: 1 });
	// Is Searching
	const [isSearching, setIsSearching] = useState(true);
	// Snackbar Details
	const [snackbarDetails, setSnackbarDetails] = useState({ open: false, message: '', severity: 'info' });
	// Handle Tab Change
	const handleStatusTabChange = (event, newStatusValue) => {
		setIngredientsSearchAPIData((prevState) => ({ ...prevState, status: parseInt(newStatusValue), page: 1 }));
	};
	// Ingredient Preview Details
	const [ingredientPreviewDetails, setIngredientPreviewDetails] = useState({
		open: false,
		ingredient: {},
		isLoading: true,
	});
	// Ingredient Approve Details
	const [apporveIngredientDetails, setApporveIngredientDetails] = useState({
		openDialog: false,
		apporvingIngredient: false,
		ingredient_code: '',
	});
	// Reject Ingredient
	const [rejectIngredientDetails, setRejectIngredientDetails] = useState({
		openDialog: false,
		rejectingIngredient: false,
		ingredient_code: '',
		ingredient_comments: '',
	});

	// -------------
	// USE EFFETCTS
	// -------------
	// Ingredient Search
	useEffect(() => {
		setIsSearching(true);
		searchIngredientsAPI(ingredientsSearchAPIData, handleIngredientSearchAPIResponse, apiFailed);
	}, [ingredientsSearchAPIData]);
	// Fetch Ingredient
	useEffect(() => {
		if (fetchIngredientAPIData.code.length > 0) {
			//   We have a valid ingredient code
			fetchIngredientAPI(fetchIngredientAPIData, handleFetchIngredientAPIRespone, apiFailed);
		}
	}, [fetchIngredientAPIData]);
	// Approve Ingredient
	useEffect(() => {
		if (approveIngredientAPIData.ingredient_code !== '') {
			approveIngredientAPI(approveIngredientAPIData, handleApproveIngredientAPIResponse, apiFailed);
		}
	}, [approveIngredientAPIData]);
	// Reject Ingredient
	useEffect(() => {
		if (rejectIngredientAPIData.ingredient_code !== '') {
			rejectIngredientAPI(rejectIngredientAPIData, handleRejectIngredientAPIResponse, apiFailed);
		}
	}, [rejectIngredientAPIData]);

	// -----------------
	// HANDLER FUNCTIONS
	// -----------------
	// Search Ingredients
	const searchIngredients = () => {
		searchIngredientsAPI(ingredientsSearchAPIData, handleIngredientSearchAPIResponse, apiFailed);
	};
	// Show Snackbar
	const showSnackbar = (message, severity) => {
		setSnackbarDetails({ open: true, message: message, severity: severity });
	};
	// Close Snackbar
	const closeSnackbar = () => {
		setSnackbarDetails({ open: false, message: '' });
	};
	// Handle Page Update
	const handlePageUpdate = (newPage) => {
		setPaginationDetails((prevState) => ({ ...prevState, page: newPage }));
		setIngredientsSearchAPIData((prevState) => ({ ...prevState, page: newPage }));
	};
	// Handle Ingredient Preview
	const handleIngredientPreviewActions = (action, ...additionalData) => {
		let ingredient_code;
		switch (action) {
			case 'open-preview':
				ingredient_code = additionalData[0];

				setFetchIngredientAPIData({ code: ingredient_code });
				setIngredientPreviewDetails((prevState) => ({ ...prevState, open: true, isLoading: true }));
				break;
			case 'close-preview':
				setIngredientPreviewDetails((prevState) => ({ ...prevState, open: false, isLoading: true, ingredient: {} }));
				break;
			default:
				break;
		}
	};
	// Handle Approve Ingredient Actions
	const handleIngredientApproveActions = (action, ...additionalData) => {
		switch (action) {
			case 'open-approve-dialog':
				let ingredient_code = additionalData[0];
				setApporveIngredientDetails((prevState) => ({
					...prevState,
					openDialog: true,
					apporvingIngredient: false,
					ingredient_code: ingredient_code,
				}));
				break;
			case 'close-approve-dialog':
				setApporveIngredientDetails((prevState) => ({
					...prevState,
					openDialog: false,
					apporvingIngredient: false,
					ingredient_code: '',
				}));
				break;
			case 'approve-ingredient':
				setApporveIngredientDetails((prevState) => ({ ...prevState, openDialog: true, apporvingIngredient: true }));
				setApproveIngredientAPIData({ ingredient_code: apporveIngredientDetails['ingredient_code'] });
				break;
			default:
				break;
		}
	};
	// Handle Ingredient Reject
	const handleIngredientRejectActions = (action, ...additionalData) => {
		let ingredient_code, ingredient_comments;
		switch (action) {
			case 'open-reject-dialog':
				ingredient_code = additionalData[0];
				setRejectIngredientDetails((prevState) => ({
					...prevState,
					openDialog: true,
					ingredient_code: ingredient_code,
					rejectingIngredient: false,
					ingredient_comments: '',
				}));
				break;
			case 'close-reject-dialog':
				setRejectIngredientDetails((prevState) => ({
					...prevState,
					openDialog: false,
					ingredient_code: '',
					rejectingIngredient: false,
					ingredient_comments: '',
				}));
				break;
			case 'add-comment':
				ingredient_comments = additionalData[0];

				setRejectIngredientDetails((prevState) => ({
					...prevState,
					ingredient_comments: ingredient_comments,
				}));

				break;
			case 'reject-ingredient':
				ingredient_code = rejectIngredientDetails['ingredient_code'];
				ingredient_comments = rejectIngredientDetails['ingredient_comments'];
				if (!validateText(ingredient_comments)) {
					showSnackbar(`${ingredient_comments} is an invalid comment. Please check!`, 'warning');
				} else {
					setRejectIngredientDetails((prevState) => ({ ...prevState, rejectingIngredient: true }));
					setRejectIngredientAPIData((prevState) => ({
						...prevState,
						ingredient_code: ingredient_code,
						ingredient_comments: ingredient_comments,
					}));
				}

				break;

			default:
				break;
		}
	};

	// Distinguish Card Clicks
	const distinguishCardClicks = (id, ...additionalData) => {
		let ingredient_code = additionalData[0];
		switch (id) {
			case 'view-button':
				handleIngredientPreviewActions('open-preview', ingredient_code);
				break;
			case 'approve-button':
				handleIngredientApproveActions('open-approve-dialog', ingredient_code);

				break;
			case 'reject-button':
				handleIngredientRejectActions('open-reject-dialog', ingredient_code);

				break;
			case 'card':
				handleIngredientPreviewActions('open-preview', ingredient_code);

				break;
			default:
				handleIngredientPreviewActions('open-preview', ingredient_code);
				break;
		}
	};

	// -------------
	// API FUNCTIONS
	// -------------
	// Ingredints Search API RESPONSE
	const handleIngredientSearchAPIResponse = (response) => {
		if (response.data.success) {
			setIsSearching(false);
			setCurrentTab(String(ingredientsSearchAPIData.status));
			setIngredientsList(response.data.data.data);
			setPaginationDetails((prevState) => ({
				...prevState,
				count: Math.ceil(response.data.data.count / ingredient_count),
			}));
		} else {
			awsAPIFailed(response);
		}
	};
	// Fetch Ingredient API Response
	const handleFetchIngredientAPIRespone = (response) => {
		if (response.data.success) {
			setIngredientPreviewDetails((prevState) => ({
				...prevState,
				isLoading: false,
				ingredient: response.data.data,
			}));
		} else {
			awsAPIFailed(response);
		}
	};
	// APPROVE INGREDIENT API RESPONSE
	const handleApproveIngredientAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';
		if (response.data.success) {
			if (ingredientsList.length === 1) {
				// this means it was the last ingredient on that page
				handlePageUpdate(1);
			} else {
				searchIngredients();
			}
			showSnackbar(message, 'success');
		} else {
			awsAPIFailed(response);
		}
		handleIngredientApproveActions('close-approve-dialog');
	};

	// REJECT INGREDIENT API RESPONSE
	const handleRejectIngredientAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';
		if (response.data.success) {
			if (ingredientsList.length === 1) {
				// this means it was the last ingredient on that page
				handlePageUpdate(1);
			} else {
				searchIngredients();
			}
			showSnackbar(message, 'success');
		} else {
			awsAPIFailed(response);
		}
		handleIngredientRejectActions('close-reject-dialog');
	};
	// AWS API FAILED
	const awsAPIFailed = (error) => {
		// Checking for timeout
		let errorMessage = error.data.errorMessage ? error.data.errorMessage : '';
		if (errorMessage.includes('timed out')) {
			showSnackbar('It took too long to respond. Please try again!', 'error');
		} else {
			showSnackbar(defaultErrorMessage, 'error');
		}
		// Reseting all concerned the API calls
		setIsSearching(false);
		handleIngredientPreviewActions('close-preview');
	};

	// API FAILED
	const apiFailed = (error) => {
		let message = error.response.data.message ? error.response.data.message : defaultErrorMessage;
		if (error.message.includes('timeout')) {
			message = 'It took too long to respond. Please try again!';
		}
		// Reseting all concerned the API calls
		setIsSearching(false);
		handleIngredientPreviewActions('close-preview');
		// Showing  a default message for API failed
		showSnackbar(message, 'error');
	};
	return (
		<IngredientScreens
			// IngredientsList
			ingredientsList={ingredientsList}
			// Seaching List
			isSearching={isSearching}
			// Tabs
			currentTab={currentTab}
			handleStatusTabChange={handleStatusTabChange}
			// Paginations
			paginationDetails={paginationDetails}
			handlePageUpdate={handlePageUpdate}
			// Distinguish Card Clicks
			distinguishCardClicks={distinguishCardClicks}
			// Ingredient Preview
			ingredientPreviewDetails={ingredientPreviewDetails}
			handleIngredientPreviewActions={handleIngredientPreviewActions}
			// Approve Ingredient
			apporveIngredientDetails={apporveIngredientDetails}
			handleIngredientApproveActions={handleIngredientApproveActions}
			// Reject Ingredient
			rejectIngredientDetails={rejectIngredientDetails}
			handleIngredientRejectActions={handleIngredientRejectActions}
			// Snackbar
			snackbarDetails={snackbarDetails}
			closeSnackbar={closeSnackbar}
		/>
	);
}

export default IngredientActions;
