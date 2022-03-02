localStorage.setItem(
	'user_token',
	localStorage.getItem('user_token') ||
		'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiY2M3MGMxODQtMzI1Mi00OWIwLThiYzItMzIxYjU4M2E1ZjU2Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjZkMzQ1NjJjLWMxZTEtNGQ1OS04ZTJhLTMwOGMzMjFjZjYzNSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ1NjE5MTE5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NjI5MTk2OSwiaWF0IjoxNjQ2MjA1NTY5LCJqdGkiOiJkODhjMDM2Yy1jODllLTQwNDItOTc1NC1iNTZjYWQxMjUxYjkifQ.njub6LgflM4beCdzW-06k2yhojV5AJgOYHTSBGrsMG05rFFXMOYHXeAVb9JquLjafU0F30-aegM-LgeVINSLF5cqdU8MRNdRD12GPemIF0M6dW5Pa6_cIlhi1THPaZGNF-MuLEhUERInKSsL3JBwGOrhNvRRJZ2Tv5-spkX2R4tSkTPQyizkKaLgQF1pCU2w3Do_wVn7dvpNApfKbWHFV93C6AkdecDaUC8y0jw07KQXqJhcADCPCy7JqVy7toC4NcEcbMneos4KGL1Pm069DmyJZE8iZ01zqRgWl0-sEn8_npyixrlKRLNurXxDvx-SL51ryu1wHAy-0X340hot2A',
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
