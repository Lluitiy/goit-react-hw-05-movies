import { movieApiById, IMG_PATH } from 'components/Api/Api';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import {
	Section,
	Container,
	Wrapper,
	MovieImg,
	MetaWrapper,
	MovieHead,
	MovieScore,
	MovieOverview,
	MovieReview,
	MovieGenre,
	GenreList,
	GenreItem,
	Genre,
	ReviewList,
	ReviewItem,
	Navigation,
	ReviewText,
	GoBackBtn,
	GoBackIcon,
} from './MovieDetails.styled';
import { Spinner } from 'components/Spinner/Spinner';

export const MovieDetails = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	// const [error, setError] = useState(null);

	const location = useLocation();
	const backRoute = location.state?.from ?? '/movies';
	useEffect(() => {
		movieApiById(movieId)
			.then(r => {
				// if (!r.ok) {
				// 	throw new Error('qwerqwer');
				// }
				setMovie(r);
			})
			.catch(error => console.log(error));
	}, [movieId]);
	// console.log('error', error);
	return (
		// movie ? render : error ? <div>Error</div> : null
		<>
			{movie && (
				<>
					<Section>
						<Container>
							<Wrapper>
								<MovieImg
									src={`${IMG_PATH}${movie.poster_path}`}
									alt={movie.title}
								/>
								<MetaWrapper>
									<MovieHead>{movie.title}</MovieHead>
									<MovieScore>User Score: {movie.vote_average}%</MovieScore>
									<MovieOverview>Overview</MovieOverview>
									<MovieReview>{movie.overview}</MovieReview>
									<MovieGenre>Genres</MovieGenre>
									<GenreList>
										{movie.genres.map(({ name }) => {
											return (
												<GenreItem key={name}>
													<Genre>{name}</Genre>
												</GenreItem>
											);
										})}
									</GenreList>
									<ReviewList>
										<ReviewItem>
											<Navigation
												to={'cast'}
												state={{ from: location.state?.from }}
											>
												<ReviewText>Cast</ReviewText>
											</Navigation>
										</ReviewItem>
										<ReviewItem>
											<Navigation
												to={'reviews'}
												state={{ from: location.state?.from }}
											>
												<ReviewText>Reviews</ReviewText>
											</Navigation>
										</ReviewItem>
										<ReviewItem>
											<GoBackBtn to={backRoute}>
												<ReviewText>
													Go Back <GoBackIcon />
												</ReviewText>
											</GoBackBtn>
										</ReviewItem>
									</ReviewList>
								</MetaWrapper>
							</Wrapper>
						</Container>
					</Section>
					<Suspense fallback={<Spinner />}>
						<Outlet />
					</Suspense>
				</>
			)}
		</>
	);
};
