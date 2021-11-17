import React from 'react';
import { Snackbar, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function Snackbarview(props) {
	const { open, onClose, message } = props;
	const action = (
		<React.Fragment>
			<IconButton size='small' color='error' onClick={onClose}>
				<ClearIcon />
			</IconButton>
		</React.Fragment>
	);

	return (
		<Snackbar
			open={open}
			autoHideDuration={2000}
			onClose={onClose}
			message={message}
			action={action}
			style={{ height: '5vh' }}
		/>
	);
}

export default Snackbarview;
