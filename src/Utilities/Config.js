localStorage.setItem(
	'authorization',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiZGZjYzg2YTMtMjcxNy00MDFjLWFjNTgtZTQ4MGUxNmMyMTZhIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6IjA1YjFjMTRlLTlmMmEtNDg2NS1iOWFjLTk2ZDE1Y2M3MTllNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ0ODEzMDE3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTY0NDg5OTQxNywiaWF0IjoxNjQ0ODEzMDE3LCJqdGkiOiJiYjg3ZTdjOC04MzAxLTQ5YmYtYmI4MC00Mjg0ZTIwNzQxNDMifQ.AezRZ-C1qq2Pk9EVi6p3VpX495xvpjsvwKdS4QnxcAI2s8xATeykXL52h7S60toV9-V3znTY8TCsDpr0h6BBQf_vbZpWkkYAnd9jBJFtAYd4tOPB1huHW2VmJ14CpL11ZcdqLz1KSrv17PAW_jTvvLB_JVhPjg1lvecRhYoY79sREV_QXzy0l16CPzfBCStyc8DzHaZQv39M6joLIZqryG_ryW7KLxgJyWSNB5VhLQUcZm-vPCpQSviGv8T0qE71LU-j49gUXQH0INcP-5UtTAVqe6t7S_uSJ4uNteKP8fBxkhgpl6zhMp5ErdWIqmGyEShfzRaIi0wnwLyyd6u3uA',
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
	redirectURL: 'http://localhost:3000/',
	viewList: ['recipe', 'ingredient'],
};

export default config;
