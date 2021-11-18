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
					<Grid container justifyContent='space-between' alignItems='center' style={{ padding: '10px' }}>
						<Grid item container direction='column' xs={6} justifyContent='flex-start' alignItems='flex-start'>
							<Typography variant='h6'>{name}</Typography>
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
								<Grid xs={2} container direction='column'>
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
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={{ marginRight: '2px' }}>
											<FontAwesomeIcon icon={faHamburger} color='#1976d2' style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{carbohydrate + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='#E91E63'>
												Carbohydrate
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={{ marginRight: '2px' }}>
											<FontAwesomeIcon icon={faWineGlass} color='#1976d2' style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{alcohol + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='#E91E63'>
												Alcohol
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={{ marginRight: '2px' }}>
											<FontAwesomeIcon icon={faAppleAlt} color='#1976d2' style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{fibre + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='#E91E63'>
												Fibre
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid xs={2} container direction='column'>
									<Grid item container justifyContent='center' alignItems='center'>
										<Grid item style={{ marginRight: '2px' }}>
											<FontAwesomeIcon icon={faFire} color='orange' style={{ 'font-size': '18px' }} />
										</Grid>
										<Grid item>
											<Typography variant='subtitle2'>{calories + '(g)'}</Typography>
										</Grid>
									</Grid>
									<Grid container justifyContent='center' alignItems='center'>
										<Grid item>
											<Typography variant='caption' color='#E91E63'>
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
