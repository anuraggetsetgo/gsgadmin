import React from 'react';
// MUI COMPONENTS
import { Dialog, DialogTitle, DialogContent, Grid, Typography, Tooltip, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// COMPONENTS
import Macros from './Macros';
import SpinnerLoader from './SpinnerLoader';
// Fontawesomwe
import {
	faFire,
	faEgg,
	faCheese,
	faWineGlass,
	faHamburger,
	faAppleAlt,
	faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';
// Colors and Styles
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';
// CONFIG
import Config from '../Utilities/config';
function IngredientPreview(props) {
	const {
		open,
		isLoading,
		onClose,
		name,
		protein,
		fat,
		carbs,
		alcohol,
		fibre,
		calories,
		quantity,
		unit,
		comments,
		image,
	} = props;
	// Config
	const placeholderImage = Config.placeholderImage;

	return (
		<Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'lg'}>
			<DialogTitle>
				{/* Header */}
				<Grid container justifyContent={'space-between'} alignItems={'center'}>
					<Grid item xs={8} container justifyContent={'flex-start'} alignItems={'center'}>
						<Grid item style={{ ...Styles.padding5 }}>
							<Typography color='secondary' variant='h6'>
								{name}
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={4} container justifyContent={'flex-end'} alignItems={'center'}>
						<Tooltip title='Close preview'>
							<CloseIcon onClick={onClose} />
						</Tooltip>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent dividers>
				{isLoading ? (
					<SpinnerLoader
						height={''}
						loaderColor={colors.grey}
						loaderHeigh={50}
						loaderWidth={50}
						loadingText={'Loading ingredient...'}
					/>
				) : (
					<Grid container direction='row' alignItems={'center'} style={{ minHeight: '250px' }}>
						<Grid
							item
							xs={4}
							container
							justifyContent={'center'}
							alignItems={'center'}
							style={{ height: '250px', width: '300px', ...Styles.borderRadius2 }}>
							<img src={image !== '' ? image : placeholderImage} alt='Ingredient Image' height='100%' width='100%' />
						</Grid>

						{/* Macros */}
						<Grid
							item
							xs={8}
							container
							direction={'column'}
							justifyContent={'space-evenly'}
							alignItems={'center'}
							style={{ ...Styles.padding10, minHeight: '250px' }}>
							<Grid item container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
								<Grid item>
									<Macros icon={faEgg} title={'Protein'} value={`${protein} gms`} color={colors.primary} />
								</Grid>
								<Grid item>
									<Macros icon={faCheese} title={'Fat'} value={`${fat} gms`} color={colors.primary} />
								</Grid>
								<Grid item>
									<Macros icon={faHamburger} title={'Carbs'} value={`${carbs} gms`} color={colors.primary} />
								</Grid>
								<Grid item>
									<Macros icon={faWineGlass} title={'Alcohol'} value={`${alcohol} gms`} color={colors.primary} />
								</Grid>
								<Grid item>
									<Macros icon={faAppleAlt} title={'Fibre'} value={`${fibre} gms`} color={colors.primary} />
								</Grid>
								<Grid item>
									<Macros icon={faFire} title={'Calories'} value={`${calories} KCal`} color={colors.yellow} />
								</Grid>
								<Grid item>
									<Macros
										icon={faScaleBalanced}
										title={'Quantity'}
										value={`${quantity} ${unit}`}
										color={colors.primary}
									/>
								</Grid>
							</Grid>

							<Divider />

							{/* Comments */}
							{comments.length > 0 ? (
								<Grid
									container
									direction='column'
									justifyContent={'flex-start'}
									alignItems={'stretch'}
									style={{ ...Styles.marginTop10.marginTop }}>
									<Grid item>
										<Typography variant='h6' color={'secondary'}>
											Ingredient's comment
										</Typography>
									</Grid>
									<Grid item>
										<Typography variant='body2' align='justify'>
											{comments}
										</Typography>
									</Grid>
								</Grid>
							) : null}
						</Grid>
					</Grid>
				)}
			</DialogContent>
		</Dialog>
	);
}

export default IngredientPreview;
