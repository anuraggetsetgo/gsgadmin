localStorage.setItem(
	'user_token',
	localStorage.getItem('user_token') ||
		'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiOTdjOWFiZGUtYzRjNC00NDcwLWE0ZmItYjgyYjZkNzVlYTI1Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImJmYWMxZjlhLTExMjYtNDdiMy04ZmE2LTBjOTk3OTY2Y2Y2ZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ3MjM0MjU4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0ODAzOTM2MCwiaWF0IjoxNjQ3OTUyOTYwLCJqdGkiOiJlZWMzZGFmZi0xNGRjLTQwOTYtYmQzZS1hMzZkOTNhNmI1OWIifQ.P8AU3seYGF6p8IA5gMN4xFZPdhbyU4jLql7GNLFpM3JqxsCoT4YQszPl8tb-UQ1HhtSo6_iIrdmfHn3TkBTU3Dp3ksUdrKhSp4sufao2XgSUW5w3l8a9qykdxd1M-_lf3KmWRz4jbopFkEg2a7yrRqkkVaC6STjXzQn4Nem-oCHCwEQFevQ4mcnmLOXRfQS47VjSKtzZIH-a-HMlfYcX8O1WbpvhdczDnF3k1B4C548Kbg163TQVjFpSGdJSPkGiS9nIeYqXs88ekB4z3FoOqtBwWM2Z3tRE9ReCqxC0paiULgHmoyu2PI5nAPo1yZm4WVtaqBq6qWyxueTORase3w',
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
	ingredient_count: 9,
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
	// default error message
	defaultErrorMessage: 'Something went wrong. Please try again!',
	// Placeholder Image
	placeholderImage: 'http://generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
};

export default config;
