import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
function ApproveDialog(props) {
	const { open, onApporve, onClose, text } = props;

	return (
		<Dialog open={open}>
			<DialogTitle id='alert-dialog-title'>{'Approve Recipe'}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>No</Button>
				<Button onClick={onApporve} autoFocus>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ApproveDialog;
