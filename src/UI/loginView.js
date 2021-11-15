import React from 'react';
import Loader from 'react-loader-spinner';
import { Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehRollingEyes } from '@fortawesome/free-solid-svg-icons';

function LoginView(props) {
	const { loggedInStatus } = props;
	console.log(props);
	return loggedInStatus ? (
		<p>Hi, I am admin login page</p>
	) : (
		<Grid container direction='column' justifyContent='flex-start' alignItems='center'>
			<Grid container direction='column' justifyContent='flex-start' alignItems='center' style={{ height: '20vh' }}>
				<Typography variant='h4'>Oops, you are logged out!</Typography>
				<FontAwesomeIcon icon={faMehRollingEyes} color='grey' style={{ 'font-size': '50px' }} />
			</Grid>
			<Grid container style={{ height: '20vh' }}>
				<Grid item container xs={6} justifyContent='flex-end' alignItems='center'>
					<Typography variant='h6' color='primary'>
						Logging In
					</Typography>
				</Grid>
				<Grid container xs={6} item justifyContent='flex-start' alignItems='center'>
					<Grid contaier justifyContent='center' alignItems='center'>
						<Loader type='ThreeDots' color='#1976d2' height='10' />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default LoginView;
