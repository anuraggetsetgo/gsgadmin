localStorage.setItem(
	'authorization',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiZGZjYzg2YTMtMjcxNy00MDFjLWFjNTgtZTQ4MGUxNmMyMTZhIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjA1YjFjMTRlLTlmMmEtNDg2NS1iOWFjLTk2ZDE1Y2M3MTllNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ0ODEzMDE3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NTA3NzE2NywiaWF0IjoxNjQ0OTkwNzY3LCJqdGkiOiIzY2I5OGZkNS01YjdmLTQ2ODItYmYyOS1jYjdhYmY0M2UwNzQifQ.hI2s2ZZaWe04kQZeRv1GccJNl1eS54EBgXfUgjCGe4F8XFt7wzRtKfikwrnMGyiyLtgT3hZkpnnMuH4hDzXRjy-0jYHDAjhN7WV46sMXViEzIjqRdB0P7vEDM-dQPu1T7yTfX9cu_CtGrnCWqWiDy0aejApk4u0HjhO_9dnNQTP9_PWqnVPuWaA3SYLfeepVr8ExhGTxhJ1GPfwY8aFXe4TPHKS2jaeyfIUDMMFDs1LmeMtdqrltvuenUy2VhiVdtdSvF3VEr_GlHaUhnMuPj2FQ0GLz9mfYwgw9IpSqC7R9jFwrQ0ZLb5ZBqdyAXMd1euBestOKp0UyuB4Q_mPsvw',
);

// MUI ICONS
import React from 'react';
import DiningIcon from '@mui/icons-material/Dining';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import HomeIcon from '@mui/icons-material/Home';

const localAuthorization = localStorage.getItem('authorization');
const authorization = localAuthorization;
const config = {
	// FOOD TYPES
	type: { 1: 'Veg', 2: 'Non-veg', 3: 'Egg', 4: 'Jain', 5: 'Vegan' },
	// S3 IMAGES FOLDER
	folderName: 'webcontent/img/recipe-images',
	// AUTHORIZATION
	authorization: authorization,
	// ITEMS COUNTS
	ingredient_count: 2,
	recipe_count: 9,
	// DRAWER MENU
	menuList: ['home', 'recipe', 'ingredient'],
	menuIcons: [<HomeIcon />, <DiningIcon />, <FoodBankIcon />],
	// STATUS TABS
	statusTabs: ['0', '1', '2'],
	statusTabLabels: ['Pending', 'Approved', 'Rejected'],
};

export default config;
