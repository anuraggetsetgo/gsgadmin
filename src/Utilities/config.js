localStorage.setItem(
	'user_token',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiY2M3MGMxODQtMzI1Mi00OWIwLThiYzItMzIxYjU4M2E1ZjU2Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjZkMzQ1NjJjLWMxZTEtNGQ1OS04ZTJhLTMwOGMzMjFjZjYzNSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ1NjE5MTE5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NTcwNTUxOSwiaWF0IjoxNjQ1NjE5MTE5LCJqdGkiOiIyYjE2YTIyNi05YWU1LTRjNDItOGI4NC0yNGVkZmU5NDM4ZGIifQ.c7GtJVgU4XJQYJiAqYOtjuMjwKzodl3di5ICG3RNNuN0A82WUofISq-aWZAjlEfPkKaT-Y7312MyLIKB9y_VBEPBZMxVs0ILy7Ni2FAtEIIPGljSkVl9b-SFOYmp7fwhldNID7EU54bPOwmywuESxCoISdxU3fN0B5zjQK9VIaFDBsE9TO9kQrac4ZbU8GUHDSW_pz-tqcUc_LEWu0we4MwHnXBlDSQ7_cEFv7SPuBRABc6W1OFU_i4mh--uahXgfpLmPXDzQ8S2rf9jhhuzFbd34SiRsqfV2kEgurz6F1JqrBagJM4wMrhUGde5gtzOZZZzSP-evvgqfgnE2ZaMkw',
);

// MUI ICONS
import React from 'react';
import DiningIcon from '@mui/icons-material/Dining';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import HomeIcon from '@mui/icons-material/Home';

const config = {
	// FOOD TYPES
	type: { 1: 'Veg', 2: 'Non-veg', 3: 'Egg', 4: 'Jain', 5: 'Vegan' },
	// ITEMS COUNTS
	ingredient_count: 12,
	recipe_count: 9,
	// DRAWER MENU
	menuList: ['home', 'recipe', 'ingredient'],
	menuIcons: [<HomeIcon />, <DiningIcon />, <FoodBankIcon />],
	// STATUS TABS
	statusTabs: ['0', '1', '2'],
	statusTabLabels: ['Pending', 'Approved', 'Rejected'],
};

export default config;
