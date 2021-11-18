import React from 'react';
import { Grid, Button, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

function CardView(props) {
	const { image, name, onView, onApprove, onReject, firstname, lastname, comments } = props;

	return (
		// <Box >
		<Card
			sx={{ border: 1, borderColor: 'lightGrey', borderRadius: '5px' }}
			// onClick={() => {
			// 	handleRecipeActions('view', recipe['recipe_code']);
			// }}
		>
			<CardActionArea>
				<Grid container justifyContent='space-between'>
					<Grid item xs={4.5}>
						{image !== '' ? (
							<CardMedia component='img' height='150' image={image} alt='green iguana' />
						) : (
							<CardMedia
								component='img'
								height='150'
								image={'http://generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'}
								alt='green iguana'
							/>
						)}
					</Grid>
					<Grid
						item
						xs={7}
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
						style={{ padding: '5px' }}>
						<Grid container>
							<Grid container justifyContent='flex-start' alignItems='center'>
								<Typography variant='subtitle1'>
									<b>{name}</b>
								</Typography>
							</Grid>
							<Grid container justifyContent='flex-start' alignItems='center'>
								<Typography variant='subtitle2' color='Grey'>
									{firstname + ' ' + lastname}
								</Typography>
							</Grid>
							<Grid xs={12} container style={{ marginTop: '10px' }}>
								<Grid item container xs={4} justifyContent='flex-start' alignItems='center'>
									<Button variant='outlined' size='small' onClick={onView}>
										View
									</Button>
								</Grid>
								{onApprove ? (
									<Grid item container xs={4} justifyContent='center' alignItems='center'>
										<Button variant='contained' color='primary' size='small' onClick={onApprove}>
											Approve
										</Button>
									</Grid>
								) : null}
								{onReject ? (
									<Grid item container xs={4} justifyContent='flex-end' alignItems='center'>
										<Button variant='contained' color='error' size='small' onClick={onReject}>
											Reject
										</Button>
									</Grid>
								) : null}
							</Grid>
						</Grid>
						{comments ? (
							<Grid container justifyContent='flex-start' alignItems='center' style={{ padding: '5px' }}>
								<Typography variant='caption' color='error'>
									{comments}
								</Typography>
							</Grid>
						) : null}
					</Grid>
				</Grid>
			</CardActionArea>
		</Card>
		// </Box>
	);
}

export default CardView;
