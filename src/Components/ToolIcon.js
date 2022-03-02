import React from 'react';
// MUI
import { Card, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
// STYLES AND COLORS
import { Styles } from '../app-styles';
import { colors } from '../Utilities/services';
function ToolIcon(props) {
	// De-stucrturing props
	const { title, icon, onClick } = props;
	return (
		<Card elevation={1} style={{ ...Styles.lightGreyBG, ...Styles.parentSquare }}>
			<Grid
				container
				direction='column'
				justifyContent={'center'}
				alignItems={'center'}
				style={{
					...Styles.padding10,
					...Styles.borderRadius2,
					...Styles.childSquare,
					height: '100%',
					width: '100%',
					// position: 'absolute',
					// top: 0,
					// left: 0,
					// bottom: 0,
					// right: 0,
				}}>
				{/* ICON */}

				<Grid item container justifyContent={'center'} alignItems={'center'} style={{ height: '90%', width: '100%' }}>
					<Tooltip title={`Open ${title}`} placement='top'>
						<IconButton
							onClick={onClick}
							sx={{ borderRadius: '50%', bgcolor: colors.white, border: 0, borderColor: 'primary' }}>
							{icon}
						</IconButton>
					</Tooltip>
				</Grid>
				<Grid
					item
					container
					direction={'column'}
					justifyContent={'flex-end'}
					alignItems={'center'}
					style={{ height: '10%', width: '100%' }}>
					<Grid item>
						<Link underline='hover' variant='h6' onClick={onClick}>
							{title}
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	);
}

export default ToolIcon;
