import React from 'react';
import { Snackbar, IconButton, Alert } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function Snackbarview(props) {
	const { open, onClose, message, severity } = props;
	const action = (
		<React.Fragment>
			<IconButton size='small' color='error' onClick={onClose}>
				<ClearIcon />
			</IconButton>
		</React.Fragment>
	);

	return (
		<Snackbar open={open} autoHideDuration={2000} onClose={onClose} action={action} style={{ height: '5vh' }}>
			<Alert onClose={onClose} severity={severity} variant='filled' sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
}

export default Snackbarview;
