import React, { useState, useEffect } from 'react';
import Config from '../Utilities/Config';
import { callAPI } from '../Utilities/Api';

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
	const [viewDetails, setViewDetails] = useState({ type: 'ingredient', code: '' });
	const [viewIngredient, setViewIngredient] = useState(false);
	const [viewLoading, setViewLoading] = useState(true);
	const [viewIngredientDetails, setViewIngredientDetails] = useState({});

	// Admin Actions
	const [adminActionDetails, setAdminActionDetails] = useState({
		type: 'ingredient',
		action: '',
		code: '',
		reason: '',
	});
	const [approveDialogDetails, setApproveDialogDetails] = useState({ open: false, code: '' });
	const [rejectDialogDetails, setRejectDialogDetails] = useState({ show: false, code: '', comment: '' });

	// Use Effect
	useEffect(() => {
		callAPI(
			' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
			'GET',
			ingredientSearchDetails,
			handleIngredientSearchRecipeResponse,
			apiFailed,
		);
	}, [ingredientSearchDetails]);

	useEffect(() => {
		if (viewDetails.code !== '') {
			callAPI(
				'https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/view-item',
				'GET',
				viewDetails,
				handleViewIngredientResponse,
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

	// Functions

	const searchIngredients = () => {
		callAPI(
			' https://otehqisucc.execute-api.ap-south-1.amazonaws.com/dev/search',
			'GET',
			ingredientSearchDetails,
			handleIngredientSearchRecipeResponse,
			apiFailed,
		);
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

	const handleViewIngredientResponse = (response) => {
		// console.log(response.data.data);
		if (response.data.success) {
			setViewIngredientDetails(response.data.data);
			setViewLoading(false);
		}
		// setToastDetails((prevState) => ({ ...prevState, open: true, message: response.data.message }));
	};

	const handleAdminActionResponse = (response) => {
		console.log(response);
		if (response.data.success) {
			if (adminActionDetails.action === 'approve') {
				handleIngredientActions('close-approve-dialog');
			} else {
				handleIngredientActions('close-reject-dialog');
			}
			searchIngredients();
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
				// setTimeout(() => {
				let ingredientCode = additionalData[0];
				// console.log('To be virwd', ingredientCode);
				setViewIngredient(true);
				setViewLoading(true);
				setViewDetails((prevState) => ({ ...prevState, code: ingredientCode }));
				// }, 1000);
				break;
			case 'close-view':
				// console.log('closing view');
				setViewIngredient(false);
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
				let approve_admin_action_details = { type: 'ingredient', action: 'approve', code: recipe_code };
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
					type: 'ingredient',
					action: 'reject',
					code: reject_code,
					comment: reject_comments,
				}));
				handleIngredientActions('close-reject-dialog');

				break;

			default:
				break;
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
