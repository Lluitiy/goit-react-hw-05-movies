import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { movieApiQuery, IMG_PATH } from 'components/Api/Api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { Spinner } from 'components/Spinner/Spinner';
import 'react-toastify/dist/ReactToastify.css';
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
	Message,
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
			.then(r => {
				setMovies(r.results);
			})
			.catch(error => console.log(error))
			.finally(setSpinner(false));
		setTimeout(() => {
			setTimeout(() => {
				if (movies.length === 0) {
					toast('Please enter valid Movie Name !');
				}
			}, 1000);
		}, 2000);

		// eslint-disable-next-line
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
							<Message>Please enter the search query</Message>
						)}
					</MovieList>
				</Container>
			</Section>
			<ToastContainer />
		</Main>
	);
};
