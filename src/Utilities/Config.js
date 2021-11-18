localStorage.setItem(
	'authorization',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMzliZTNmNGMtMzkwMi00Yzc0LWFlMjAtZjRhODNkN2Q5ZTUzIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImRlNGFhNzAxLTEzYzMtNDFhNi05Y2NlLTM3MzQzY2I0ODI3ZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3MTU5MDQ2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTYzNzI0NTQ0NiwiaWF0IjoxNjM3MTU5MDQ2LCJqdGkiOiI4ZDU4ZTI5Ni05MTk1LTQ0NmItOGIzNy1kMDRkZjJhOTA2NzgifQ.j_7b8cdSXM0dnhSvfOtZMkjJMQjk9BGi1uaZot5iFmdZNOl0q2UtMc0AzI6XbL-ialQEY7C5AFEquBUoRoGeHeycU52NRgYwInMYt6VlTmkATsT0rEGfpENxQPp6PHsoJGuFWM83eFCVJcYFhSS4ncQ67-H6XXHArBJEQfTGc9N8BhWbdHtYDagMFDOUFgaolgstcJPXt8ZD9n2wldPVHYP4TMdbD95r8aICo0aV3O6J1C3OU3Jw0uLVAHsevSiZRCtvGasqfvcveIVfRxOyvSN9RE8JsvYaE4ocOd6ccgKWzsx1vrqlqz5KIvPLag1W2Q2Po_3SbidWrAOJo7kH3Q',
);

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
	ingredient_count: 9,
	recipe_count: 9,

	// stepMaxLength: 200,
	redirectURL: 'http://localhost:3001/',
	viewList: ['recipe', 'ingredient'],
};

export default config;
