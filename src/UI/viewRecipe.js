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
import { colors } from '../services';

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
												<Typography variant='subtitle2' color='error'>
													No video available
												</Typography>
											</Grid>
										)}
									</Grid>
									<Grid item container direction='column' xs={6} alignItems='center' justifyContent='center'>
										<Grid item container justifyContent='flex-end' alignItems='center'>
											<Grid item xs={4} container direction='row' justifyContent='center' alignItems='center'>
												<Grid item style={{ marginRight: '5px' }}>
													<FontAwesomeIcon icon={faFire} color={colors.yellow} style={{ 'font-size': '25px' }} />
												</Grid>
												<Grid item>
													<Typography variant='subtitle1'>{calories + ' cal'}</Typography>
												</Grid>
											</Grid>
											<Grid item xs={4} container direction='row' justifyContent='center' alignItems='center'>
												<Grid item style={{ marginRight: '5px' }}>
													<FontAwesomeIcon icon={faClock} color={colors.grey} style={{ 'font-size': '25px' }} />
												</Grid>
												<Grid item>
													<Typography variant='subtitle1'>{cookingtime + ' min'}</Typography>
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
																color={colors.primary}
																style={{ 'font-size': '15px' }}
															/>
														</Grid>
														<Grid item>
															<Typography variant='subtitle1'>{cuisine}</Typography>
														</Grid>
													</Grid>
													<Grid container justifyContent='center' alignItems='center'>
														<Grid item>
															<Typography variant='subtitle2' color='secondary'>
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
																color={colors.primary}
																style={{ 'font-size': '15px' }}
															/>
														</Grid>
														<Grid item>
															<Typography variant='subtitle1'>{type}</Typography>
														</Grid>
													</Grid>
													<Grid container justifyContent='center' alignItems='center'>
														<Grid item>
															<Typography variant='subtitle2' color='secondary'>
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
																color={colors.primary}
																style={{ 'font-size': '20px' }}
															/>
														</Grid>
														<Grid item>
															<Typography variant='subtitle1'>{servings}</Typography>
														</Grid>
													</Grid>
													<Grid container justifyContent='center' alignItems='center'>
														<Grid item>
															<Typography variant='subtitle2' color='secondary'>
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
															<FontAwesomeIcon icon={faEgg} color={colors.primary} style={{ 'font-size': '18px' }} />
														</Grid>
														<Grid item>
															<Typography variant='subtitle1'>{protein + '(g)'}</Typography>
														</Grid>
													</Grid>
													<Grid container justifyContent='center' alignItems='center'>
														<Grid item>
															<Typography variant='subtitle2' color='secondary'>
																Protein
															</Typography>
														</Grid>
													</Grid>
												</Grid>
												<Grid xs={4} container direction='column'>
													<Grid item container justifyContent='center' alignItems='center'>
														<Grid item style={{ marginRight: '2px' }}>
															<FontAwesomeIcon icon={faCheese} color={colors.primary} style={{ 'font-size': '18px' }} />
														</Grid>
														<Grid item>
															<Typography variant='subtitle1'>{fat + '(g)'}</Typography>
														</Grid>
													</Grid>
													<Grid container justifyContent='center' alignItems='center'>
														<Grid item>
															<Typography variant='subtitle2' color='secondary'>
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
																color={colors.primary}
																color={colors.primary}
																style={{ 'font-size': '18px' }}
															/>
														</Grid>
														<Grid item>
															<Typography variant='subtitle1'>{carbs + '(g)'}</Typography>
														</Grid>
													</Grid>
													<Grid container justifyContent='center' alignItems='center'>
														<Grid item>
															<Typography variant='subtitle2' color='#E91E63'>
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
								<Typography variant='h6' color='secondary'>
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
																color={colors.primary}
																style={{ 'font-size': '20px' }}
															/>
															<Typography variant='subtitle1'>{'Quantity'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faEgg} color={colors.primary} style={{ 'font-size': '20px' }} />
															<Typography variant='subtitle1'>{'Protein(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faCheese} color={colors.primary} style={{ 'font-size': '20px' }} />
															<Typography variant='subtitle1'>{'Fat(g)'}</Typography>
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
																color={colors.primary}
																style={{ 'font-size': '20px' }}
															/>
															<Typography variant='subtitle1'>{'Carbs(g)'}</Typography>
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
																color={colors.primary}
																style={{ 'font-size': '20px' }}
															/>
															<Typography variant='subtitle1'>{'Alcohol(g)'}</Typography>
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
																color={colors.primary}
																style={{ 'font-size': '20px' }}
															/>
															<Typography variant='subtitle1'>{'Fibre(g)'}</Typography>
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
								<Typography variant='h6' color='secondary'>
									Recipe cooking steps
								</Typography>
								{JSON.parse(steps).map((step, index) => (
									<Typography variant='subtitle1' align='left'>
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
