import React from 'react';
// MUI
import {
	Menu,
	MenuItem,
	Grid,
	Button,
	Tooltip,
	ListItemIcon,
	ListItemText,
	List,
	ListItem,
	IconButton,
} from '@mui/material';
// Config
import Config from '../Utilities/config';

export default function PositionedMenu(props) {
	const { open, anchor, buttonTitle, buttonTooltip, handleMenuActions } = props;
	// Exctracting some data out from Configurations
	const menuList = Config.menuList;
	const menuIcons = Config.menuIcons;
	return (
		<Grid>
			<Tooltip title={buttonTooltip}>
				<Button
					variant='outlined'
					color='primary'
					onClick={(event) => {
						handleMenuActions('open', event.currentTarget);
					}}>
					{buttonTitle}
				</Button>
			</Tooltip>
			<Menu
				anchorEl={anchor}
				open={open}
				onClose={() => {
					handleMenuActions('close');
				}}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}>
				{menuList.map((menu, index) => (
					<MenuItem
						onClick={() => {
							handleMenuActions('set-view', menu);
						}}
						key={`${menu}-${index}`}
						value={menu}>
						<ListItemIcon
							onClick={() => {
								handleMenuActions('set-view', menu);
							}}>
							{menuIcons[index]}
						</ListItemIcon>
						<ListItemText
							primary={menu}
							onClick={() => {
								handleMenuActions('set-view', menu);
							}}
						/>
					</MenuItem>
				))}
			</Menu>
		</Grid>
	);
}
