import React from 'react';
// MUI
import { Grid, Typography } from '@mui/material';
// REACT LOADER SPINNER
import { Circles } from 'react-loader-spinner';

function SpinnerLoader(props) {
	const { height, loaderColor, loaderHeight, loaderWidth, loadingText } = props;
	console.log(props);
	return (
		<Grid
			container
			direction='column'
			justifyContent={'center'}
			alignItems={'center'}
			style={{ height: height, width: '100%' }}>
			<Grid item>
				<Circles color={loaderColor} height={loaderHeight} width={loaderWidth} />
			</Grid>
			<Grid item>
				<Typography color={loaderColor} align='center'>
					{loadingText}
				</Typography>
			</Grid>
		</Grid>
	);
}

export default SpinnerLoader;
