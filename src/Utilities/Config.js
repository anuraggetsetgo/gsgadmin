localStorage.setItem(
	'authorization',
	'eyJraWQiOiJ0VUpJSXZoNXkrMmo3RGJjeHpOaXZERDFZZ1RMM2llVGFRUGlsNVlxZys0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiY2IwZDZhMmItZDhmZC00Nzk2LTg1ZTgtODRjYzhhOTcwZWFjIiwic3ViIjoiZDI0MWUxMGYtMGY4Ny00ZmI2LTg5YjAtNjYxY2IwOWI1MWU3IiwiYXVkIjoiMjdjZzNla3U0cDg0bzhuZG9vaWgxOGJqbWgiLCJldmVudF9pZCI6ImQyMmI1ZmI2LTliOTctNDIwOS1iMWQzLTBmZmJhNGQ4YWIyNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM2OTczODMwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX2I2b3hESW5DcCIsImNvZ25pdG86dXNlcm5hbWUiOiIrOTE3ODQ0OTUzNzAwIiwicGhvbmVfbnVtYmVyIjoiKzkxNzg0NDk1MzcwMCIsImV4cCI6MTYzNzA2MDIzMCwiaWF0IjoxNjM2OTczODMwLCJqdGkiOiJkZTNhYTI0ZS04ZWRjLTQ0NGEtYTgxZi01M2M4OTUwZDUxNDEifQ.nd8PAXnYKvA6PpDCN08Hceuch3GrqLnYDeoI0iqin9EwHwE5Wi4Nri06mReTiM9YBtOMHWHDgXLiqIFQFt_wZ-e3M02DA_RX-TAVmpKFUqKBfqHBTLK2xrFLrxDxaRb9bKHptu8J9yzldOdwvy10gtK05_avSsX-685CEf9h3NUnm-Lo6otSd6OFRGHTtNBx_KrG_zua6OaYlnV9rH-i2D8_A1RCeDApnpoJ-Y2XEoxmN9sIUS-B6fcuD010Atdg0X1U8m4nM81kGROaTayIgLlXwj3SPqQLywXJOcs9TJ7pBmT0isS_nu5OpvRy3ujHgAsJXDrYebq4j_85cF577w',
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
	recipe_count: 8,
	stepMaxLength: 200,
	redirectURL: 'http://localhost:3001/',
};

export default config;
