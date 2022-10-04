import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { movieApiQuery, IMG_PATH } from 'components/Api/Api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { Spinner } from 'components/Spinner/Spinner';
import {
	Main,
	Section,
	Container,
	Form,
	Label,
	Button,
	SearchIcon,
	MovieList,
	MovieItem,
	MovieImg,
} from './Movies.styled';

export const Movies = () => {
	const [searchQuery, setSearchQuery] = useState(null);
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [spinner, setSpinner] = useState(false);
	const location = useLocation();
	const handleSearchQuery = query => {
		setSearchQuery(query !== '' ? { query } : {});
	};

	const handleFormSubmit = e => {
		e.preventDefault();
		setSearchParams(searchQuery);
		e.target.reset();
	};

	const query = searchParams.get('query');

	useEffect(() => {
		if (!query) {
			return;
		}

		setSpinner(true);
		movieApiQuery(query)
			.then(r => setMovies(r.results))
			.catch(error => console.log(error))
			.finally(setSpinner(false));
	}, [query]);

	return (
		<Main>
			<Section>
				{spinner && <Spinner />}
				<Container>
					<Form onSubmit={handleFormSubmit}>
						<Label htmlFor="searchQuery">
							<SearchBox onChange={handleSearchQuery} />
						</Label>
						<Button type="submit">
							<SearchIcon />
						</Button>
					</Form>
				</Container>
			</Section>

			<Section>
				<Container>
					<MovieList>
						{movies?.length ? (
							movies.map(({ id, poster_path, title }) => {
								const ImgSrc = { poster_path }
									? `${IMG_PATH}${poster_path}`
									: `https://via.placeholder.com/395x574`;
								return (
									<MovieItem key={id}>
										<Link to={`/movies/${id}`} state={{ from: location }}>
											<MovieImg src={ImgSrc} alt={title} />
										</Link>
									</MovieItem>
								);
							})
						) : (
							<div>
								<h2>Please enter the search query</h2>
							</div>
						)}
					</MovieList>
				</Container>
			</Section>
			<Suspense fallback={<Spinner />}>
				<Outlet />
			</Suspense>
		</Main>
	);
};
