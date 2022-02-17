import React from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Typography } from '@mui/material';
// Colors and Styles
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';

function Macros(props) {
	const { icon, title, value, color } = props;
	return (
		<Grid container direction='column'>
			<Grid item container justifyContent='center' alignItems='center'>
				<Grid item style={{ marginRight: '2px' }}>
					<FontAwesomeIcon icon={icon} color={color} style={{ fontSize: '18px' }} />
				</Grid>
				<Grid item>
					<Typography variant='subtitle2'>{value}</Typography>
				</Grid>
			</Grid>
			<Grid item container justifyContent='center' alignItems='center'>
				<Grid item>
					<Typography variant='caption' color='secondary'>
						{title}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Macros;
