import React from 'react';
import Loader from 'react-loader-spinner';
import Config from '../Utilities/Config';

import {
	Grid,
	Typography,
	Box,
	Tab,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Button,
	Divider,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TableContainer,
	TableRow,
	TableHead,
	TableCell,
	Table,
	TableBody,
	IconButton,
	Tooltip,
	TextField,
	Snackbar,
} from '@mui/material';
import { TabContext, TabList, TabPanel, Pagination } from '@mui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserShield,
	faMehRollingEyes,
	faFire,
	faEgg,
	faBookOpen,
	faUtensils,
	faUtensilSpoon,
	faConciergeBell,
	faBreadSlice,
	faCheese,
	faWineGlass,
	faHamburger,
	faAppleAlt,
	faClock,
	faShoppingBasket,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import ClearIcon from '@mui/icons-material/Clear';
import ReactPlayer from 'react-player';

function HomeView(props) {
	// Props
	console.log(props);
	const {
		loggedInStatus,
		isLoggingIn,
		handleLoginActions,
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
	} = props;

	const action = (
		<React.Fragment>
			<IconButton
				size='small'
				color='error'
				onClick={() => {
					handleToastOperation('close');
				}}>
				<ClearIcon />
			</IconButton>
		</React.Fragment>
	);

	// Rendering
	return (
		<Grid container style={{ padding: '10px' }}>
			{/* Header */}
			<Box sx={{ borderBottom: 1, width: '100%', borderColor: 'lightGrey' }}>
				<Grid container justifyContent='space-evenly' style={{ padding: '8px' }}>
					<Grid item container xs={5} justifyContent='flex-start' alignItems='center'>
						<Typography variant='h4' color='Grey'>
							Admin console
						</Typography>
					</Grid>
					<Grid container xs={5} item justifyContent='flex-end' alignItems='center'>
						<Grid contaier direction='column' justifyContent='center' alignItems='center'>
							<Grid item>
								<FontAwesomeIcon icon={faUserShield} color='grey' style={{ 'font-size': '30px' }} />
							</Grid>
							<Grid item style={{ marginTop: '5px' }}>
								{loggedInStatus ? (
									<Button
										variant='outlined'
										size='small'
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
			</Box>

			{/* Divider */}
			<Grid container>
				<Divider variant='middle' />
			</Grid>

			{/* Body */}

			<Grid container>
				{loggedInStatus ? (
					<Grid container>
						<Grid container>
							<Grid item xs={9} container justifyContent='flex-start' alignItems='center'>
								<TabContext value={tabDetails.currentTab}>
									{/* <Box sx={{ borderBottom: 1, borderColor: 'blue' }}> */}
									<TabList onChange={handleTabChange} aria-label='lab API tabs example'>
										{tabDetails.tabs.map((tabValue, index) => (
											<Tab label={tabDetails.tabLabel[index]} value={tabValue} />
										))}
									</TabList>
									{/* </Box> */}
								</TabContext>
							</Grid>
							<Grid item xs={3} container justifyContent='flex-end' alignItems='center'>
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

						<Grid container>
							{isSearching ? (
								<Grid container alignItems='center' justifyContent='center' style={{ height: '50vh' }}>
									<Grid item>
										<Loader type='Circles' color='lightGrey' height={50} width={50} />
									</Grid>
								</Grid>
							) : recipeList.length > 0 ? (
								<Grid
									item
									container
									alignItems='center'
									justifyContent='space-evenly'
									spacing={2}
									style={{ margin: '0px 10px 0px 0px' }}>
									{recipeList.map((recipe) => (
										<Grid item xs={4}>
											<Box sx={{ border: 1, borderColor: 'lightGrey', borderRadius: '5px' }}>
												<Card
												// onClick={() => {
												// 	handleRecipeActions('view', recipe['recipe_code']);
												// }}
												>
													<CardActionArea>
														<Grid container justifyContent='space-between'>
															<Grid item xs={4.5}>
																{recipe.recipe_image !== '' ? (
																	<CardMedia
																		component='img'
																		height='150'
																		image={recipe.recipe_image}
																		alt='green iguana'
																	/>
																) : (
																	<CardMedia
																		component='img'
																		height='150'
																		image={'http://generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'}
																		alt='green iguana'
																	/>
																)}
															</Grid>
															<Grid
																item
																xs={7}
																container
																direction='column'
																justifyContent='center'
																alignItems='center'
																style={{ padding: '5px' }}>
																<Grid container>
																	<Grid container justifyContent='flex-start' alignItems='center'>
																		<Typography variant='subtitle1'>
																			<b>{recipe.recipe_name}</b>
																		</Typography>
																	</Grid>
																	<Grid container justifyContent='flex-start' alignItems='center'>
																		<Typography variant='subtitle2' color='Grey'>
																			{'Shivam Prajapati'}
																		</Typography>
																	</Grid>
																	<Grid xs={12} container style={{ marginTop: '10px' }}>
																		<Grid item container xs={4} justifyContent='flex-start' alignItems='center'>
																			<Button
																				variant='outlined'
																				size='small'
																				onClick={() => {
																					handleRecipeActions('view', recipe['recipe_code']);
																				}}>
																				View
																			</Button>
																		</Grid>
																		<Grid item container xs={4} justifyContent='center' alignItems='center'>
																			<Button
																				variant='contained'
																				color='primary'
																				size='small'
																				onClick={() => {
																					handleRecipeActions('open-approve-dialog', recipe.recipe_code);
																				}}>
																				Approve
																			</Button>
																		</Grid>
																		<Grid item container xs={4} justifyContent='flex-end' alignItems='center'>
																			<Button
																				variant='contained'
																				color='error'
																				size='small'
																				onClick={() => {
																					handleRecipeActions('open-reject-dialog', recipe.recipe_code);
																				}}>
																				Reject
																			</Button>
																		</Grid>
																		{/* <Typography variant='subtitle2' color='Grey'>
                                                    {'Shivam Prajapati'}
                                                </Typography> */}
																	</Grid>{' '}
																</Grid>
															</Grid>
														</Grid>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
									))}
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
						{/* View Recipe */}
						{viewRecipeDetails.mappedIngredients.length !== 0 ? (
							<Dialog
								fullWidth={true}
								maxWidth={'md'}
								open={viewRecipe}
								onClose={() => {
									handleRecipeActions('close-view');
								}}
								aria-labelledby='alert-dialog-title'
								aria-describedby='alert-dialog-description'>
								{viewLoading ? (
									<Grid container alignItems='center' justifyContent='center' style={{ height: '50vh' }}>
										<Grid item>
											<Loader type='Circles' color='lightGrey' height={50} width={50} />
										</Grid>
									</Grid>
								) : (
									<div>
										<DialogTitle>
											<Grid container justifyContent='space-between'>
												<Grid item container xs={6} justifyContent='flex-start' alignItems='center'>
													<Typography variant='h5'>
														<b>{viewRecipeDetails.recipe.recipe_name}</b>
													</Typography>
												</Grid>
												<Grid
													item
													container
													xs={6}
													justifyContent='flex-end'
													alignItems='center'
													onClick={() => {
														handleRecipeActions('close-view');
													}}>
													<Tooltip title='Close'>
														<IconButton size='large'>
															<ClearIcon />
														</IconButton>
													</Tooltip>
												</Grid>
											</Grid>
										</DialogTitle>

										<DialogContent dividers>
											<Grid container direction='column'>
												<Grid item container direction='column'>
													<Grid container>
														<Grid item xs={6} style={{ height: '25vh' }}>
															{viewRecipeDetails.recipe.recipe_video !== '' ? (
																<ReactPlayer
																	controls
																	width='100
																				%'
																	height='100%'
																	url={viewRecipeDetails.recipe.recipe_video}
																/>
															) : (
																<Grid container justifyContent='center' alignItems='center' style={{ height: '100%' }}>
																	<Typography variant='caption' color='#E91E63'>
																		No video available
																	</Typography>
																</Grid>
															)}
														</Grid>
														<Grid item container direction='column' xs={6} alignItems='center' justifyContent='center'>
															<Grid item container justifyContent='flex-end' alignItems='center'>
																<Grid item xs={4} container direction='row' justifyContent='center' alignItems='center'>
																	<Grid item style={{ marginRight: '5px' }}>
																		<FontAwesomeIcon icon={faFire} color='orange' style={{ 'font-size': '25px' }} />
																	</Grid>
																	<Grid item>
																		<Typography variant='subtitle2'>
																			{viewRecipeDetails.recipe.recipe_calories + ' cal'}
																		</Typography>
																	</Grid>
																</Grid>
																<Grid item xs={4} container direction='row' justifyContent='center' alignItems='center'>
																	<Grid item style={{ marginRight: '5px' }}>
																		<FontAwesomeIcon icon={faClock} color='grey' style={{ 'font-size': '25px' }} />
																	</Grid>
																	<Grid item>
																		<Typography variant='subtitle2'>
																			{viewRecipeDetails.recipe.recipe_cookingtime + ' min'}
																		</Typography>
																	</Grid>
																</Grid>
															</Grid>

															<Grid container className='marginTop'>
																<Grid item container justifyContent='flex-end'>
																	<Grid xs={4} container direction='column'>
																		<Grid item container justifyContent='center' alignItems='center'>
																			<Grid item style={{ marginRight: '2px' }}>
																				<FontAwesomeIcon
																					icon={faBookOpen}
																					color='#1976d2'
																					style={{ 'font-size': '15px' }}
																				/>
																			</Grid>
																			<Grid item>
																				<Typography variant='subtitle2'>
																					{viewRecipeDetails.recipe.recipe_cuisine}
																				</Typography>
																			</Grid>
																		</Grid>
																		<Grid container justifyContent='center' alignItems='center'>
																			<Grid item>
																				<Typography variant='caption' color='#E91E63'>
																					Cuisine
																				</Typography>
																			</Grid>
																		</Grid>
																	</Grid>
																	<Grid xs={4} container direction='column'>
																		<Grid item container justifyContent='center' alignItems='center'>
																			<Grid item style={{ marginRight: '2px' }}>
																				<FontAwesomeIcon
																					icon={faUtensils}
																					color='#1976d2'
																					style={{ 'font-size': '15px' }}
																				/>
																			</Grid>
																			<Grid item>
																				<Typography variant='subtitle2'>
																					{Config.type[viewRecipeDetails.recipe.recipe_type]}
																				</Typography>
																			</Grid>
																		</Grid>
																		<Grid container justifyContent='center' alignItems='center'>
																			<Grid item>
																				<Typography variant='caption' color='#E91E63'>
																					Type
																				</Typography>
																			</Grid>
																		</Grid>
																	</Grid>
																	<Grid xs={4} container direction='column'>
																		<Grid item container justifyContent='center' alignItems='center'>
																			<Grid item style={{ marginRight: '2px' }}>
																				<FontAwesomeIcon
																					icon={faConciergeBell}
																					color='#1976d2'
																					style={{ 'font-size': '20px' }}
																				/>
																			</Grid>
																			<Grid item>
																				<Typography variant='subtitle2'>
																					{viewRecipeDetails.recipe.recipe_serving}
																				</Typography>
																			</Grid>
																		</Grid>
																		<Grid container justifyContent='center' alignItems='center'>
																			<Grid item>
																				<Typography variant='caption' color='#E91E63'>
																					Servings
																				</Typography>
																			</Grid>
																		</Grid>
																	</Grid>
																</Grid>
															</Grid>
															<Divider />

															<Grid container className='marginTop'>
																<Grid item xs={12} container justifyContent='flex-end'>
																	<Grid xs={4} container direction='column'>
																		<Grid item container justifyContent='center' alignItems='center'>
																			<Grid item style={{ marginRight: '2px' }}>
																				<FontAwesomeIcon icon={faEgg} color='#1976d2' style={{ 'font-size': '18px' }} />
																			</Grid>
																			<Grid item>
																				<Typography variant='subtitle2'>
																					{viewRecipeDetails.recipe.recipe_protein + '(g)'}
																				</Typography>
																			</Grid>
																		</Grid>
																		<Grid container justifyContent='center' alignItems='center'>
																			<Grid item>
																				<Typography variant='caption' color='#E91E63'>
																					Protein
																				</Typography>
																			</Grid>
																		</Grid>
																	</Grid>
																	<Grid xs={4} container direction='column'>
																		<Grid item container justifyContent='center' alignItems='center'>
																			<Grid item style={{ marginRight: '2px' }}>
																				<FontAwesomeIcon
																					icon={faCheese}
																					color='#1976d2'
																					style={{ 'font-size': '18px' }}
																				/>
																			</Grid>
																			<Grid item>
																				<Typography variant='subtitle2'>
																					{viewRecipeDetails.recipe.recipe_fat + '(g)'}
																				</Typography>
																			</Grid>
																		</Grid>
																		<Grid container justifyContent='center' alignItems='center'>
																			<Grid item>
																				<Typography variant='caption' color='#E91E63'>
																					Fat
																				</Typography>
																			</Grid>
																		</Grid>
																	</Grid>
																	<Grid xs={4} container direction='column'>
																		<Grid item container justifyContent='center' alignItems='center'>
																			<Grid item style={{ marginRight: '2px' }}>
																				<FontAwesomeIcon
																					icon={faHamburger}
																					color='#1976d2'
																					style={{ 'font-size': '18px' }}
																				/>
																			</Grid>
																			<Grid item>
																				<Typography variant='subtitle2'>
																					{viewRecipeDetails.recipe.recipe_carb + '(g)'}
																				</Typography>
																			</Grid>
																		</Grid>
																		<Grid container justifyContent='center' alignItems='center'>
																			<Grid item>
																				<Typography variant='caption' color='#E91E63'>
																					Carbs
																				</Typography>
																			</Grid>
																		</Grid>
																	</Grid>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
												{/* <Grid item container className='marginTop'> */}
												<Divider className='marginTop ' />
												{/* <//</DialogContent>Grid> */}
												<Grid item container direction='column' className='marginTop'>
													<Typography variant='subtitle1' color='#E91E63'>
														Added ingredients
													</Typography>
													<Grid item container justifyContent='space-between'>
														<TableContainer>
															<Table sx={{ minWidth: 650 }} aria-label='simple table'>
																<TableHead>
																	<TableRow>
																		<TableCell align='left'>
																			<Typography>Ingredients</Typography>
																		</TableCell>
																		{/* <TableCell align='right'>Calories</TableCell> */}
																		<TableCell align='center'>
																			<Grid
																				container
																				direction='column'
																				// justifyContent='center'
																				alignItems='center'>
																				<FontAwesomeIcon icon={faEgg} color='#1976d2' style={{ 'font-size': '20px' }} />
																				<Typography variant='caption'>{'Protein(g)'}</Typography>
																			</Grid>
																		</TableCell>
																		<TableCell align='center'>
																			<Grid
																				container
																				direction='column'
																				// justifyContent='center'
																				alignItems='center'>
																				<FontAwesomeIcon
																					icon={faCheese}
																					color='#1976d2'
																					style={{ 'font-size': '20px' }}
																				/>
																				<Typography variant='caption'>{'Fat(g)'}</Typography>
																			</Grid>
																		</TableCell>
																		<TableCell align='center'>
																			<Grid
																				container
																				direction='column'
																				// justifyContent='center'
																				alignItems='center'>
																				<FontAwesomeIcon
																					icon={faHamburger}
																					color='#1976d2'
																					style={{ 'font-size': '20px' }}
																				/>
																				<Typography variant='caption'>{'Carbs(g)'}</Typography>
																			</Grid>
																		</TableCell>
																		<TableCell align='center'>
																			<Grid
																				container
																				direction='column'
																				// justifyContent='center'
																				alignItems='center'>
																				<FontAwesomeIcon
																					icon={faWineGlass}
																					color='#1976d2'
																					style={{ 'font-size': '20px' }}
																				/>
																				<Typography variant='caption'>{'Alcohol(g)'}</Typography>
																			</Grid>
																		</TableCell>
																		<TableCell align='center'>
																			<Grid
																				container
																				direction='column'
																				// justifyContent='center'
																				alignItems='center'>
																				<FontAwesomeIcon
																					icon={faAppleAlt}
																					color='#1976d2'
																					style={{ 'font-size': '20px' }}
																				/>
																				<Typography variant='caption'>{'Fibre(g)'}</Typography>
																			</Grid>
																		</TableCell>
																		<TableCell align='center'>
																			<Grid
																				container
																				direction='column'
																				// justifyContent='center'
																				alignItems='center'>
																				<FontAwesomeIcon
																					icon={faShoppingBasket}
																					color='#1976d2'
																					style={{ 'font-size': '20px' }}
																				/>
																				<Typography variant='caption'>{'Quantity'}</Typography>
																			</Grid>
																		</TableCell>
																	</TableRow>
																</TableHead>
																<TableBody>
																	{viewRecipeDetails.mappedIngredients.map((ingredient) => (
																		<TableRow
																			key={ingredient.name}
																			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
																			<TableCell align='left'>{ingredient.ri_ingredient_name}</TableCell>
																			{/* <TableCell align='right'>{ingredient.cal}</TableCell> */}
																			<TableCell align='center'>{ingredient.ri_protein}</TableCell>
																			<TableCell align='center'>{ingredient.ri_fat}</TableCell>
																			<TableCell align='center'>{ingredient.ri_carbohydrate}</TableCell>
																			<TableCell align='center'>{ingredient.ri_alcohol}</TableCell>
																			<TableCell align='center'>{ingredient.ri_fibre}</TableCell>
																			<TableCell align='center'>
																				{ingredient.ri_quantity + ' ' + ingredient.ri_unit}
																			</TableCell>
																		</TableRow>
																	))}
																</TableBody>
															</Table>
														</TableContainer>
													</Grid>
												</Grid>
												{/* <Divider className='marginTop ' /> */}
												<Grid item container direction='column' className='marginTop'>
													<Typography variant='subtitle1' color='#E91E63'>
														Recipe cooking steps
													</Typography>
													{JSON.parse(viewRecipeDetails.recipe.recipe_steps).map((step, index) => (
														<Typography variant='caption' align='left'>
															<b>{`Step ${index + 1}:`}</b>
															{` ${step.step}`}
														</Typography>
													))}
													{/* <Typography variant='subtitle2' className='marginTop' align='right'>
																	<b>{'Cooking time: ' + viewRecipeDetails.recipe.recipe_cookingtime + ' mins'}</b>
																</Typography> */}
												</Grid>
											</Grid>
										</DialogContent>
										{/* <DialogActions>
												<Button
													variant='contained'
													color='secondary'
													onClick={() => {
														setViewRecipe(false);
													}}>
													Close
												</Button>
											</DialogActions> */}
									</div>
								)}
							</Dialog>
						) : null}

						{/* Approve Recipe */}
						<Dialog
							open={approveDialogDetails.open}
							// onClose={handleRecipeActions('close-approve-dialog')}
							aria-labelledby='alert-dialog-title'
							aria-describedby='alert-dialog-description'>
							<DialogTitle id='alert-dialog-title'>{'Approve Recipe'}</DialogTitle>
							<DialogContent>
								<DialogContentText id='alert-dialog-description'>
									Are you sure want to approve this recipe?
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button
									onClick={() => {
										// console.log('No');
										handleRecipeActions('close-approve-dialog');
									}}>
									No
								</Button>
								<Button
									onClick={() => {
										// console.log('Yes');
										handleRecipeActions('approve');
									}}
									autoFocus>
									Yes
								</Button>
							</DialogActions>
						</Dialog>

						{/* Reject Recipe */}
						<Dialog
							open={rejectDialogDetails.show}
							// onClose={() => {
							// 	handleRecipeActions('close-reject-dialog');
							// }}
							aria-labelledby='alert-dialog-title'
							aria-describedby='alert-dialog-description'>
							<DialogTitle id='alert-dialog-title'>{'Reject Recipe'}</DialogTitle>
							<DialogContent>
								<DialogContentText id='alert-dialog-description'>
									Are you sure want to reject this recipe?
								</DialogContentText>
								<TextField
									autoFocus
									margin='dense'
									id='name'
									label='Add comments'
									type='text'
									fullWidth
									variant='standard'
									onChange={(event) => {
										handleRecipeActions('add-comment', event.target.value);
									}}
								/>
							</DialogContent>
							<DialogActions>
								<Button
									onClick={() => {
										// console.log('No');
										handleRecipeActions('close-reject-dialog');
									}}>
									No
								</Button>
								<Button
									onClick={() => {
										// console.log('Rejecting...');
										handleRecipeActions('reject');
									}}
									autoFocus>
									Yes
								</Button>
							</DialogActions>
						</Dialog>

						{/* Toast */}
						<Snackbar
							open={toastDetails.open}
							autoHideDuration={2000}
							onClose={() => {
								handleToastOperation('close');
							}}
							message={toastDetails.message}
							action={action}
						/>
					</Grid>
				) : (
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
						style={{ height: '50vh', marginTop: '20px' }}>
						<Grid container direction='column' justifyContent='center' alignItems='center' style={{ height: '20vh' }}>
							<Typography variant='h5' color='error'>
								Oops, you are logged out!
							</Typography>
							<FontAwesomeIcon icon={faMehRollingEyes} color='grey' style={{ 'font-size': '50px' }} />
						</Grid>

						{isLoggingIn ? (
							<Grid container justifyContent='center' alignItems='center' style={{ height: '10vh' }}>
								<Grid item container xs={6} justifyContent='flex-end' alignItems='center'>
									<Typography variant='h6' color='primary'>
										Logging In
									</Typography>
								</Grid>
								<Grid container xs={6} item justifyContent='flex-start' alignItems='center'>
									<Grid contaier justifyContent='center' alignItems='center'>
										<Loader type='ThreeDots' color='#1976d2' height='10' />
									</Grid>
								</Grid>
							</Grid>
						) : null}
					</Grid>
				)}
			</Grid>
		</Grid>
	);

	// <Grid container direction='column' justifyContent='flex-start' alignItems='center'>
	// 	<Grid container direction='column' justifyContent='flex-start' alignItems='center' style={{ height: '20vh' }}>
	// 		<Typography variant='h4'>Oops, you are logged out!</Typography>
	// 		<FontAwesomeIcon icon={faMehRollingEyes} color='grey' style={{ 'font-size': '50px' }} />
	// 	</Grid>
	// 	<Grid container style={{ height: '20vh' }}>
	// 		<Grid item container xs={6} justifyContent='flex-end' alignItems='center'>
	// 			<Typography variant='h6' color='primary'>
	// 				Logging In
	// 			</Typography>
	// 		</Grid>
	// 		<Grid container xs={6} item justifyContent='flex-start' alignItems='center'>
	// 			<Grid contaier justifyContent='center' alignItems='center'>
	// 				<Loader type='ThreeDots' color='#1976d2' height='10' />
	// 			</Grid>
	// 		</Grid>
	// 	</Grid>
	// </Grid>
}

export default HomeView;
