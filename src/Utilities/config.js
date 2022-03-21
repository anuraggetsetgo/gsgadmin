localStorage.setItem(
	'user_token',
	localStorage.getItem('user_token') ||
		'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiOTdjOWFiZGUtYzRjNC00NDcwLWE0ZmItYjgyYjZkNzVlYTI1Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImJmYWMxZjlhLTExMjYtNDdiMy04ZmE2LTBjOTk3OTY2Y2Y2ZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ3MjM0MjU4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0Nzk1MjkzMCwiaWF0IjoxNjQ3ODY2NTMwLCJqdGkiOiIzYTU0Y2YxNi1hYWMxLTQ3ZjMtODY3OC01MWJjZjE2ZGU1M2EifQ.MTikgLhvSJVGJ0y02BTG5fcZPX_XzktfwrVJ790QRBy_oRcDeBsBvNqUTPpNpnLzS5dZ9wwcNbcL0JQrd_M5vyx0ljay3PDYukIf1hIbsLUNh2FcuZFBJyga-M13JkOS4CrjOIwsXyD6hCrPmZUBxK6rZsviOnbXJK7iW29Ur-uRdvqRKOJqKDjOf2pMU3N9Y2Fb6OdvGMBpEUCpDOmu_C5jKlDAgOEvrqUseHNEdJp0cIEGzAFReyivpPC9Xunjz0XkMzj4AMoCULUwVayFnluOD32Lr7kLxAh66m3ZAHkvN90O1lW39-gU2Y2TkglazyPogiIXVYk-PUadn7Gg6g',
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
	// default error message
	defaultErrorMessage: 'Something went wrong. Please try again!',
};

export default config;
