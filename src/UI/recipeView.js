import React from 'react';
import Loader from 'react-loader-spinner';
import Config from '../Utilities/Config';
import CardView from './cardView';
import ViewRecipe from './viewRecipe';
import ApproveDialog from './approveDialog';
import RejectDialog from './rejectDialog';
import SnackbarView from './snackbar';
import Tabs from './tabs';
import { Grid, Typography } from '@mui/material';
import { Pagination } from '@mui/lab';

function RecipeView(props) {
	// Props
	console.log(props);
	const {
		isSearching,
		recipeList,
		tabDetails,
		handleTabChange,
		paginationDetails,
		toastDetails,
		handleRecipeActions,
		viewLoading,
		viewRecipeDetails,
		viewRecipe,
		approveDialogDetails,
		rejectDialogDetails,
		handleToastOperation,
		status,
	} = props;

	// Rendering
	return (
		<Grid container direction='column' justifyContent='flex-start' alignItems='center' style={{ height: '90vh' }}>
			{/* Tabs */}
			<Grid container style={{ height: '7vh' }}>
				<Grid item xs={10}>
					<Tabs currentTab={tabDetails.currentTab} onChange={handleTabChange} tabDetails={tabDetails} />
				</Grid>
				<Grid item container justifyContent='center' alignItems='center' xs={2}>
					<Typography variant='h6' color='primary'>
						Recipe View
					</Typography>
				</Grid>
			</Grid>
			{/* Body */}
			<Grid container style={{ height: '80vh', padding: '10px' }}>
				{isSearching ? (
					<Grid container alignItems='center' justifyContent='center' style={{ height: '50vh' }}>
						<Grid item>
							<Loader type='Circles' color='lightGrey' height={50} width={50} />
						</Grid>
					</Grid>
				) : recipeList.length > 0 ? (
					<Grid container direction='column'>
						<Grid container justifyContent='flex-start' spacing={1} style={{ height: '75vh' }}>
							{recipeList.map((recipe) => (
								<Grid item xs={4}>
									{status === 0 ? (
										<CardView
											image={recipe.recipe_image}
											firstname={recipe.firstname}
											lastname={recipe.lastname}
											name={recipe.recipe_name}
											onView={() => {
												handleRecipeActions('view', recipe['recipe_code']);
											}}
											onApprove={() => {
												handleRecipeActions('open-approve-dialog', recipe.recipe_code);
											}}
											onReject={() => {
												handleRecipeActions('open-reject-dialog', recipe.recipe_code);
											}}
										/>
									) : status === 1 ? (
										<CardView
											image={recipe.recipe_image}
											name={recipe.recipe_name}
											firstname={recipe.firstname}
											lastname={recipe.lastname}
											onView={() => {
												handleRecipeActions('view', recipe['recipe_code']);
											}}
											// onApprove={() => {
											// 	handleRecipeActions('open-approve-dialog', recipe.recipe_code);
											// }}
											onReject={() => {
												handleRecipeActions('open-reject-dialog', recipe.recipe_code);
											}}
										/>
									) : status === 2 ? (
										<CardView
											image={recipe.recipe_image}
											name={recipe.recipe_name}
											firstname={recipe.firstname}
											lastname={recipe.lastname}
											onView={() => {
												handleRecipeActions('view', recipe['recipe_code']);
											}}
											comments={recipe.recipe_comments}
											// onApprove={() => {
											// 	handleRecipeActions('open-approve-dialog', recipe.recipe_code);
											// }}
											// onReject={() => {
											// 	handleRecipeActions('open-reject-dialog', recipe.recipe_code);
											// }}
										/>
									) : null}
								</Grid>
							))}
						</Grid>
						<Grid container alignItems='center' justifyContent='center' style={{ height: '5vh' }}>
							<Pagination
								count={Math.ceil(paginationDetails.count / paginationDetails.recipe_count)}
								page={paginationDetails.page}
								onChange={(e, value) => {
									// console.log(e, value);
									handleRecipeActions('page-update', value);
								}}
							/>
						</Grid>
					</Grid>
				) : (
					// </Grid>
					<Grid container alignItems='center' justifyContent='center' style={{ height: '85vh' }}>
						<Grid item>
							<Typography variant='subtile1' color='error'>
								No recipes found.
							</Typography>
						</Grid>
					</Grid>
				)}
			</Grid>
			{viewRecipeDetails.mappedIngredients.length !== 0 ? (
				<ViewRecipe
					open={viewRecipe}
					onClose={() => {
						handleRecipeActions('close-view');
					}}
					isLoading={viewLoading}
					name={viewRecipeDetails.recipe.recipe_name}
					video={viewRecipeDetails.recipe.recipe_video}
					calories={viewRecipeDetails.recipe.recipe_calories}
					cookingtime={viewRecipeDetails.recipe.recipe_cookingtime}
					cuisine={viewRecipeDetails.recipe.recipe_cuisine}
					type={Config.type[viewRecipeDetails.recipe.recipe_type]}
					servings={viewRecipeDetails.recipe.recipe_serving}
					protein={viewRecipeDetails.recipe.recipe_protein}
					fat={viewRecipeDetails.recipe.recipe_fat}
					carbs={viewRecipeDetails.recipe.recipe_carb}
					ingredients={viewRecipeDetails.mappedIngredients}
					steps={viewRecipeDetails.recipe.recipe_steps}
				/>
			) : null}
			<Grid container>
				{/* Approve Recipe */}
				<ApproveDialog
					open={approveDialogDetails.open}
					text={'Are you sure want to approve this recipe?'}
					secondary={() => {
						// console.log('No');
						handleRecipeActions('close-approve-dialog');
					}}
					primary={() => {
						// console.log('Yes');
						handleRecipeActions('approve');
					}}
				/>
				{/* Reject Recipe */}
				<RejectDialog
					open={rejectDialogDetails.show}
					text={'Are you sure want to reject this recipe?'}
					onChange={(event) => {
						handleRecipeActions('add-comment', event.target.value);
					}}
					primary={() => {
						// console.log('Rejecting...');
						handleRecipeActions('reject');
					}}
					secondary={() => {
						// console.log('No');
						handleRecipeActions('close-reject-dialog');
					}}
				/>
				{/* Toast */}
				<SnackbarView
					open={toastDetails.open}
					message={toastDetails.message}
					onClose={() => {
						handleToastOperation('close');
					}}
				/>
			</Grid>
		</Grid>
	);
}

export default RecipeView;
