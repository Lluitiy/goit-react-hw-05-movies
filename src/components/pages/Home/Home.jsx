import { useState, useEffect, Suspense } from 'react';
import { movieApiTrend, IMG_PATH } from 'components/Api/Api';
import { Link, Outlet, useLocation } from 'react-router-dom';
// import { Spinner } from 'components/Spinner/Spinner';
import { Section, MovieList, MovieItem, MovieImg } from './Home.styled';

export const Home = () => {
	const [movie, setMovie] = useState([]);
	// const [spinner, setSpinner] = useState(false);
	const location = useLocation();
	useEffect(() => {
		// setSpinner(true);
		movieApiTrend()
			.then(r => setMovie(r.results))
			.catch(error => console.log(error));
		// .finally(setSpinner(false));
	}, []);

	return (
		<Section>
			{/* {spinner && <Spinner />} */}
			<MovieList>
				{movie.map(({ poster_path, title, id }) => (
					<MovieItem key={poster_path}>
						<Link to={`/movies/${id}`} state={{ from: location }}>
							<MovieImg src={`${IMG_PATH}${poster_path}`} alt={title} />
						</Link>
					</MovieItem>
				))}
				<Suspense fallback={null}>
					<Outlet />
				</Suspense>
			</MovieList>
		</Section>
	);
};
