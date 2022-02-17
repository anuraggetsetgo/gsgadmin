import React from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, Button } from '@mui/material';

function RejectDialog(props) {
	const { open, text, onComment, onReject, onDeclineReject } = props;
	return (
		<Dialog open={open}>
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
					onChange={onComment}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onDeclineReject}>No</Button>
				<Button onClick={onReject} autoFocus>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default RejectDialog;
