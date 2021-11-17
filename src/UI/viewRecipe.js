import React from 'react';
import Loader from 'react-loader-spinner';
import ClearIcon from '@mui/icons-material/Clear';
import ReactPlayer from 'react-player';

import {
	Grid,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	DialogContentText,
	Typography,
	Tooltip,
	IconButton,
	Divider,
	TableContainer,
	TableRow,
	TableHead,
	TableCell,
	Table,
	TableBody,
} from '@mui/material';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ViewRecipe(props) {
	const {
		open,
		onClose,
		isLoading,
		name,
		video,
		calories,
		cookingtime,
		cuisine,
		type,
		servings,
		protein,
		fat,
		carbs,
		ingredients,
		steps,
	} = props;
	return (
		<Dialog
			fullWidth={true}
			maxWidth={'md'}
			open={open}
			onClose={onClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'>
			{isLoading ? (
				<Grid container alignItems='center' justifyContent='center' style={{ height: '50vh' }}>
					<Grid item>
						<Loader type='Circles' color='lightGrey' height={50} width={50} />
					</Grid>
				</Grid>
			) : (
				<Grid>
					<DialogTitle>
						<Grid container justifyContent='space-between'>
							<Grid item container xs={6} justifyContent='flex-start' alignItems='center'>
								<Typography variant='h5'>
									<b>{name}</b>
								</Typography>
							</Grid>
							<Grid item container xs={6} justifyContent='flex-end' alignItems='center'>
								<Tooltip title='Close'>
									<IconButton size='large' onClick={onClose}>
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
										{video !== '' ? (
											<ReactPlayer
												controls
												width='100
                                                                %'
												height='100%'
												url={video}
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
													<Typography variant='subtitle2'>{calories + ' cal'}</Typography>
												</Grid>
											</Grid>
											<Grid item xs={4} container direction='row' justifyContent='center' alignItems='center'>
												<Grid item style={{ marginRight: '5px' }}>
													<FontAwesomeIcon icon={faClock} color='grey' style={{ 'font-size': '25px' }} />
												</Grid>
												<Grid item>
													<Typography variant='subtitle2'>{cookingtime + ' min'}</Typography>
												</Grid>
											</Grid>
										</Grid>

										<Grid container className='marginTop'>
											<Grid item container justifyContent='flex-end'>
												<Grid xs={4} container direction='column'>
													<Grid item container justifyContent='center' alignItems='center'>
														<Grid item style={{ marginRight: '2px' }}>
															<FontAwesomeIcon icon={faBookOpen} color='#1976d2' style={{ 'font-size': '15px' }} />
														</Grid>
														<Grid item>
															<Typography variant='subtitle2'>{cuisine}</Typography>
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
															<FontAwesomeIcon icon={faUtensils} color='#1976d2' style={{ 'font-size': '15px' }} />
														</Grid>
														<Grid item>
															<Typography variant='subtitle2'>{type}</Typography>
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
															<FontAwesomeIcon icon={faConciergeBell} color='#1976d2' style={{ 'font-size': '20px' }} />
														</Grid>
														<Grid item>
															<Typography variant='subtitle2'>{servings}</Typography>
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
															<Typography variant='subtitle2'>{protein + '(g)'}</Typography>
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
															<FontAwesomeIcon icon={faCheese} color='#1976d2' style={{ 'font-size': '18px' }} />
														</Grid>
														<Grid item>
															<Typography variant='subtitle2'>{fat + '(g)'}</Typography>
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
															<FontAwesomeIcon icon={faHamburger} color='#1976d2' style={{ 'font-size': '18px' }} />
														</Grid>
														<Grid item>
															<Typography variant='subtitle2'>{carbs + '(g)'}</Typography>
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
															<FontAwesomeIcon icon={faCheese} color='#1976d2' style={{ 'font-size': '20px' }} />
															<Typography variant='caption'>{'Fat(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faHamburger} color='#1976d2' style={{ 'font-size': '20px' }} />
															<Typography variant='caption'>{'Carbs(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faWineGlass} color='#1976d2' style={{ 'font-size': '20px' }} />
															<Typography variant='caption'>{'Alcohol(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faAppleAlt} color='#1976d2' style={{ 'font-size': '20px' }} />
															<Typography variant='caption'>{'Fibre(g)'}</Typography>
														</Grid>
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{ingredients.map((ingredient) => (
													<TableRow key={ingredient.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
														<TableCell align='left'>{ingredient.ri_ingredient_name}</TableCell>
														<TableCell align='center'>{ingredient.ri_quantity + ' ' + ingredient.ri_unit}</TableCell>

														<TableCell align='center'>{ingredient.ri_protein}</TableCell>
														<TableCell align='center'>{ingredient.ri_fat}</TableCell>
														<TableCell align='center'>{ingredient.ri_carbohydrate}</TableCell>
														<TableCell align='center'>{ingredient.ri_alcohol}</TableCell>
														<TableCell align='center'>{ingredient.ri_fibre}</TableCell>
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
								{JSON.parse(steps).map((step, index) => (
									<Typography variant='caption' align='left'>
										<b>{`Step ${index + 1}:`}</b>
										{` ${step.step}`}
									</Typography>
								))}
							</Grid>
						</Grid>
					</DialogContent>
				</Grid>
			)}
		</Dialog>
	);
}
