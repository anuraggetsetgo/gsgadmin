import Config from '../Utilities/config';
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
		let errMsg = error.message ? error.message : '';
		let errResponse = error.response ? error.response : {};
		let errorStatus = errResponse.status ? errResponse.status : '';

		if (errMsg.includes('timeout')) {
			alert('Request timed out. Please try again!');
		} else if (errorStatus == 401) {
			alert('Your session is expired now. Please login again!');
		} else {
			errorCallback(err);
		}
	};

	axios.interceptors.request.eject(interceptor); //Cleanup up old config AV
}

export { callAPI };
