import React from 'react';
import LoginActions from '../Actions/loginActions';
import RecipeActions from '../Actions/recipeActions';
import IngredientActions from '../Actions/ingredientActions';
import {
	Grid,
	Typography,
	Box,
	Menu,
	MenuItem,
	Button,
	Tooltip,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import DehazeIcon from '@mui/icons-material/Dehaze';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import DiningIcon from '@mui/icons-material/Dining';
import { colors } from '../services';
import {Styles} from '../app-styles';
function AdminView(props) {
	// Props Destructring
	const {
		loggedInStatus,
		handleLoggedInStatus,
		loggingIn,
		setLoggingIn,
		handleLoginActions,
		menuDetails,
		handleMenuActions,
		viewList,
	} = props;

	console.log(props, 'ADMIN VIEW');

	return (
		<Box>
			{/* Header */}
			<Box sx={{ ...Styles.borderBottom1, ...Styles.borderLightGrey, height: '10vh' }}>
				<Grid container justifyContent='space-between' style={Styles.padding10 }>
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
							<Typography variant='h6' color='Grey'>
								Admin console
							</Typography>
						</Grid>
					</Grid>
					<Grid container xs={1.1} item justifyContent='flex-end' alignItems='center'>
						<Grid container justifyContent='space-evenly' alignItems='center'>
							<Grid item>
								<FontAwesomeIcon icon={faUserShield} color={colors.darkGrey} style={{ 'font-size': '30px' }} />
							</Grid>
							<Grid item>
								{loggedInStatus ? (
									<Button
										variant='outlined'
										size='small'
										color='error'
										onClick={() => {
											handleLoginActions('logout');
										}}>
										Logout
									</Button>
								) : (
									<Button
										variant='outlined'
										size='small'
										onClick={() => {
											handleLoginActions('login');
										}}>
										Login
									</Button>
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Drawer
					anchor={'left'}
					open={menuDetails.open}
					onClose={() => {
						handleMenuActions('close');
					}}>
					<List sx={{ width: 200 }}>
						{viewList.map((view) => (
							<ListItem
								button
								key={view}
								onClick={() => {
									handleMenuActions('set-view', view);
								}}>
								<ListItemIcon>
									{view === 'recipe' ? <DiningIcon /> : view === 'ingredient' ? <FoodBankIcon /> : null}
								</ListItemIcon>
								<ListItemText primary={view[0].toUpperCase() + view.substring(1)} />
							</ListItem>
						))}
					</List>
				</Drawer>
							</Box>

			{/* Body */}
			{loggedInStatus ? (
				menuDetails.view === 'recipe' ? (
					<RecipeActions />
				) : menuDetails.view === 'ingredient' ? (
					<IngredientActions />
				) : null
			) : (
				<LoginActions
					loggedInStatus={loggedInStatus}
					handleLoggedInStatus={handleLoggedInStatus}
					loggingIn={loggingIn}
					setLoggingIn={setLoggingIn}
				/>
			)}
		</Box>
	);
}

export default AdminView;
