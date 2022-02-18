import React from 'react';
import { Grid, Button, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { Styles } from '../app-styles';
function RejectedFoodCard(props) {
	const { withImage, image, code, comments, name, firstname, lastname, distinguishCardClicks } = props;
	return (
		<Card
			id='card'
			sx={{ ...Styles.border1, ...Styles.borderLightGrey, ...Styles.borderRadius2, height: 150 }}
			onClick={(e) => {
				distinguishCardClicks(e.target.id, code);
			}}>
			<CardActionArea sx={{ height: 150 }}>
				<Grid container justifyContent='space-between' alignItems={'flex-start'} style={{ height: '100%' }}>
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
						justifyContent='flex-start'
						alignItems='center'
						style={{ padding: withImage ? '5px' : '15px' }}>
						<Grid container>
							<Grid container justifyContent='space-between' alignItems='center' style={{ ...Styles.marginTop10 }}>
								<Grid item>
									<Typography variant='h6'>{name}</Typography>
								</Grid>
								<Grid item>
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
			</CardActionArea>
		</Card>
	);
}

export default RejectedFoodCard;
