localStorage.setItem(
	'authorization',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiYTgwZTlmMjAtM2Q1Yi00ODU1LWIwNDMtNWRkNDE2OWQyY2Q3Iiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImQzOWU4NmEyLTgxZjEtNGM0NC1iZDZkLWZhZTA5YzhlY2Q4OSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3MDcwMDIxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTYzNzE1NjQyMSwiaWF0IjoxNjM3MDcwMDIxLCJqdGkiOiIxODQ3Y2JmNy1hYTNiLTRkZDYtOTg5Ni0zZGMyOGQ4MDRkNTEifQ.e7XC2uaZbHalI5Qhfk-9cKSkWd83fgdtInS7aZmhBnquUvP5EH1sBptsb6e6fzsnvTphoumIq6DFsC48Isurq5b0iLeNAWjC8fHm5ioDAwsOGxrtdEh-DEbt8_17LmempJGkwlIW-lxhx4HhSAPcucVcn3qUXRhtgcrOLFbT7kbKBT3u01rxCAXWHI5xwFKOjgQpZuuTwzcNyOb6sgHmzbyBbdawBSInD1kvMCvVFXbmy3YsHH9_75tX-doQXjYZqbwlqlGSY8dgEV5teV83Xg5H5YihlBRNPYW9xuK34fmbbDGav_JEv_UAN9rhGhsNg84avzdByHAAYnc3jca9bA',
);

const authorization = localStorage.getItem('authorization');

const config = {
	cuisines: [
		'United State',
		'Mexican',
		'Thai',
		'Greece',
		'Indian',
		'Japanese',
		'Spanish',
		'French',
		'Chinese',
		'Italian',
		'Labanese',
	],
	type: { 1: 'Veg', 2: 'Non-veg', 3: 'Egg', 4: 'Jain', 5: 'Vegan' },
	servings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	units: ['Serving', 'Portion', 'Piece', 'gm', 'ml'],
	folderName: 'webcontent/img/recipe-images',
	authorization: authorization,
	ingredient_count: 5,
	recipe_count: 9,
	stepMaxLength: 200,
	redirectURL: 'http://localhost:3001/',
};

export default config;
