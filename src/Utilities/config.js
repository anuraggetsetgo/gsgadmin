localStorage.setItem(
	'user_token',
	localStorage.getItem('user_token') ||
		'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiOTdjOWFiZGUtYzRjNC00NDcwLWE0ZmItYjgyYjZkNzVlYTI1Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImJmYWMxZjlhLTExMjYtNDdiMy04ZmE2LTBjOTk3OTY2Y2Y2ZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ3MjM0MjU4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NzQzNzYzOSwiaWF0IjoxNjQ3MzUxMjM5LCJqdGkiOiIxMjU3ZDM1Ny0yYjFhLTQ2MmUtYTcxYi04MTI5MTlhNDNmYWUifQ.GD1FpcmHQz94yciwwUqBaRveRiulw4qbCN4bmwobJZuC7xUDG1u-voOw87tuWlDYxYjHmEFWuTSgN3DyLjCh_LMaKQ6cwTPSfc_c3CraFJPD-m1anywfaEY7Kwbz9zNbbq5ZRPuaKlrgnbyF8-VJA_nTIEXBvTMs7tADerm778Lanh0w2nhzsATEI76Zea5NF9RgrN_PJZKUGcHQcjktZRrJ9R2faMDn8kx3dGyNPtFRz2FtFhQ_4UNy3Kxm-1d-FYOaLQGmj5vIBraAG_F3cx_d01RzKmeI4KW6fYLjoQwnEVLz38lECxPVoy7w1_rCmbo-_h8h07TRbfoXXnqpJA',
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
