import React from 'react';
// MUI COMPONENTS
import { Grid, Typography } from '@mui/material';
// MUI LAB
import { Pagination } from '@mui/lab';
// COMPONENTS
import StatusTabs from '../Components/StatusTabs';
import SpinnerLoader from '../Components/SpinnerLoader';
import Snackbar from '../Components/Snackbar';
import FoodCard from '../Components/FoodCard';
import NotFoundMessage from '../Components/NotFoundMessage';
import RecipePreview from '../Components/RecipePreview';
import ApproveDialog from '../Components/ApproveDialog';
import RejectDialog from '../Components/RejectDialog';

// STYLES & COLORS
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';

function RecipeScreen(props) {
	// De-Structuring props
	const {
		// Recipies List
		recipeList,
		// Seaching List
		isSearching,
		// Tabs
		currentTab,
		handleStatusTabChange,
		// Paginations
		paginationDetails,
		handlePageUpdate,
		// Distinguish Card Clicks
		distinguishCardClicks,
		// Recipe Preview
		recipePreviewDetails,
		handleRecipePreviewActions,
		// Approve Recipe
		apporveRecipeDetails,
		handleRecipeApproveActions,
		// Reject Recipe
		rejectRecipeDetails,
		handleRecipeRejectActions,
		// Snackbar
		snackbarDetails,
		closeSnackbar,
	} = props;

	return (
		<Grid container direction='column' justifyContent='flex-start' alignItems='center' style={{ height: '90vh' }}>
			{/* Tabs */}
			<Grid container style={{ height: '7vh' }}>
				<Grid item xs={10}>
					<StatusTabs currentTab={currentTab} onChange={handleStatusTabChange} />
				</Grid>
				<Grid item xs={2} container justifyContent='center' alignItems='center'>
					<Typography variant='h5' color={colors.grey}>
						Recipies
					</Typography>
				</Grid>
			</Grid>
			{/* Recipies */}
			<Grid container style={{ height: '80vh', padding: '10px' }}>
				{isSearching ? (
					<SpinnerLoader
						height={'80vh'}
						loaderColor={colors.grey}
						loaderHeigh={50}
						loaderWidth={50}
						loadingText={'Loading recipies...'}
					/>
				) : recipeList.length > 0 ? (
					<Grid container direction='column'>
						<Grid container justifyContent='flex-start' spacing={1} style={{ height: '75vh' }}>
							{recipeList.map((recipe, index) => (
								<Grid item xs={4} key={`${recipe.recipe_name}-${index}`}>
									{currentTab === '0' ? (
										// Pending
										<FoodCard
											withImage={true}
											image={recipe.recipe_image}
											code={recipe.recipe_code}
											name={recipe.recipe_name}
											firstname={recipe.firstname}
											lastname={recipe.lastname}
											showApproveButton={true}
											showRejectButton={true}
											distinguishCardClicks={distinguishCardClicks}
										/>
									) : currentTab === '1' ? (
										// Pending
										<FoodCard
											withImage={true}
											image={recipe.recipe_image}
											code={recipe.recipe_code}
											name={recipe.recipe_name}
											firstname={recipe.firstname}
											lastname={recipe.lastname}
											showApproveButton={false}
											showRejectButton={true}
											distinguishCardClicks={distinguishCardClicks}
										/>
									) : currentTab === '2' ? (
										// Rejected
										<FoodCard
											withImage={true}
											image={recipe.recipe_image}
											code={recipe.recipe_code}
											name={recipe.recipe_name}
											firstname={recipe.firstname}
											lastname={recipe.lastname}
											showApproveButton={false}
											showRejectButton={false}
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
					<NotFoundMessage message={'No recipies found your matching. Please try again!'} />
				)}
			</Grid>
			{/* Reipe Preview */}
			<RecipePreview
				open={recipePreviewDetails.open}
				isLoading={recipePreviewDetails.isLoading}
				recipe={recipePreviewDetails.recipe}
				mappedIngredients={recipePreviewDetails.mappedIngredients}
				onClose={() => {
					handleRecipePreviewActions('close-preview');
				}}
			/>
			{/* Approve Recipe */}
			<ApproveDialog
				open={apporveRecipeDetails['openDialog']}
				onApporve={() => {
					handleRecipeApproveActions('approve-recipe');
				}}
				onClose={() => {
					handleRecipeApproveActions('close-approve-dialog');
				}}
				text='Are you sure want to approve this recipe?'
			/>
			{/* Reject Recipe */}
			<RejectDialog
				open={rejectRecipeDetails['openDialog']}
				text={'Are you sure want to reject this recipe?'}
				onComment={(e) => {
					handleRecipeRejectActions('add-comment', e.target.value);
				}}
				onReject={() => {
					handleRecipeRejectActions('reject-recipe');
				}}
				onDeclineReject={() => {
					handleRecipeRejectActions('close-reject-dialog');
				}}
			/>
			{/* Snackbar */}
			<Snackbar open={snackbarDetails.open} onClose={closeSnackbar} message={snackbarDetails.message} />
		</Grid>
	);
}

export default RecipeScreen;
