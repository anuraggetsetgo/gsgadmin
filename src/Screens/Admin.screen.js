import React from 'react';
// MUI
import { Button, Grid, Typography } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// BODY ACTION COMPONENTS
import HomeActions from '../Actions/Home.action';
import RecipeActions from '../Actions/Recipe.actions';
import IngredientActions from '../Actions/Ingredient.action';
// Components
import BreadCrumbs from '../Components/BreadCrumbs';
// STYLES AND COLORS
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';
// CONFIG
import Config from '../Utilities/config';

function AdminScreen(props) {
	// DE-STRUCTURING PROPS
	const { currentView, updateCurrentView } = props;

	return (
		<Grid container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'}>
			{/* HEADER */}
			<Grid item container justifyContent='space-between' style={{ ...Styles.padding10, height: '10vh' }}>
				<Grid item container xs={6} justifyContent='flex-start' alignItems='center'>
					{/* Admin Panel Icon */}
					<Grid item>
						<AdminPanelSettingsIcon sx={{ height: 50, width: 50, color: colors.grey }} />
					</Grid>
					<Grid item>
						<Typography variant='h5' color={colors.grey}>
							Admin Console
						</Typography>
					</Grid>
				</Grid>

				<Grid container xs={6} item justifyContent='flex-end' alignItems='center' spacing={1}>
					{/* BreadCrumbs */}
					<Grid item>
						<BreadCrumbs
							color={colors.grey}
							currentView={currentView}
							goToAdmin={() => {
								updateCurrentView('Admin');
							}}
						/>
					</Grid>
				</Grid>
			</Grid>

			{/* BODY */}
			<Grid style={{ height: '85vh' }}>
				{currentView === 'Admin' ? (
					<HomeActions
						// Current View
						updateCurrentView={updateCurrentView}
					/>
				) : currentView === 'Recipes' ? (
					<RecipeActions />
				) : currentView === 'Ingredients' ? (
					<IngredientActions />
				) : null}
			</Grid>
		</Grid>
	);
}

export default AdminScreen;
