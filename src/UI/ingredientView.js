import React from 'react';
import CardView from './cardView';
import ViewIngredient from './viewIngredient';
import ApproveDialog from './approveDialog';
import RejectDialog from './rejectDialog';
import SnackbarView from './snackbar';
import Tabs from './tabs';
import { Grid, Typography } from '@mui/material';
import { Pagination } from '@mui/lab';
import Loader from 'react-loader-spinner';

function IngredientView(props) {
	const {
		status,
		tabDetails,
		handleTabChange,
		isSearching,
		ingredientList,
		toastDetails,
		handleToastOperation,
		paginationDetails,
		handleIngredientActions,
		viewIngredient,
		viewLoading,
		viewIngredientDetails,
		approveDialogDetails,
		rejectDialogDetails,
		distinguishClicks,
	} = props;
	console.log(props);

	return (
		<Grid container direction='column' justifyContent='flex-start' alignItems='center' style={{ height: '90vh' }}>
			{/* Tabs */}
			<Grid container style={{ height: '7vh' }}>
				<Grid item xs={10}>
					<Tabs currentTab={tabDetails.currentTab} onChange={handleTabChange} tabDetails={tabDetails} />
				</Grid>
				<Grid item container justifyContent='center' alignItems='center' xs={2}>
					<Typography variant='h4' color='primary'>
						Ingredient View
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
				) : ingredientList.length > 0 ? (
					<Grid container direction='column'>
						<Grid container justifyContent='flex-start' spacing={1} style={{ height: '75vh' }}>
							{ingredientList.map((ingredient) => (
								<Grid item xs={3}>
									{status === 0 ? (
										<CardView
											type='ingredient'
											code={ingredient.ingredient_code}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											showApproveButton={true}
											showRejectButton={true}
											distinguishClicks={distinguishClicks}

											// onView={() => {
											// 	// distinguishClicks('view-button', ingredient.ingredient_code);
											// }}
											// onApprove={() => {
											// 	// distinguishClicks('approve-button', ingredient.ingredient_code);
											// 	// handleIngredientActions('open-approve-dialog', ingredient.ingredient_code);
											// }}
											// onReject={() => {
											// 	// distinguishClicks('reject-button', ingredient.ingredient_code);
											// 	// handleIngredientActions('open-reject-dialog', ingredient.ingredient_code);
											// }}
											// onClick={() => {
											// 	// distinguishClicks('card', ingredient.ingredient_code);
											// }}
										/>
									) : status === 1 ? (
										<CardView
											type='ingredient'
											code={ingredient.ingredient_code}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											showApproveButton={false}
											showRejectButton={true}
											distinguishClicks={distinguishClicks}

											// onView={() => {
											// 	handleIngredientActions('view', ingredient.ingredient_code);
											// }}
											// onApprove={() => {
											// handleRecipeActions('open-approve-dialog', recipe.recipe_code);
											//  }}
											// onReject={() => {
											// 	handleIngredientActions('open-reject-dialog', ingredient.ingredient_code);
											// }}
											// distinguishClicks={distinguishClicks}
										/>
									) : status === 2 ? (
										<CardView
											// image={''}
											type='ingredient'
											code={ingredient.ingredient_code}
											comments={ingredient.ingredients_comments}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											showApproveButton={false}
											showRejectButton={false}
											distinguishClicks={distinguishClicks}

											// onView={() => {
											// 	handleIngredientActions('view', ingredient.ingredient_code);
											// }}
											// distinguishClicks={distinguishClicks}

											// onApprove={() => {
											// handleRecipeActions('open-approve-dialog', recipe.recipe_code);
											// }}
											// onReject={() => {
											// handleRecipeActions('open-reject-dialog', recipe.recipe_code);
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
									handleIngredientActions('page-update', value);
								}}
							/>
						</Grid>
					</Grid>
				) : (
					// </Grid>
					<Grid container alignItems='center' justifyContent='center' style={{ height: '85vh' }}>
						<Grid item>
							<Typography variant='subtile1' color='error'>
								No ingredients found.
							</Typography>
						</Grid>
					</Grid>
				)}
			</Grid>

			{/* View Ingredient */}
			<ViewIngredient
				open={viewIngredient}
				// open={viewRecipe}
				onClose={() => {
					handleIngredientActions('close-view');
				}}
				isLoading={viewLoading}
				name={viewIngredientDetails.ingredient_name}
				// video={viewRecipeDetails.recipe.recipe_video}
				// calories={viewRecipeDetails.recipe.recipe_calories}
				// cookingtime={viewRecipeDetails.recipe.recipe_cookingtime}
				// cuisine={viewRecipeDetails.recipe.recipe_cuisine}
				// type={Config.type[viewRecipeDetails.recipe.recipe_type]}
				// servings={viewRecipeDetails.recipe.recipe_serving}
				protein={viewIngredientDetails.protein}
				fat={viewIngredientDetails.fat}
				carbohydrate={viewIngredientDetails.carbohydrate}
				alcohol={viewIngredientDetails.alcohol}
				fibre={viewIngredientDetails.fibre}
				calories={viewIngredientDetails.calories}
				quantity={viewIngredientDetails.ingredient_quantity}
				unit={viewIngredientDetails.ingredient_unit}
				// ingredients={viewRecipeDetails.mappedIngredients}
				// steps={viewRecipeDetails.recipe.recipe_steps}
			/>

			{/* Approve Recipe */}
			<ApproveDialog
				open={approveDialogDetails.open}
				text={'Are you sure want to approve this recipe?'}
				secondary={() => {
					// console.log('No');
					handleIngredientActions('close-approve-dialog');
				}}
				primary={() => {
					// console.log('Yes');
					handleIngredientActions('approve');
				}}
			/>
			{/* Reject Recipe */}
			<RejectDialog
				open={rejectDialogDetails.show}
				text={'Are you sure want to reject this recipe?'}
				onChange={(event) => {
					handleIngredientActions('add-comment', event.target.value);
				}}
				primary={() => {
					// console.log('Rejecting...');
					handleIngredientActions('reject');
				}}
				secondary={() => {
					// console.log('No');
					handleIngredientActions('close-reject-dialog');
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
	);
}

export default IngredientView;
