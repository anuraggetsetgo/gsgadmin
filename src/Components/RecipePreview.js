import React from 'react';
// React Player
import ReactPlayer from 'react-player';
// MUI
import {
	Grid,
	Dialog,
	DialogTitle,
	DialogContent,
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
import ClearIcon from '@mui/icons-material/Clear';

// Font Awesome
import {
	faFire,
	faEgg,
	faBookOpen,
	faUtensils,
	faConciergeBell,
	faCheese,
	faWineGlass,
	faHamburger,
	faAppleAlt,
	faClock,
	faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Colors and Styles
import { colors } from '../Utilities/services';
import { Styles } from '../app-styles';
// Components
import Macros from '../Components/Macros';
import SpinnerLoder from '../Components/SpinnerLoader';
import SpinnerLoader from '../Components/SpinnerLoader';
export default function RecipePreview(props) {
	const { open, onClose, isLoading, recipe, mappedIngredients } = props;
	// Extracting some data
	const name = recipe.recipe_name ? recipe.recipe_name : '';
	const cookingtime = recipe.recipe_cookingtime ? recipe.recipe_cookingtime : '';
	const calories = recipe.recipe_calories ? recipe.recipe_calories : 0;
	const video = recipe.recipe_video ? recipe.recipe_video : '';
	const protein = recipe.recipe_protein ? recipe.recipe_protein : 0;
	const fat = recipe.recipe_fat ? recipe.recipe_fat : 0;
	const carbs = recipe.recipe_carb ? recipe.recipe_carb : 0;
	const cuisine = recipe.recipe_cuisine ? recipe.recipe_cuisine : '';
	const type = recipe.recipe_type ? recipe.recipe_type : '';
	const servings = recipe.recipe_serving ? recipe.recipe_serving : '';
	const steps = recipe.recipe_steps ? JSON.parse(recipe.recipe_steps.slice(1, -1)) : [];
	return (
		<Dialog
			fullWidth={true}
			maxWidth={'md'}
			open={open}
			onClose={onClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'>
			{isLoading ? (
				<SpinnerLoader
					height={'50vh'}
					loaderColor={colors.grey}
					loaderHeight={50}
					loaderWidth={50}
					loadingText={'Loading recipe...'}
				/>
			) : (
				<Grid>
					<DialogTitle>
						<Grid container justifyContent='space-between'>
							<Grid item container xs={6} justifyContent='flex-start' alignItems='center'>
								<Typography variant='h5' color={colors.grey}>
									{name}
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
											<ReactPlayer controls width='100%' height='100%' url={video} />
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
												<Grid item style={Styles.marginRight5}>
													<FontAwesomeIcon icon={faFire} color={colors.yellow} style={{ fontSize: '25px' }} />
												</Grid>
												<Grid item>
													<Typography variant='subtitle2'>{calories + ' cal'}</Typography>
												</Grid>
											</Grid>
											<Grid item xs={4} container direction='row' justifyContent='center' alignItems='center'>
												<Grid item style={Styles.marginRight5}>
													<FontAwesomeIcon icon={faClock} color={colors.grey} style={{ fontSize: '25px' }} />
												</Grid>
												<Grid item>
													<Typography variant='subtitle2'>{cookingtime + ' min'}</Typography>
												</Grid>
											</Grid>
										</Grid>

										<Grid container className='marginTop'>
											<Grid item container justifyContent='flex-end'>
												<Grid item xs={4} container direction='column'>
													<Macros icon={faBookOpen} title={'Cuisine'} value={cuisine} color={colors.primary} />
												</Grid>
												<Grid item xs={4} container direction='column'>
													<Macros icon={faUtensils} title={'Type'} value={type} color={colors.primary} />
												</Grid>
												<Grid item xs={4} container direction='column'>
													<Macros icon={faConciergeBell} title={'Servings'} value={servings} color={colors.primary} />
												</Grid>
											</Grid>
										</Grid>
										<Divider />

										<Grid container className='marginTop'>
											<Grid item xs={12} container justifyContent='flex-end'>
												<Grid item xs={4} container direction='column'>
													<Macros icon={faEgg} title={'Protein'} value={`${protein} gms`} color={colors.primary} />
												</Grid>
												<Grid item xs={4} container direction='column'>
													<Macros icon={faCheese} title={'Fat'} value={`${fat} gms`} color={colors.primary} />
												</Grid>
												<Grid item xs={4} container direction='column'>
													<Macros icon={faHamburger} title={'Carbs'} value={`${carbs} gms`} color={colors.primary} />
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							{/* <Grid item container className='marginTop'> */}
							<Divider className='marginTop ' />
							{/* <//</DialogContent>Grid> */}
							<Grid item container direction='column' style={{ ...Styles.marginTop10 }}>
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
																style={{ fontSize: '20px' }}
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
															<FontAwesomeIcon icon={faEgg} color={colors.primary} style={{ fontSize: '20px' }} />
															<Typography variant='caption'>{'Protein(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faCheese} color={colors.primary} style={{ fontSize: '20px' }} />
															<Typography variant='caption'>{'Fat(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faHamburger} color={colors.primary} style={{ fontSize: '20px' }} />
															<Typography variant='caption'>{'Carbs(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faWineGlass} color={colors.primary} style={{ fontSize: '20px' }} />
															<Typography variant='caption'>{'Alcohol(g)'}</Typography>
														</Grid>
													</TableCell>
													<TableCell align='center'>
														<Grid
															container
															direction='column'
															// justifyContent='center'
															alignItems='center'>
															<FontAwesomeIcon icon={faAppleAlt} color={colors.primary} style={{ fontSize: '20px' }} />
															<Typography variant='caption'>{'Fibre(g)'}</Typography>
														</Grid>
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{mappedIngredients.map((ingredient, index) => (
													<TableRow key={`${ingredient.name}-${index}`}>
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
							<Grid item container direction='column' style={{ ...Styles.marginTop10 }}>
								<Typography variant='h6' color='secondary'>
									Recipe cooking steps
								</Typography>
								{steps.map((step, index) => (
									<Typography variant='subtitle2' align='left' key={`${step}-${index}`}>
										<b>{`Step ${index + 1}:`}</b>
										{` ${step}`}
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
