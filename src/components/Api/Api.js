const API_KEY = '407d4e26fe6158c959ba633b835fa721';
const API_URL = 'https://api.themoviedb.org';
export const IMG_PATH = `https://image.tmdb.org/t/p/w500/`;

export const movieApiTrend = () => {
	return fetch(
		`${API_URL}/3/trending/movie/week?api_key=${API_KEY}&page=1`
	).then(r => r.json());
};

export const movieApiById = id => {
	return fetch(`${API_URL}/3/movie/${id}?api_key=${API_KEY}&page=1`).then(r =>
		r.json()
	);
};

export const movieApiRreviews = id => {
	return fetch(
		`${API_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&page=1`
	).then(r => r.json());
};

export const movieApiCast = id => {
	return fetch(
		`${API_URL}/3/movie/${id}/credits?api_key=${API_KEY}&page=1`
	).then(r => r.json());
};
