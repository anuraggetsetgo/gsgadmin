localStorage.setItem(
	'authorization','eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMzliZTNmNGMtMzkwMi00Yzc0LWFlMjAtZjRhODNkN2Q5ZTUzIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImRlNGFhNzAxLTEzYzMtNDFhNi05Y2NlLTM3MzQzY2I0ODI3ZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3MTU5MDQ2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTYzNzk5MzYwMCwiaWF0IjoxNjM3OTA3MjAwLCJqdGkiOiIzNDg2NTAyNy1lOTM1LTQzZGMtOWIzNC0yN2Q0YTRjMGUzZjAifQ.IvpnHutftN6pDYTY-jpkyhu4jD3woBJWoy8d-ejwUxyzDTuiAAJBI4gjhJyaNrgbNuEjiyR-66mZ-xrw3sm9ELsO_qSJAxLySWXpDKVhEKzxct5lSmHcQX-d3me4g1c1GbBjE4yrULYPQTmX0IpH-LGBIa_VJRaHa-RygxjSrgTehh83qRTpPFeie-Y6gnq8DM_VN2OMj9uP_ZYE9-WFwJC1uY0sg_VN2Z5zFm_LKXwNylDo9YZ64CmmWp9YqlO_O9PLsFDz0wcbMrJVuEcIkjPCwWtUOnFCwnhlJV5F9Xjuv82tD8LlP0bQMPUX4aQ9TiuiR2CXbzkPAM9JjfH5ZQ')
const authorization = localStorage.getItem('authorization');
console.log(authorization, 'CONFIG AUTH');
const config = {
	// cuisines: [
	// 	'United State',
	// 	'Mexican',
	// 	'Thai',
	// 	'Greece',
	// 	'Indian',
	// 	'Japanese',
	// 	'Spanish',
	// 	'French',
	// 	'Chinese',
	// 	'Italian',
	// 	'Labanese',
	// ],
	type: { 1: 'Veg', 2: 'Non-veg', 3: 'Egg', 4: 'Jain', 5: 'Vegan' },
	// servings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	// units: ['Serving', 'Portion', 'Piece', 'gm', 'ml'],
	folderName: 'webcontent/img/recipe-images',
	authorization: authorization,
	ingredient_count: 12,
	recipe_count: 9,

	// stepMaxLength: 200,
	redirectURL: 'http://localhost:3000/',
	viewList: ['recipe', 'ingredient'],
};

export default config;
