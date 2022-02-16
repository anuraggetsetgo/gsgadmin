import React, { useState, useEffect } from 'react';
// Ingredient Screen
import IngredientScreens from '../Screens/Ingredient.screen';
// CONFIG
import Config from '../Utilities/config';
// CALL API FUNCTIONS
import { searchIngredientsAPICall } from '../GSGAPI/AdminToolAPIs';
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
		status: 0,
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
		setIsSearching(true);
		setIngredientsSearchAPIData((prevState) => ({ ...prevState, status: parseInt(newStatusValue), page: 1 }));
	};

	// -------------
	// USE EFFETCTS
	// -------------
	// Ingredient Search
	useEffect(() => {
		searchIngredientsAPICall(ingredientsSearchAPIData, handleIngredientSearchAPIResponse, apiFailed);
	}, [ingredientsSearchAPIData]);

	// -----------------
	// HANDLER FUNCTIONS
	// -----------------
	// Show Snackbar
	const showSnackbar = (message) => {
		setSnackbarDetails({ open: true, message: message });
	};
	// Close Snackbar
	const closeSnackbar = () => {
		setSnackbarDetails({ open: false, message: '' });
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
			setIsSearching(false);
		}
	};
	// API FAILED
	const apiFailed = (error) => {
		let message = error.message ? error.message : 'Something went wrong. Please try again!';
		if (error.message.includes('timeout')) {
			message = 'Request timed out. Please try again!';
		}
		if (error.response.status == 401) {
			// redirectToLogin();
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
		/>
	);
}

export default IngredientActions;
