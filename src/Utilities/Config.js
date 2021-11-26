localStorage.setItem(
	'authorization','eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMzliZTNmNGMtMzkwMi00Yzc0LWFlMjAtZjRhODNkN2Q5ZTUzIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImRlNGFhNzAxLTEzYzMtNDFhNi05Y2NlLTM3MzQzY2I0ODI3ZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3MTU5MDQ2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTYzNzkwNjQxMiwiaWF0IjoxNjM3ODIwMDEyLCJqdGkiOiIwNDBhZmYxNi0yNThhLTRiNmUtYjFjYS00NmQ0NDI2ODQxYjYifQ.aFxr5LrJLyqDU-C1O6GfUYv3Uye7zas4J6Hw-yEGYfejFl3P_yel7JXFMY-IVJ9doREqN1Nh16qs8IX8HdJ7yTGdNfM9q3pfIZ56kZkm7WWqxaW-KCckb4LpBdXhPsqvv8DrCKQHUZISMkeg1_aA3zxbD71hmDRTb3kezIsbbqzYyBeiongPtGViXPytQVWyid8B_HVZ9fH1cKQ6CVjhNB7czrlTVGqEKBRIJK_ipyJ4i86tZLjr5SlVw1Ne3Fzn8C9zx43fQBvsY_ZYyPZ1kRwwujhn2OF5TbCLL_g34zElcFgGSxvMQRZdBwdI0lZWPY6DuouwnXyT70IMaCW4jw');
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
