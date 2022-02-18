localStorage.setItem(
	'user_token',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiZGZjYzg2YTMtMjcxNy00MDFjLWFjNTgtZTQ4MGUxNmMyMTZhIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjA1YjFjMTRlLTlmMmEtNDg2NS1iOWFjLTk2ZDE1Y2M3MTllNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ0ODEzMDE3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NTI1MTE5NCwiaWF0IjoxNjQ1MTY0Nzk0LCJqdGkiOiI2OGY0NTJiZi1mZDcwLTRhNzQtYWNmYS0wMWNmN2RlOTc3NzcifQ.GGXZLDXM2tY3G2voP7ZVAzMzOqBoXVrcQ6vDMvn0vTG1bkjDKeC5sDxoWHcR9RZaS62Cy9XAPifl1CneOC3j0qFPEZDN7oD2nzMvW6McEm9VeW2FasKMWX6-Tg8RqPqclS36SHpEut33GH92yIn8xoaupp9f55OUIQPCXq6KCvkaifYRkwARAZy91rvCeUCBwewwmZWcmGcC7EGc2A_zFo_kGPWpbtJTCSvkuHYCuwvgJTApslkPIRapoyeGytjK2VbT65y510-3LOWPjHj-mpc2D6obvW9bTWWyB3s0w7SB-8WKlHG9GG16rAcTw3ygdlqEg-fWm8n-wlzjapjKjQ',
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
