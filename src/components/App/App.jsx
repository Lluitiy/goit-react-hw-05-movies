import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/layout/Layout';
import { Home } from 'components/pages/Home/Home';
import { Cast } from 'components/Cast/Cast';
import { Movies } from 'components/pages/Movies/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="home" element={<Home />} />
					<Route path="movies" element={<Movies />} />
				</Route>
				{/* <Outlet /> */}
				<Route>
					<Route path="/movies/:movieId" element={<MovieDetails />} />
					<Route path="/cast" element={<Cast />} />
					<Route path="/reviews" element={<Reviews />} />
				</Route>

				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</>
	);
};
