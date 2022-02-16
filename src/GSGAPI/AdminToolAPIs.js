// This file consist of all the API functions
// Importig Call API Function
import { callAPI } from '../Utilities/api';

// Search Ingredients
export function searchIngredientsAPICall(data, successCallback, failureCallback) {
	callAPI(
		' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search-ingredient',
		'GET',
		data,
		successCallback,
		failureCallback,
	);
}
// Search Recipes

// View Ingredient
export function viewIngredientAPI(data, successCallback, failureCallback) {
	callAPI(
		' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/view-ingredient',
		'GET',
		data,
		successCallback,
		failureCallback,
	);
}
// View Recipes
export function viewRecipeAPI(data, successCallback, failureCallback) {
	callAPI(
		' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/view-recipe',
		'GET',
		data,
		successCallback,
		failureCallback,
	);
}
// Approve Ingredient
export function approveIngredientAPI(data, successCallback, failureCallback) {
	callAPI(
		'https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/approve-ingredient',
		'POST',
		data,
		successCallback,
		failureCallback,
	);
}
// Approve Recipe
export function approveRecipeAPI(data, successCallback, failureCallback) {
	callAPI(
		'https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/approve-recipe',
		'POST',
		data,
		successCallback,
		failureCallback,
	);
}
// Reject Ingredient
export function rejectIngredientAPI(data, successCallback, failureCallback) {
	callAPI(
		'https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/reject-ingredient',
		'POST',
		data,
		successCallback,
		failureCallback,
	);
}
// Reject Recipe
export function rejectRecipeAPI(data, successCallback, failureCallback) {
	callAPI(
		' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/reject-recipe',
		'POST',
		data,
		successCallback,
		failureCallback,
	);
}
