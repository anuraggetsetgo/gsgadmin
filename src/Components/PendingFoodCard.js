import React from 'react';
import { Grid, Button, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { Styles } from '../app-styles';
// CONFIG
import Config from '../Utilities/config';

function PendingFoodCard(props) {
	const { image, name, firstname, lastname, distinguishCardClicks, code } = props;
	// Config
	const placeholderImage = Config.placeholderImage;
	return (
		<Card
			id='card'
			sx={{ height: 150 }}
			onClick={(e) => {
				distinguishCardClicks(e.target.id, code);
			}}>
			<Grid container justifyContent='space-between' alignItems={'flex-start'} style={{ height: '150px' }}>
				<Grid item xs={4.5}>
					<CardMedia component='img' height='150' image={image !== '' ? image : placeholderImage} alt='green iguana' />
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
									id='approve-button'
									variant='contained'
									color='success'
									size='small'
									onClick={(e) => {
										distinguishCardClicks(e.target.id, code);
									}}
									style={{ ...Styles.padding5 }}>
									Approve
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
		</Card>
	);
}

export default PendingFoodCard;
