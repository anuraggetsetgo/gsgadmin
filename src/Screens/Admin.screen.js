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
	} = props;
	// Exctracting some data out from Configurations
	const menuList = Config.menuList;
	const menuIcons = Config.menuIcons;
	// Prepairing some menu related data
	const openDrawer = menuDetails.open;
	const currentMenu = menuDetails.menu;
	console.log(props);
	return (
		<Grid container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'}>
			{/* HEADER */}
			<Grid item container justifyContent='space-between' style={{ ...Styles.padding10, height: '10vh' }}>
				<Grid item container xs={10} justifyContent='flex-start' alignItems='center'>
					<Grid item>
						<Tooltip title='View'>
							<IconButton
								size='large'
								onClick={() => {
									handleMenuActions('open');
								}}>
								<DehazeIcon />
							</IconButton>
						</Tooltip>
					</Grid>
					<Grid item>
						<Typography variant='h5' color={colors.grey}>
							Admin console
						</Typography>
					</Grid>
				</Grid>
				<Grid container xs={1.1} item justifyContent='flex-end' alignItems='center'>
					<Grid container justifyContent='space-evenly' alignItems='center'>
						<Grid item>
							<AdminPanelSettingsIcon sx={{ height: 50, width: 50, color: colors.grey }} />
						</Grid>
						<Grid item>
							{/* {true ? ( */}
							<Button
								variant='outlined'
								size='small'
								color='error'
								onClick={() => {
									// handleLoginActions('logout');
								}}>
								Logout
							</Button>
							{/* ) : (
								<Button
									variant='outlined'
									size='small'
									onClick={() => {
										// handleLoginActions('login');
									}}>
									Login
								</Button>
							)} */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* SIDE DRAWER */}
			<Drawer
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
			</Drawer>

			{/* BODY */}
			{currentMenu === 'home' ? (
				<HomeActions />
			) : currentMenu === 'recipe' ? (
				<RecipeActions />
			) : currentMenu === 'ingredient' ? (
				<IngredientActions />
			) : null}
		</Grid>
	);
}

export default AdminScreen;
