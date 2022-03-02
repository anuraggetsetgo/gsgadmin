import React from 'react';
// MUI
import {
	Button,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Typography,
} from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// BODY ACTION COMPONENTS
import HomeActions from '../Actions/Home.action';
import RecipeActions from '../Actions/Recipe.actions';
import IngredientActions from '../Actions/Ingredient.action';
// Components'
import ViewMenu from '../Components/ViewMenu';
// STYLES AND COLORS
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';
// CONFIG
import Config from '../Utilities/config';

function AdminScreen(props) {
	// DE-STRUCTURING PROPS
	const {
		// MENU
		menuDetails,
		handleMenuActions,
		// Current View
		currentView,
		updateCurrentView,
	} = props;

	// Prepairing some menu related data
	const openMenu = menuDetails.open;
	const menuAchor = menuDetails.anchor;
	return (
		<Grid container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'}>
			{/* HEADER */}
			<Grid item container justifyContent='space-between' style={{ ...Styles.padding10, height: '10vh' }}>
				<Grid item container xs={6} justifyContent='flex-start' alignItems='center'>
					{/* <Grid item>
						<Tooltip title='View'>
							<IconButton
								size='large'
								onClick={() => {
									handleMenuActions('open');
								}}>
								<DehazeIcon />
							</IconButton>
						</Tooltip>
					</Grid> */}
					<Grid item>
						<AdminPanelSettingsIcon sx={{ height: 50, width: 50, color: colors.grey }} />
					</Grid>
					<Grid item>
						<Typography variant='h5' color={colors.grey}>
							Admin console
						</Typography>
					</Grid>
				</Grid>
				<Grid container xs={6} item justifyContent='flex-end' alignItems='center'>
					<Grid item>
						<ViewMenu
							open={openMenu}
							anchor={menuAchor}
							buttonTitle={currentView}
							buttonTooltip='Switch View'
							handleMenuActions={handleMenuActions}
						/>
						{/* <AdminPanelSettingsIcon sx={{ height: 50, width: 50, color: colors.grey }} /> */}
					</Grid>
				</Grid>
			</Grid>
			{/* SIDE DRAWER */}
			{/* <Drawer
				anchor={'left'}
				open={openDrawer}
				onClose={() => {
					handleMenuActions('close');
				}}>
				<List sx={{ width: 250 }}>
					{menuList.map((menu, index) => (
						<ListItem
							button
							key={`${menu}-${index}`}
							onClick={() => {
								handleMenuActions('set-menu', menu);
							}}>
							<ListItemIcon>{menuIcons[index]}</ListItemIcon>
							<ListItemText primary={menu[0].toUpperCase() + menu.substring(1)} />
						</ListItem>
					))}
				</List>
			</Drawer> */}

			{/* BODY */}
			<Grid style={{ height: '85vh' }}>
				{currentView === 'Home' ? (
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
