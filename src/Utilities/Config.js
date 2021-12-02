localStorage.setItem(
	'authorization',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMzliZTNmNGMtMzkwMi00Yzc0LWFlMjAtZjRhODNkN2Q5ZTUzIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImRlNGFhNzAxLTEzYzMtNDFhNi05Y2NlLTM3MzQzY2I0ODI3ZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3MTU5MDQ2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTYzODQyNDg2MiwiaWF0IjoxNjM4MzM4NDYyLCJqdGkiOiJmNmI1NTM0My00OGJiLTQ1MTEtOTBkZS1jMDFhZmY4Zjc5NjIifQ.opJ9sxG4R__sjEJjakSzt_qNaV5z45l0K3yYFouk_QfK9f51w42aBBSIKluJc1AM78ktEaurncEZVb7vFoRmM_ocF_OFnvX6zQqE9kNclbpEma6h9xCpludEpkHhOiWJoYRqzBQ_7IyDVwRlbD3cTlzEBdq4Qr1YetfRXJZznIQnLx6FiBTJN385_bSbotKrEvFrkMvOeLhhs_Z4F9I_jXcjzXtbEcngNLl1REhfSXG_Bh2Q6xLRgBVvtUnoZvqLp-qWcaKEQ8aOH7GqBN2_gwIyPHwCPbJA_7wWm2LkOb1od421KtNs_od6ZmuzUqMFywcpDnb4rMpxAOfCpjBC2w',
);

const localAuthorization = localStorage.getItem('authorization');
// const urlParams = new URLSearchParams(window.location.search);
// const authParam = urlParams.get('auth');
const authorization = localAuthorization;
// console.log(authorization, localAuthorization, authParam);

// const authorization = localStorage.getItem('authorization');
// console.log(authorization, 'CONFIG AUTH');
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
	redirectURL: 'http://localhost:3001/',
	viewList: ['recipe', 'ingredient'],
};

export default config;
