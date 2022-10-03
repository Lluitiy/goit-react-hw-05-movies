import { movieApi } from 'components/Api/Api';

export const Movies = () => {
	movieApi().then(r => {
		const movieName = r.original_title;
		console.log(r);
		return movieName;
	});
	return <ul>{}</ul>;
};
