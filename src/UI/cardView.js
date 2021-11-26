import React from 'react';
import { Grid, Button, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { Styles } from '../app-styles';
function CardView(props) {
	const {
		image,
		name,
		onView,
		onApprove,
		onReject,
		firstname,
		lastname,
		comments,
		type,
		distinguishClicks,
		code,
		showApproveButton,
		showRejectButton,
	} = props;
	// console.log(props)
	return (
		// <Box >
		<Card
			id='card'
			sx={{ ...Styles.border1, ...Styles.borderLightGrey, ...Styles.borderRadius2 }}
			onClick={(e) => {
				distinguishClicks(e.target.id, code);
			}}>
			<CardActionArea sx={{ height: 150 }}>
				<Grid container justifyContent='space-between'>
					{type === 'recipe' ? (
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
					) : null}

					<Grid
						item
						xs={type === 'recipe' ? 7 : 12}
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
						style={{ padding: type === 'recipe' ? '5px' : '15px' }}>
						<Grid container>
							<Grid container justifyContent='flex-start' alignItems='center' style={{ ...Styles.marginTop10 }}>
								<Typography variant='h6'>{name}</Typography>
							</Grid>
							<Grid container justifyContent='flex-start' alignItems='center'>
								<Typography variant='subtitle2' color='Grey'>
									{firstname + ' ' + lastname}
								</Typography>
							</Grid>
							<Grid xs={12} container style={{ marginTop: '10px' }} justifyContent='flex-start'>
								<Grid item container xs={4} justifyContent='flex-start' alignItems='center'>
									<Button
										id='view-button'
										variant='outlined'
										size='small'
										onClick={(e) => {
											distinguishClicks(e.target.id, code);
										}}>
										View
									</Button>
								</Grid>
								{showApproveButton ? (
									<Grid item container xs={4} justifyContent='center' alignItems='center'>
										<Button
											id='approve-button'
											variant='contained'
											color='primary'
											size='small'
											onClick={(e) => {
												distinguishClicks(e.target.id, code);
											}}>
											Approve
										</Button>
									</Grid>
								) : null}
								{showRejectButton ? (
									<Grid item container xs={4} justifyContent='flex-end' alignItems='center'>
										<Button
											id='reject-button'
											variant='contained'
											color='error'
											size='small'
											onClick={(e) => {
												distinguishClicks(e.target.id, code);
											}}>
											Reject
										</Button>
									</Grid>
								) : null}
							</Grid>
						</Grid>
						<Grid container justifyContent='flex-start' alignItems='center'>
							{comments ? (
								<Typography variant='caption' color='error' align='left'>
									{comments}
								</Typography>
							) : null}
						</Grid>
					</Grid>
				</Grid>
			</CardActionArea>
		</Card>
		// </Box>
	);
}

export default CardView;
