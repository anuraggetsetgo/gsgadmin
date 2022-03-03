localStorage.setItem(
	'user_token',
	localStorage.getItem('user_token') ||
		'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiY2M3MGMxODQtMzI1Mi00OWIwLThiYzItMzIxYjU4M2E1ZjU2Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjZkMzQ1NjJjLWMxZTEtNGQ1OS04ZTJhLTMwOGMzMjFjZjYzNSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ1NjE5MTE5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NjM4NTMyNCwiaWF0IjoxNjQ2Mjk4OTI0LCJqdGkiOiIwMDFhM2ExZi1mZWYxLTQwY2EtOTIzZC0zOWI5Y2VkNzdmOWMifQ.D4SWjSLNbqTJixxAjCngpjk272RbFWABEE1iklCG0mYEdeac4wo3awXxWwQNOYiEDlbeU0McRbR8mifz6LDXvsU7cp--7fKgUaXcJpOiTNirWKVLP9li2KOikPOeYoGh0FXbjU67vGCY69QPasw9SFihxzs_MjhLKbbiSvfDfdaE3m9tw9gki_rc6iaJI3sOS_puIw_8wj1E2bLXJ5-Uza6V2zdsiWH3NbMtzkUAVo6yVzCrrr6dSodyIW77St1HxFqEtvhU1vejJrFBymTF8VDJnFQu_kZTdtPT-P3K3eM0CTGEs4CAy-S0IpHANw2NXfB-n4s5Iv1XboqhCWt4Xg',
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
	generalTextRegex: /^[a-zA-Z0-9 !@#$%^&*()_=*-+.><,;:|'"]*$/,
};

export default config;
