import axios from "axios";

const api = axios.create();

api.interceptors.response.use((response) => {
	if (response.status >= 400 || response.status <= 499)
		return {
			...response,
			headers: response.headers,
			data: null,
			statusText: "error",
		};

	return response;
});

export { api };
