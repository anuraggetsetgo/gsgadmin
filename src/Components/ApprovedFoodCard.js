import React from 'react';
import { Grid, Button, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { Styles } from '../app-styles';
function ApprovedFoodCard(props) {
	const { image, name, firstname, lastname, withImage, distinguishCardClicks, code } = props;
	return (
		<Card
			id='card'
			sx={{ ...Styles.border1, ...Styles.borderLightGrey, ...Styles.borderRadius2, height: 150 }}
			onClick={(e) => {
				distinguishCardClicks(e.target.id, code);
			}}>
			{/* <CardActionArea sx={{ height: 150 }}> */}
			<Grid container justifyContent='space-between' alignItems={'flex-start'} style={{ height: '150px' }}>
				{withImage ? (
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
					xs={withImage ? 7 : 12}
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
					style={{ padding: withImage ? '5px' : '15px' }}>
					<Grid container>
						<Grid container justifyContent='flex-start' alignItems='center' style={{ ...Styles.marginTop10 }}>
							<Typography variant='h6'>{name}</Typography>
						</Grid>
						<Grid container justifyContent='flex-start' alignItems='center'>
							<Typography variant='subtitle2' color='Grey'>
								{firstname + ' ' + lastname}
							</Typography>
						</Grid>
						<Grid item xs={12} container style={{ marginTop: '10px' }} justifyContent='flex-start'>
							<Grid item style={{ padding: '5px 5px 5px 0px' }}>
								<Button
									id='view-button'
									variant='contained'
									color='primary'
									size='small'
									onClick={(e) => {
										distinguishCardClicks(e.target.id, code);
									}}>
									View
								</Button>
							</Grid>

							<Grid item style={{ ...Styles.padding5 }}>
								<Button
									id='reject-button'
									variant='contained'
									color='error'
									size='small'
									onClick={(e) => {
										distinguishCardClicks(e.target.id, code);
									}}>
									Reject
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* </CardActionArea> */}
		</Card>
	);
}

export default ApprovedFoodCard;