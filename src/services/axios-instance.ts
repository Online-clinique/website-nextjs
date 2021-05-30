import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://online-api.game-linter.com/api',
	headers: {
		accept: 'application/json',
	},
	withCredentials: true,
});
