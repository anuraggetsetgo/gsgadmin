import React from 'react';
// MUI COMPONENTS
import { Grid, Typography } from '@mui/material';
// MUI LAB
import { Pagination } from '@mui/lab';
// COMPONENTS
import StatusTabs from '../Components/StatusTabs';
import SpinnerLoader from '../Components/SpinnerLoader';
import FoodCard from '../Components/FoodCard';
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
		// Distinguish Clicks
		distinguishClicks,
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
						Ingredients
					</Typography>
				</Grid>
			</Grid>
			{/* Ingredients */}
			<Grid container style={{ height: '80vh', padding: '10px' }}>
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
						<Grid container justifyContent='flex-start' spacing={1} style={{ height: '75vh' }}>
							{ingredientsList.map((ingredient, index) => (
								<Grid item xs={3} key={`${ingredient.ingredient_name}-${index}`}>
									{currentTab === '0' ? (
										// Pending
										<FoodCard
											withImage={false}
											code={ingredient.ingredient_code}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											showApproveButton={true}
											showRejectButton={true}
											distinguishClicks={distinguishClicks}
										/>
									) : currentTab === '1' ? (
										// Pending
										<FoodCard
											withImage={false}
											code={ingredient.ingredient_code}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											showApproveButton={false}
											showRejectButton={true}
											distinguishClicks={distinguishClicks}
										/>
									) : currentTab === '2' ? (
										// Rejected
										<FoodCard
											withImage={false}
											code={ingredient.ingredient_code}
											comments={ingredient.ingredients_comments}
											name={ingredient.ingredient_name}
											firstname={ingredient.firstname}
											lastname={ingredient.lastname}
											showApproveButton={false}
											showRejectButton={false}
											distinguishClicks={distinguishClicks}
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
									// handleIngredientActions('page-update', value);
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
		</Grid>
	);
}

export default IngredientScreens;
