import React, { useState, useEffect } from 'react';
import Config from '../Utilities/Config';
import { callAPI } from '../Utilities/Api';
// API FUNCTIONS
import { searchIngredientsAPI } from '../GSGAPI/admintool.api';
import { approveIngredientAPI } from '../GSGAPI/admintool.api';
import { rejectIngredientAPI } from '../GSGAPI/admintool.api';
import { viewIngredientAPI } from '../GSGAPI/admintool.api';
import IngredientView from '../UI/ingredientView';

function IngredientActions(props) {
	const { redirectToLogin } = props;
	// Consts
	const ingredient_count = Config.ingredient_count;

	// States

	// Search& Ingredient
	const [ingredientList, setIngredientList] = useState([]);
	const [preSearchDetails, setPreSearchDetails] = useState({
		isSearching: true,
		searchTerm: '',
		timeout: 0,
	});
	const [ingredientSearchDetails, setIngredientSearchDetails] = useState({
		type: 'ingredient',
		search: '',
		page: 1,
		count: ingredient_count,
		userId: 18,
		status: 0,
		metaData: false,
	});
	// Tab Work
	const [tabDetails, setTabDetails] = useState({
		tabs: ['0', '1', '2'],
		tabLabel: ['Pending', 'Approved', 'Rejected'],
		currentTab: '0',
	});
	// Pagination
	const [paginationDetails, setPaginationDetails] = useState({
		page: ingredientSearchDetails.page,
		count: '',
		recipe_count: ingredient_count,
	});
	// Toast
	const [toastDetails, setToastDetails] = useState({ open: false, message: '' });
	// View
	const [viewIngredient, setViewIngredient] = useState(false);
	const [viewLoading, setViewLoading] = useState(true);
	const [viewIngredientDetails, setViewIngredientDetails] = useState({});
	// APIs
	const [approveIngredientAPIData, setApproveIngredientAPIData] = useState({ ingredient_code: '' });
	const [rejectIngredientAPIData, setRejectIngredientAPIData] = useState({
		ingredient_code: '',
		ingredient_comments: '',
	});
	const [viewIngredientAPIData, setViewIngredientAPIData] = useState({ code: '' });
	// DIALOGS
	const [approveDialogDetails, setApproveDialogDetails] = useState({ open: false, code: '' });
	const [rejectDialogDetails, setRejectDialogDetails] = useState({ show: false, code: '', comment: '' });

	// Use Effect

	useEffect(() => {
		searchIngredientsAPI(ingredientSearchDetails, handleIngredientSearchRecipeResponse, apiFailed);
		// callAPI(
		// 	' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
		// 	'GET',
		// 	ingredientSearchDetails,
		// 	handleIngredientSearchRecipeResponse,
		// 	apiFailed,
		// );
	}, [ingredientSearchDetails]);

	//  USE EFFECTS

	// VIEW INGREDIENT
	useEffect(() => {
		if (viewIngredientAPIData.code !== '') {
			viewIngredientAPI(viewIngredientAPIData, handleViewIngredientAPIResponse, apiFailed);
		}
	}, [viewIngredientAPIData]);

	// APPROVE INGREDIENT
	useEffect(() => {
		if (approveIngredientAPIData.ingredient_code !== '') {
			approveIngredientAPI(approveIngredientAPIData, handleApproveIngredientAPIResponse, apiFailed);
		}
	}, [approveIngredientAPIData]);

	// REJECT INGREDIENT
	useEffect(() => {
		if (rejectIngredientAPIData.ingredient_code !== '') {
			rejectIngredientAPI(rejectIngredientAPIData, handleRejectIngredientAPIResponse, apiFailed);
		}
	}, [rejectIngredientAPIData]);

	// Functions

	const searchIngredients = () => {
		searchIngredientsAPI(ingredientSearchDetails, handleIngredientSearchRecipeResponse, apiFailed);

		// callAPI(
		// 	' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
		// 	'GET',
		// 	ingredientSearchDetails,
		// 	handleIngredientSearchRecipeResponse,
		// 	apiFailed,
		// );
	};

	const handleIngredientSearchRecipeResponse = (response) => {
		// console.log(response);
		if (response.data.success) {
			setIngredientList(response.data.data.data);
			setPaginationDetails((prevState) => ({
				...prevState,
				count: response.data.data.count,
			}));
			setPreSearchDetails((prevState) => ({ ...prevState, isSearching: false, searchTerm: '' }));
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};

	const handleTabChange = (e, newCurrentTabValue) => {
		// console.log(newCurrentTabValue);
		setTabDetails((prevState) => ({ ...prevState, currentTab: newCurrentTabValue }));
		setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true }));
		setIngredientSearchDetails((prevState) => ({ ...prevState, status: Number(newCurrentTabValue), page: 1 }));
		setPaginationDetails((prevState) => ({ ...prevState, page: 1 }));
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

	const distinguishClicks = (id, ...additionalData) => {
		console.log(id, additionalData);
		let ingredient_code = additionalData[0];
		switch (id) {
			case 'view-button':
				// ingredient_code = additionalData[0];
				handleIngredientActions('view', ingredient_code);
				break;
			case 'approve-button':
				handleIngredientActions('open-approve-dialog', ingredient_code);

				break;
			case 'reject-button':
				handleIngredientActions('open-reject-dialog', ingredient_code);

				break;
			case 'card':
				handleIngredientActions('view', ingredient_code);

				break;
			default:
				handleIngredientActions('view', ingredient_code);

				break;
		}
		// console.log(event, additionalData);
	};

	const handleIngredientActions = (action, ...additionalData) => {
		let ingredient_code, ingredient_comments;
		switch (action) {
			case 'page-update':
				let newPage = additionalData[0];
				// console.log('upatig page');
				setPaginationDetails((prevState) => ({
					...prevState,
					page: newPage,
				}));
				setIngredientSearchDetails((prevState) => ({
					...prevState,
					search: '',
					page: newPage,
				}));
				setPreSearchDetails((prevState) => ({ ...prevState, isSearching: true, searchTerm: '' }));
				break;
			case 'view':
				ingredient_code = additionalData[0];
				setViewIngredient(true);
				setViewLoading(true);
				setViewIngredientAPIData({ code: ingredient_code });
				break;
			case 'close-view':
				// console.log('closing view');
				setViewIngredient(false);
				setViewLoading(true);
				break;
			case 'open-approve-dialog':
				ingredient_code = additionalData[0];
				setApproveDialogDetails((prevState) => ({ ...prevState, open: true, code: ingredient_code }));
				break;
			case 'close-approve-dialog':
				setApproveDialogDetails((prevState) => ({ ...prevState, open: false, code: '' }));
				setApproveIngredientAPIData({ ingredient_code: '' });
				break;
			case 'approve':
				ingredient_code = approveDialogDetails.code;
				setApproveIngredientAPIData({ ingredient_code: ingredient_code });
				break;
			case 'open-reject-dialog':
				ingredient_code = additionalData[0];
				setRejectDialogDetails((prevState) => ({ ...prevState, show: true, code: ingredient_code }));
				break;
			case 'add-comment':
				ingredient_comments = additionalData[0];
				setRejectDialogDetails((prevState) => ({ ...prevState, comment: ingredient_comments }));
				break;
			case 'close-reject-dialog':
				setRejectDialogDetails((prevState) => ({ ...prevState, show: false, code: '', comment: '' }));
				setRejectIngredientAPIData({ ingredient_code: '', ingredient_comments: '' });
				break;
			case 'reject':
				ingredient_code = rejectDialogDetails.code;
				ingredient_comments = rejectDialogDetails.comment;
				setRejectIngredientAPIData({ ingredient_code: ingredient_code, ingredient_comments: ingredient_comments });
				break;

			default:
				break;
		}
	};

	// API FUNCTIONS

	// VIEW INGREDIETN API RESPONSE
	const handleViewIngredientAPIResponse = (response) => {
		if (response.data.success) {
			setViewIngredientDetails(response.data.data);
			setViewLoading(false);
		}
	};

	// APPROVE INGREDIENT API RESPONSE
	const handleApproveIngredientAPIResponse = (response) => {
		if (response.data.success) {
			handleIngredientActions('close-approve-dialog');
			searchIngredients();
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};

	// REJECT INGREDIENT API RESPONSE
	const handleRejectIngredientAPIResponse = (response) => {
		if (response.data.success) {
			handleIngredientActions('close-reject-dialog');
			searchIngredients();
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};

	// API FAILED
	const apiFailed = (error) => {
		let message = error.message ? error.message : 'Something went wrong. Please try again!';
		if (error.message.includes('timeout')) {
			message = 'Request timed out. Please try again!';
		}
		if (error.response.status == 401) {
			redirectToLogin();
		}
		setToastDetails((prevState) => ({ ...prevState, open: true, message: message }));
	};
	return (
		<IngredientView
			status={ingredientSearchDetails.status}
			tabDetails={tabDetails}
			handleTabChange={handleTabChange}
			isSearching={preSearchDetails.isSearching}
			ingredientList={ingredientList}
			toastDetails={toastDetails}
			handleToastOperation={handleToastOperation}
			paginationDetails={paginationDetails}
			handleIngredientActions={handleIngredientActions}
			viewIngredient={viewIngredient}
			viewLoading={viewLoading}
			viewIngredientDetails={viewIngredientDetails}
			approveDialogDetails={approveDialogDetails}
			rejectDialogDetails={rejectDialogDetails}
			distinguishClicks={distinguishClicks}
		/>
	);
}

export default IngredientActions;
