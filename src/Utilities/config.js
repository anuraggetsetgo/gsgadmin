localStorage.setItem(
	'user_token',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiZGZjYzg2YTMtMjcxNy00MDFjLWFjNTgtZTQ4MGUxNmMyMTZhIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjA1YjFjMTRlLTlmMmEtNDg2NS1iOWFjLTk2ZDE1Y2M3MTllNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ0ODEzMDE3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NTE2NDM2NSwiaWF0IjoxNjQ1MDc3OTY1LCJqdGkiOiIzNjJiMzY0NC1mNGJiLTQwMWMtODAxMC03NmQxYjNjMWU2ZWIifQ.IsWMVWSFmLX5HySITctLXyUbqEqGDXW-N_tL3M12SjZrHFivida1A2fN__6a84ilrVvtybu-4dE_d9YXwRMvad7LHKRnGbx3xu8HQs2lNryibsMmKekde98C0H9-VAN04LJ8qnEOiEkS6WLukavfa7Oz_d2lV6dfFbLukRwAD3jDo98ht5rN0YFTYGUaSFtWh0O14V0IicRgwZcSfUEaUV8kOmV_CVMa-F1ix61yv8sauFIFVFQUjN1lFQaqmMtYbI8e9hca48g77IgbDyIETV5NPsM1_Xf-Uk2yjnEC_o2-8n83aEdUWgVfkM-1ZBOo9dK26e0dXsD1BqE3Go8jsA',
);

// MUI ICONS
import React from 'react';
import DiningIcon from '@mui/icons-material/Dining';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import HomeIcon from '@mui/icons-material/Home';

// const localAuthorization = localStorage.getItem('authorization');
// const authorization = localAuthorization;
const config = {
	// FOOD TYPES
	type: { 1: 'Veg', 2: 'Non-veg', 3: 'Egg', 4: 'Jain', 5: 'Vegan' },
	// S3 IMAGES FOLDER
	folderName: 'webcontent/img/recipe-images',
	// ITEMS COUNTS
	ingredient_count: 6,
	recipe_count: 9,
	// DRAWER MENU
	menuList: ['home', 'recipe', 'ingredient'],
	menuIcons: [<HomeIcon />, <DiningIcon />, <FoodBankIcon />],
	// STATUS TABS
	statusTabs: ['0', '1', '2'],
	statusTabLabels: ['Pending', 'Approved', 'Rejected'],
};

export default config;
