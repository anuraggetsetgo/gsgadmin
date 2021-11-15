import React from 'react';
import Loader from 'react-loader-spinner';
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
} from '@mui/material';
import { TabContext, TabList, TabPanel, Pagination } from '@mui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faMehRollingEyes } from '@fortawesome/free-solid-svg-icons';

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
	} = props;

	// Rendering
	return (
		<Grid container style={{ padding: '10px' }}>
			{/* Header */}
			<Box sx={{ borderBottom: 1, width: '100%', borderColor: 'lightGrey' }}>
				<Grid container justifyContent='space-evenly' style={{ height: '15vh' }}>
					<Grid item container xs={5} justifyContent='flex-start' alignItems='center'>
						<Typography variant='h4' color='Grey'>
							Admin console
						</Typography>
					</Grid>
					<Grid container xs={5} item justifyContent='flex-end' alignItems='center'>
						<Grid contaier direction='column' justifyContent='center' alignItems='center'>
							<Grid item>
								<FontAwesomeIcon icon={faUserShield} color='grey' style={{ 'font-size': '45px' }} />
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
										console.log(e, value);
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
									style={{ margin: '10px 10px 0px 0px' }}>
									{recipeList.map((recipe) => (
										<Grid item xs={4}>
											<Box sx={{ border: 1, borderColor: 'lightGrey', borderRadius: '5px' }}>
												<Card>
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
																			<Button variant='outlined' size='small'>
																				View
																			</Button>
																		</Grid>
																		<Grid item container xs={4} justifyContent='center' alignItems='center'>
																			<Button variant='contained' color='primary' size='small'>
																				Approve
																			</Button>
																		</Grid>
																		<Grid item container xs={4} justifyContent='flex-end' alignItems='center'>
																			<Button variant='contained' color='error' size='small'>
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
