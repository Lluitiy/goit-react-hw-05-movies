import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Layout } from 'components/layout/Layout';
import { Home } from 'components/pages/Home/Home';
import { Spinner } from 'components/Spinner/Spinner';

const Movies = lazy(() =>
	import('../pages/Movies/Movies').then(module => ({
		...module,
		default: module.Movies,
	}))
);
const MovieDetails = lazy(() =>
	import('../MovieDetails/MovieDetails').then(module => ({
		...module,
		default: module.MovieDetails,
	}))
);
const Cast = lazy(() =>
	import('../Cast/Cast').then(module => ({
		...module,
		default: module.Cast,
	}))
);
const Reviews = lazy(() =>
	import('../Reviews/Reviews').then(module => ({
		...module,
		default: module.Reviews,
	}))
);
export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to="home" />} />
					<Route path="home" element={<Home />} />
					<Route
						path="movies"
						element={
							<Suspense fallback={<Spinner />}>
								<Outlet />
							</Suspense>
						}
					>
						<Route index element={<Movies />} />
						<Route path=":movieId" element={<MovieDetails />}>
							<Route path="cast" element={<Cast />} />
							<Route path="reviews" element={<Reviews />} />
						</Route>
					</Route>
				</Route>
				<Route
					path="*"
					element={<div>An Error Occured restart the page please</div>}
				/>
			</Routes>
		</>
	);
};
