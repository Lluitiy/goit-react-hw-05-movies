import { useState, useEffect } from 'react';
import { movieApiTrend, IMG_PATH } from 'components/Api/Api';
import { Link, Outlet } from 'react-router-dom';
import { Section, MovieList, MovieItem, MovieImg } from './Home.styled';

export const Home = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		movieApiTrend().then(r => setMovie(r.results));
	}, []);

	return (
		<Section>
			<MovieList>
				{movie.map(({ poster_path, title, id }) => (
					<MovieItem key={poster_path}>
						<Link to={`/movies/${id}`}>
							<MovieImg src={`${IMG_PATH}${poster_path}`} alt={title} />
						</Link>
					</MovieItem>
				))}
				<Outlet />
			</MovieList>
		</Section>
	);
};
