import React from 'react';
// MUI COMPONENTS
import { Dialog, DialogTitle, DialogContent, Grid, Typography, Tooltip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// COMPONENTS
import Macros from './Macros';
import SpinnerLoader from './SpinnerLoader';
// Fontawesomwe
import { faFire, faEgg, faCheese, faWineGlass, faHamburger, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
// Colors and Styles
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';
const Tooltip2 = React.forwardRef((props, ref) => <Tooltip {...props} ref={ref} />);

function IngredientPreview(props) {
	const { open, isLoading, onClose, name, protein, fat, carbs, alcohol, fibre, calories, quantity, unit } = props;
	// Extracting the data to render

	return (
		<Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'md'}>
			<DialogTitle>
				<Grid container justifyContent={'space-between'} alignItems={'center'}>
					<Grid item xs={8} container justifyContent={'flex-start'} alignItems={'center'}>
						<Grid item style={{ ...Styles.padding5 }}>
							<Typography color='secondary' variant='h6'>
								{name}
							</Typography>
						</Grid>
						<Grid item style={{ ...Styles.padding5 }}>
							<Typography>{`${quantity} ${unit}`}</Typography>
						</Grid>
					</Grid>
					<Grid item xs={4} container justifyContent={'flex-end'} alignItems={'center'}>
						<Tooltip2 title='Close preview'>
							<CloseIcon onClick={onClose} />
						</Tooltip2>
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
					<Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
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
					</Grid>
				)}
			</DialogContent>
		</Dialog>
	);
}

export default IngredientPreview;
