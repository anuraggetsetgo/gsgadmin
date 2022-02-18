import React, { useState, useEffect } from 'react';
// Ingredient Screen
import IngredientScreens from '../Screens/Ingredient.screen';
// CONFIG
import Config from '../Utilities/config';
// CALL API FUNCTIONS
import { searchIngredientsAPI } from '../GSGAPI/AdminToolAPIs';
import { fetchIngredientAPI } from '../GSGAPI/AdminToolAPIs';
import { approveIngredientAPI } from '../GSGAPI/AdminToolAPIs';
import { rejectIngredientAPI } from '../GSGAPI/AdminToolAPIs';
function IngredientActions() {
	// -----------
	// CONFIG DATA
	// -----------
	const ingredient_count = Config.ingredient_count;

	// ----------
	// USE STATES
	// ----------
	// Ingredient Search API Data
	const [ingredientsSearchAPIData, setIngredientsSearchAPIData] = useState({
		count: ingredient_count,
		page: 1,
		search: '',
		status: 1,
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
	const [snackbarDetails, setSnackbarDetails] = useState({ open: false, message: '' });
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
	const [apporveIngredientDetails, setApporveIngredientDetails] = useState({ openDialog: false, ingredient_code: '' });
	// Reject Ingredient
	const [rejectIngredientDetails, setRejectIngredientDetails] = useState({
		openDialog: false,
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
		setIngredientsSearchAPIData((prevState) => ({ ...prevState, page: newPage }));
	};
	// Handle Ingredient Preview
	const handleIngredientPreviewActions = (action, ...additionalData) => {
		let ingredient_code = additionalData[0];
		switch (action) {
			case 'open-preview':
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
					ingredient_code: ingredient_code,
				}));
				break;
			case 'close-approve-dialog':
				setApporveIngredientDetails((prevState) => ({ ...prevState, openDialog: false, ingredient_code: '' }));
				break;
			case 'approve-ingredient':
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
					ingredient_comments: '',
				}));
				break;
			case 'close-reject-dialog':
				setRejectIngredientDetails((prevState) => ({
					...prevState,
					openDialog: false,
					ingredient_code: '',
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
				setRejectIngredientAPIData((prevState) => ({
					...prevState,
					ingredient_code: ingredient_code,
					ingredient_comments: ingredient_comments,
				}));

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
			setIngredientsList(response.data.data.data);
			setPaginationDetails((prevState) => ({
				...prevState,
				count: Math.ceil(response.data.data.count / ingredient_count),
			}));
		} else {
			// Incase of failure, ingredientList should be set to null array
			setIngredientsList([]);
		}
		setIsSearching(false);
	};
	// Fetch Ingredient API Response
	const handleFetchIngredientAPIRespone = (response) => {
		if (response.data.success) {
			setIngredientPreviewDetails((prevState) => ({ ...prevState, isLoading: false, ingredient: response.data.data }));
			setFetchIngredientAPIData({ code: '' });
		}
	};
	// APPROVE INGREDIENT API RESPONSE
	const handleApproveIngredientAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';
		if (response.data.success) {
			handleIngredientApproveActions('close-approve-dialog');
			if (ingredientsList.length === 1) {
				// this means it was the last ingredient on that page
				handlePageUpdate(1);
			} else {
				searchIngredients();
			}
		}
		showSnackbar(message);
	};

	// REJECT INGREDIENT API RESPONSE
	const handleRejectIngredientAPIResponse = (response) => {
		let message = response.data.message ? response.data.message : '';

		if (response.data.success) {
			handleIngredientRejectActions('close-reject-dialog');
			if (ingredientsList.length === 1) {
				// this means it was the last ingredient on that page
				handlePageUpdate(1);
			} else {
				searchIngredients();
			}
		}
		showSnackbar(message);
	};

	// API FAILED
	const apiFailed = (error) => {
		let message = error.message ? error.message : 'Something went wrong. Please try again!';
		if (error.message.includes('timeout')) {
			message = 'It took too long to respond. Please try again!';
		}
		showSnackbar(message);
	};
	return (
		<IngredientScreens
			// IngredientsList
			ingredientsList={ingredientsList}
			// Seaching List
			isSearching={isSearching}
			// Tabs
			currentTab={String(ingredientsSearchAPIData.status)}
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
