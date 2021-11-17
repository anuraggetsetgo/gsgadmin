import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
function ApproveDialog(props) {
	const { open, secondary, primary, text } = props;

	return (
		<Dialog
			open={open}
			// onClose={handleRecipeActions('close-approve-dialog')}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'>
			<DialogTitle id='alert-dialog-title'>{'Approve Recipe'}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={secondary}>No</Button>
				<Button onClick={primary} autoFocus>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ApproveDialog;
