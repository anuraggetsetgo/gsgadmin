import Config from '../Utilities/config';
import axios from 'axios';

const key = {
	headers: {
		Authorization: Config.authorization,
	},
};

function callAPI(url, type, data, success, error) {
	const interceptor = axios.interceptors.request.use(function (config) {
		if (key) {
			config.headers['Authorization'] = key.headers['Authorization'];
		}
		return config;
	});

	axios.defaults.timeout = 5000;

	switch (type) {
		case 'GET':
			axios
				.get(url, { params: data })
				.then((data) => {
					success(data);
				})
				.catch((err) => {
					error(err);
				});
			break;

		case 'POST':
			axios
				.post(url, data)
				.then((data) => {
					success(data);
				})
				.catch((err) => {
					error(err);
				});
			break;
		default:
			return;
	}
	axios.interceptors.request.eject(interceptor); //Cleanup up old config AV
}

export { callAPI };
