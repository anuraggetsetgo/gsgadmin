import React from 'react';
import Loader from 'react-loader-spinner';
import { Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehRollingEyes } from '@fortawesome/free-solid-svg-icons';

function LoginView(props) {
	const { loggedInStatus, loggingIn } = props;
	console.log(props);
	return loggedInStatus ? (
		<Grid container direction='column' justifyContent='center' alignItems='center' style={{ height: '90vh' }}>
			<Typography color='primary' variant='h5'>
				Congratulations, you are successfully logged in!
			</Typography>
		</Grid>
	) : (
		<Grid container direction='column' justifyContent='center' alignItems='center' style={{ height: '90vh' }}>
			<Grid container direction='column' justifyContent='center' alignItems='center' style={{ height: '20vh' }}>
				<Typography variant='h5' color='error'>
					Oops, you are logged out!
				</Typography>
				<FontAwesomeIcon icon={faMehRollingEyes} color='grey' style={{ 'font-size': '50px' }} />
			</Grid>

			{loggingIn ? (
				<Grid container justifyContent='center' alignItems='center' style={{ height: '10vh' }}>
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
			) : null}
		</Grid>
	);
}

export default LoginView;
