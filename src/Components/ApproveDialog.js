import React from 'react';
// Sppiner Loader
import SpinnerLoader from './SpinnerLoader';
// Colors
import { colors } from '../Utilities/services';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
function ApproveDialog(props) {
	const { open, onApporve, onClose, text, dialogTitle, isApproving, approvingTitle } = props;
	return (
		<Dialog open={open} fullWidth={true} maxWidth={'sm'}>
			<DialogTitle id='alert-dialog-title'>{dialogTitle}</DialogTitle>
			<DialogContent>
				{isApproving ? (
					<SpinnerLoader
						height={'inherit'}
						loaderColor={colors.grey}
						loaderHeigh={50}
						loaderWidth={50}
						loadingText={approvingTitle}
					/>
				) : (
					<DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
				)}
			</DialogContent>
			{isApproving ? null : (
				<DialogActions>
					<Button onClick={onClose}>No</Button>
					<Button onClick={onApporve} autoFocus>
						Yes
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
}

export default ApproveDialog;
