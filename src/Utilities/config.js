localStorage.setItem(
	'user_token',
	localStorage.getItem('user_token') ||
		'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiNzc1N2Y5NTktZjAwYS00OWUxLWFmNGItZTI0MTAyZDhmNzEzIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjA1YTNjZTY5LTI2OWQtNGM4Yy1iZTViLTU4MDRiZmRkNDE1NyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ2NjQ3MjQzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0Njk5OTc5MSwiaWF0IjoxNjQ2OTEzMzkxLCJqdGkiOiIzYTgzZjNkMi01OTdmLTQ4NzUtYTQyYS0zMzQ3MTk5MmM4OGIifQ.ZoBmf2JzRd-UoJU1HfHzD4QKqe-E1lhxIN7o5WZ5HxKyHkZt6nXQ1fKcc2O6x5C8Ig2WiAF7O9AR9OKpnrawh1-xSeHP3LDILEA_n3lsVCtAG9ZVZAfwnKYVOz7ZEj0705j_sSeCFWTzzNGBeMI6wuepWBXt8KbfxHDY1yDE9RJ1HM1LbGlFCENHIOXqX6jMK8ByKZFCLB9G6gi5_KKLidyqVBFsvfQCZtyQb2Vqz8rgVp4je079SuoqrKgDjLCCQdcdAUKC-peresXKLHqec5-uJMY6HthugkQZL9fLjxNE3DkLbXXfl7U1M7nkWIbgRfHipy4ExkGN3W4I6uvFcA',
);

// MUI ICONS
import React from 'react';
import DiningIcon from '@mui/icons-material/Dining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HomeIcon from '@mui/icons-material/Home';

const config = {
	// FOOD TYPES
	type: { 1: 'Veg', 2: 'Non-veg', 3: 'Egg', 4: 'Jain', 5: 'Vegan' },
	// ITEMS COUNTS
	ingredient_count: 12,
	recipe_count: 9,
	// DRAWER MENU
	menuList: ['Admin', 'Recipes', 'Ingredients'],
	menuIcons: [<HomeIcon />, <DiningIcon />, <DinnerDiningIcon />],
	// STATUS TABS
	statusTabs: ['0', '1', '2'],
	statusTabLabels: ['Pending', 'Approved', 'Rejected'],
	// HTML Regex
	htmlRegex: /<(.|\n)*?>/,
	// General Text Regex
	generalTextRegex: /^[a-zA-Z0-9 !@#$%^&*()_=*+.->-<,;:|'"]*$/,
};

export default config;
