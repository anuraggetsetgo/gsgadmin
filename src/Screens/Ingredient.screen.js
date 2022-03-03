import React from 'react';
// MUI COMPONENTS
import { Grid, Pagination } from '@mui/material';
// COMPONENTS
import StatusTabs from '../Components/StatusTabs';
import SpinnerLoader from '../Components/SpinnerLoader';
import Snackbar from '../Components/Snackbar';
import PendingFoodCard from '../Components/PendingFoodCard';
import ApprovedFoodCard from '../Components/ApprovedFoodCard';
import RejectedFoodCard from '../Components/RejectedFoodCard';
import IngredientPreview from '../Components/IngredientPreview';
import ApproveDialog from '../Components/ApproveDialog';
import RejectDialog from '../Components/RejectDialog';
import NotFoundMessage from '../Components/NotFoundMessage';

// STYLES & COLORS
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';

function IngredientScreens(props) {
	// De-Structuring props
	const {
		// IngredientsList
		ingredientsList,
		// Is Searching
		isSearching,
		//  tabs
		currentTab,
		handleStatusTabChange,
		//  Pagination
		paginationDetails,
		handlePageUpdate,
		// Distinguish Clicks
		distinguishCardClicks,
		// Ingredient Preview
		ingredientPreviewDetails,
		handleIngredientPreviewActions,
		// Approve Ingredient
		apporveIngredientDetails,
		handleIngredientApproveActions,
		// Reject Ingredient
		rejectIngredientDetails,
		handleIngredientRejectActions,
		// Snackbar
		snackbarDetails,
		closeSnackbar,
	} = props;
	return (
		<Grid container direction='column' justifyContent='flex-start' alignItems='center' style={{ height: '85vh' }}>
			{/* Tabs */}
			<Grid container style={{ height: '7vh' }}>
				<Grid item xs={12}>
					<StatusTabs currentTab={currentTab} onChange={handleStatusTabChange} />
				</Grid>
			</Grid>
			{/* Ingredients */}
			<Grid container style={{ height: '70vh', padding: '10px' }}>
				{isSearching ? (
					<SpinnerLoader
						height={'80vh'}
						loaderColor={colors.grey}
						loaderHeigh={50}
						loaderWidth={50}
						loadingText={'Loading ingredients...'}
					/>
				) : ingredientsList.length > 0 ? (
					<Grid container direction='column'>
						<Grid
							container
							justifyContent='flex-start'
							alignItems={'flex-start'}
							spacing={1}
							style={{ height: '75vh' }}>
							{ingredientsList.map((ingredient, index) => (
								<Grid item xs={3} key={`${ingredient.ingredient_name}-${index}`}>
									{currentTab === '0' ? (
										// Pending
										<PendingFoodCard
											withImage={false}
											image={''}
											code={ingredient.ingredient_code}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											distinguishCardClicks={distinguishCardClicks}
										/>
									) : currentTab === '1' ? (
										// Pending
										<ApprovedFoodCard
											withImage={false}
											image={''}
											code={ingredient.ingredient_code}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											distinguishCardClicks={distinguishCardClicks}
										/>
									) : currentTab === '2' ? (
										// Rejected
										<RejectedFoodCard
											image={''}
											withImage={false}
											code={ingredient.ingredient_code}
											comments={ingredient.ingredients_comments}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											distinguishCardClicks={distinguishCardClicks}
										/>
									) : null}
								</Grid>
							))}
						</Grid>
						<Grid container alignItems='center' justifyContent='center' style={{ height: '5vh' }}>
							<Pagination
								count={paginationDetails.count}
								page={paginationDetails.page}
								onChange={(e, value) => {
									handlePageUpdate(value);
								}}
							/>
						</Grid>
					</Grid>
				) : (
					<NotFoundMessage message={'No ingredients found your matching. Please try again!'} />
				)}
			</Grid>
			{/* Ingredient Preview */}
			<IngredientPreview
				open={ingredientPreviewDetails.open}
				isLoading={ingredientPreviewDetails.isLoading}
				ingredient={ingredientPreviewDetails.ingredient}
				onClose={() => {
					handleIngredientPreviewActions('close-preview');
				}}
				name={
					ingredientPreviewDetails['ingredient']['ingredient_name']
						? ingredientPreviewDetails['ingredient']['ingredient_name']
						: ''
				}
				protein={
					ingredientPreviewDetails['ingredient']['protein'] ? ingredientPreviewDetails['ingredient']['protein'] : 0
				}
				fat={ingredientPreviewDetails['ingredient']['fat'] ? ingredientPreviewDetails['ingredient']['fat'] : 0}
				carbs={
					ingredientPreviewDetails['ingredient']['carbohydrate']
						? ingredientPreviewDetails['ingredient']['carbohydrate']
						: 0
				}
				alcohol={
					ingredientPreviewDetails['ingredient']['calories'] ? ingredientPreviewDetails['ingredient']['calories'] : 0
				}
				fibre={ingredientPreviewDetails['ingredient']['fibre'] ? ingredientPreviewDetails['ingredient']['fibre'] : 0}
				calories={
					ingredientPreviewDetails['ingredient']['calories'] ? ingredientPreviewDetails['ingredient']['calories'] : 0
				}
				quantity={
					ingredientPreviewDetails['ingredient']['ingredient_quantity']
						? ingredientPreviewDetails['ingredient']['ingredient_quantity']
						: ''
				}
				unit={
					ingredientPreviewDetails['ingredient']['ingredient_unit']
						? ingredientPreviewDetails['ingredient']['ingredient_unit']
						: ''
				}
				comments={
					ingredientPreviewDetails['ingredient']['ingredients_comments']
						? ingredientPreviewDetails['ingredient']['ingredients_comments']
						: ''
				}
			/>
			{/* Approve Ingredient */}
			<ApproveDialog
				open={apporveIngredientDetails['openDialog']}
				onApporve={() => {
					handleIngredientApproveActions('approve-ingredient');
				}}
				onClose={() => {
					handleIngredientApproveActions('close-approve-dialog');
				}}
				text='Are you sure want to approve this ingredient?'
			/>
			{/* Reject Ingredient */}
			<RejectDialog
				open={rejectIngredientDetails['openDialog']}
				text={'Are you sure want to reject this ingredient?'}
				comment={rejectIngredientDetails.ingredient_comments}
				onComment={(e) => {
					handleIngredientRejectActions('add-comment', e.target.value);
				}}
				onReject={() => {
					handleIngredientRejectActions('reject-ingredient');
				}}
				onDeclineReject={() => {
					handleIngredientRejectActions('close-reject-dialog');
				}}
			/>
			{/* Snackbar */}
			<Snackbar open={snackbarDetails.open} onClose={closeSnackbar} message={snackbarDetails.message} />
		</Grid>
	);
}

export default IngredientScreens;
