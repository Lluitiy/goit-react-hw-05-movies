const API_KEY = '407d4e26fe6158c959ba633b835fa721';
const API_URL = 'https://api.themoviedb.org';

export const movieApi = () => {
	return fetch(
		`${API_URL}/3/movie/top_rated?api_key=${API_KEY}&page=1&per_page=18`
	).then(r => r.json());
};
