const axios = require('axios');
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodoAPI = async (data) => {
	try {
		const response = await axios.get(`${API_URL}/${data.id}`);
		return response.data;
	} catch (err) {
		throw new Error(err);
	}
};

export const addTodoAPI = async (data) => {
	try {
		const response = await axios.post(API_URL, data);
		return response.data;
	} catch (err) {
		throw new Error(err);
	}
};
