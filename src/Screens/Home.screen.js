import React from 'react';
// COnfifg
import Config from '../Utilities/config';
// MUI
import DiningIcon from '@mui/icons-material/Dining';
import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';
import { Grid } from '@mui/material';
// Components
import ToolIcon from '../Components/ToolIcon';
// STYLES AND COLORS
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';
import { muiPaletteLightColors } from '../Utilities/services';
function HomeScreen(props) {
	// De-structuring props
	const { updateCurrentView } = props;
	// ToolIcons Colors
	let toolIconsColors = Object.values(muiPaletteLightColors);
	return (
		<Grid
			container
			justifyContent={'flex-start'}
			alignItems={'flex-start'}
			spacing={3}
			style={{ height: '100%', width: '100%' }}>
			<Grid item xs={1.5}>
				<ToolIcon
					title={`Recipes`}
					icon={<DiningIcon style={{ fontSize: '70px' }} />}
					onClick={() => {
						updateCurrentView('Recipes');
					}}
					bgColor={toolIconsColors[0]}
				/>
			</Grid>
			<Grid item xs={1.5}>
				<ToolIcon
					title={`Ingredients`}
					icon={<RamenDiningRoundedIcon style={{ fontSize: '70px' }} />}
					onClick={() => {
						updateCurrentView('Ingredients');
					}}
					bgColor={toolIconsColors[1]}
				/>
			</Grid>
		</Grid>
	);
}

export default HomeScreen;
