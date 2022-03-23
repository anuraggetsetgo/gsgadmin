import axios from 'axios';
// Authorization Token
const Authorization = localStorage.getItem('user_token');

const key = {
	headers: {
		Authorization: Authorization,
	},
};

function callAPI(url, type, data, successCallback, errorCallback) {
	const interceptor = axios.interceptors.request.use(function (config) {
		if (key) {
			config.headers['Authorization'] = key.headers['Authorization'];
		}
		return config;
	});

	// Default timeout we have set for 5 seconds
	axios.defaults.timeout = 5000;

	switch (type) {
		case 'GET':
			axios
				.get(url, { params: data })
				.then((data) => {
					successCallback(data);
				})
				.catch((err) => {
					handleAPIError(err);
				});
			break;

		case 'POST':
			axios
				.post(url, data)
				.then((data) => {
					successCallback(data);
				})
				.catch((err) => {
					handleAPIError(err);
				});
			break;
		default:
			return;
	}

	// Handle API Error

	const handleAPIError = (error) => {
		// This function currently handles following API errors
		// 1. Token expired-401
		// 2. Timeout - axios timeout
		let errMsg = error.message ? error.message : '';
		let errResponse = error.response ? error.response : {};
		let errorStatus = errResponse.status ? errResponse.status : '';
		if (errMsg.includes('timeout')) {
			alert('It took too long to respond. Please try again!');
		} else if (errorStatus == 401) {
			localStorage.clear();
			alert('Your session is expired now. Please login again!');
		} else {
			errorCallback(error);
		}
	};

	axios.interceptors.request.eject(interceptor); //Cleanup up old config AV
}

export { callAPI };
