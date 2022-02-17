import React from 'react';
// MUI
import { Grid, Typography } from '@mui/material';

function NotFoundMessage(props) {
	const { message } = props;
	return (
		<Grid container justifyContent={'center'} alignItems={'center'} style={{ width: '100%' }}>
			<Typography color='error' align='center'>
				{message}
			</Typography>
		</Grid>
	);
}

export default NotFoundMessage;
