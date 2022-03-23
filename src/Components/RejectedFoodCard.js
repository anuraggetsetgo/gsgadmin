import React from 'react';
import { Grid, Button, Typography, Card, CardMedia } from '@mui/material';
import { Styles } from '../app-styles';

// CONFIG
import Config from '../Utilities/config';
function RejectedFoodCard(props) {
	const { image, code, comments, name, firstname, lastname, distinguishCardClicks } = props;
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
					justifyContent='flex-start'
					alignItems='center'
					style={{ padding: '5px' }}>
					<Grid container>
						<Grid container alignItems='flex-start' style={{ ...Styles.marginTop10 }}>
							<Grid item xs={9}>
								<Typography variant='h6'>{name}</Typography>
							</Grid>
							<Grid item xs={3}>
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
						</Grid>
						<Grid container justifyContent='flex-start' alignItems='center'>
							<Typography variant='subtitle2' color='Grey'>
								{firstname + ' ' + lastname}
							</Typography>
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
		</Card>
	);
}

export default RejectedFoodCard;
