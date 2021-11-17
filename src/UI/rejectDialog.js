import React from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, Button } from '@mui/material';

function RejectDialog(props) {
	const { open, text, onChange, secondary, primary } = props;
	return (
		<Dialog
			open={open}
			// onClose={() => {
			// 	handleRecipeActions('close-reject-dialog');
			// }}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'>
			<DialogTitle id='alert-dialog-title'>{'Reject Recipe'}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
				<TextField
					autoFocus
					margin='dense'
					id='name'
					label='Add comments'
					type='text'
					fullWidth
					variant='standard'
					onChange={onChange}
				/>
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

export default RejectDialog;
