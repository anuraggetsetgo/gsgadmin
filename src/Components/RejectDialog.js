import React from 'react';
// COmponents
import SpinnerLoader from './SpinnerLoader';
// Colors
import { colors } from '../Utilities/services';

import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, Button } from '@mui/material';

function RejectDialog(props) {
	const { open, text, onComment, onReject, onDeclineReject, comment, dialogTitle, isRejecting, rejectingTitle } = props;
	return (
		<Dialog open={open} fullWidth={true} maxWidth={'sm'}>
			<DialogTitle id='alert-dialog-title'>{dialogTitle}</DialogTitle>

			<DialogContent>
				{isRejecting ? (
					<SpinnerLoader
						height={'inherit'}
						loaderColor={colors.grey}
						loaderHeigh={50}
						loaderWidth={50}
						loadingText={rejectingTitle}
					/>
				) : (
					<>
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
							value={comment}
						/>
					</>
				)}
			</DialogContent>
			{isRejecting ? null : (
				<DialogActions>
					<Button onClick={onDeclineReject}>No</Button>
					<Button onClick={onReject} autoFocus>
						Yes
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
}

export default RejectDialog;
