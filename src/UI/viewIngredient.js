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
import {Styles} from '../app-styles'
function ViewIngredient(props) {
	const { open, onClose, name, isLoading, protein, fat, carbohydrate, alcohol, fibre, calories, quantity, unit } =
		props;

	return (
		<Dialog
			fullWidth={true}
			maxWidth={'sm'}
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
				<Grid container direction='column'>
					{/* <DialogTitle> */}
					<Grid container justifyContent='space-between' alignItems='center' style={ Styles.padding10 }>
						<Grid item container direction='column' xs={6} justifyContent='flex-start' alignItems='flex-start'>
							<Typography variant='h5' color={colors.grey}>{name}</Typography>
							<Typography variant='subtitle2'>{'' + quantity + ' ' + unit}</Typography>
						</Grid>
						<Grid item container xs={6} justifyContent='flex-end' alignItems='center'>
							<Tooltip title='Close'>
								<IconButton size='small' onClick={onClose}>
									<ClearIcon />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
					{/* </DialogTitle> */}
					<DialogContent dividers>
						<Grid container direction='column'>
							<Grid container>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={Styles.marginRight5}>
											<FontAwesomeIcon icon={faEgg} color={colors.primary} style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{protein + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='secondary'>
												Protein
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={Styles.marginRight5}>
											<FontAwesomeIcon icon={faCheese} color={colors.primary} style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{fat + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='secondary'>
												Fat
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={Styles.marginRight5}>
											<FontAwesomeIcon icon={faHamburger} color={colors.primary} style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{carbohydrate + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='secondary'>
												Carbohydrate
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={Styles.marginRight5}>
											<FontAwesomeIcon icon={faWineGlass} color={colors.primary} style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{alcohol + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='secondary'>
												Alcohol
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={Styles.marginRight5}>
											<FontAwesomeIcon icon={faAppleAlt} color={colors.primary} style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{fibre + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='secondary'>
												Fibre
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={Styles.marginRight5}>
											<FontAwesomeIcon icon={faFire} color={colors.yellow} style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{calories + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='secondary'>
												Calories
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</DialogContent>
				</Grid>
			)}
		</Dialog>
	);
}

export default ViewIngredient;
