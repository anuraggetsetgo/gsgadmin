localStorage.setItem(
	'user_token',
	localStorage.getItem('user_token') ||
		'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiOTdjOWFiZGUtYzRjNC00NDcwLWE0ZmItYjgyYjZkNzVlYTI1Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImJmYWMxZjlhLTExMjYtNDdiMy04ZmE2LTBjOTk3OTY2Y2Y2ZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ3MjM0MjU4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0ODEyNTg1OCwiaWF0IjoxNjQ4MDM5NDU4LCJqdGkiOiJlZDAwMTE0Ni01NjJmLTQ2NzMtYjZjNy03OGYyNzM2MWU3NTQifQ.KDOJTEjIM3ve1IfDqRmN0ldJnM6vu2VTVus7mPTPgkUA8p7ng8k9RQ2MfqvnjGvaWklxvsMjEZEv-kPpKQiI4L_DjAOWRUF5Vfw48sx6zz5LZfK2WEOZcAtuEKMGbNoTg1RUoWtaW65F-L3xSSQJzDu56_phs8vATwLyfqKPLTREzARJX9RLvpk_3teVGkiqY5_y3BIo6eoa6XLtbqEAshUZP7FAJYtpZizETB4dO7jZw9RxY9wTrM8p509SLXACNMN6SeoGsPUG9hG9ziaJNG6ltAuilz5e7cgjRvNuzizA_w99QX9D5Gk9n__07dOM-6m-dr1ZUamR-el3Aez8ng',
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
	// default Timeout Error Message
	defaultTimeoutErrorMessage: `It took too long to respond. Please try again!`,
	// Placeholder Image
	placeholderImage: 'http://generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
};

export default config;
