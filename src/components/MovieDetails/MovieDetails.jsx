import { movieApiById, IMG_PATH } from 'components/Api/Api';
import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
	GenreWrapper,
	GenreList,
	GenreItem,
	Genre,
	ReviewList,
	ReviewItem,
	Navigation,
	ReviewText,
} from './MovieDetails.styled';

export const MovieDetails = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	useEffect(() => {
		movieApiById(movieId).then(r => {
			setMovie(r);
		});
	}, [movieId]);

	return (
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
									<MovieScore>
										User Score: {movie.vote_average.toFixed(2)}%
									</MovieScore>
									<MovieOverview>Overview</MovieOverview>
									<MovieReview>{movie.overview}</MovieReview>
									<MovieGenre>Genres</MovieGenre>
									<GenreWrapper>
										{movie.genres.map(genre => {
											return (
												<GenreList>
													<GenreItem>
														<Genre>{genre.name}</Genre>
													</GenreItem>
												</GenreList>
											);
										})}
									</GenreWrapper>
									<ReviewList>
										<ReviewItem>
											<Navigation to={'cast'}>
												<ReviewText>Cast</ReviewText>
											</Navigation>
										</ReviewItem>
										<ReviewItem>
											<Navigation to={'reviews'}>
												<ReviewText>Reviews</ReviewText>
											</Navigation>
										</ReviewItem>
									</ReviewList>
								</MetaWrapper>
							</Wrapper>
						</Container>
					</Section>
					<Outlet />
				</>
			)}
		</>
	);
};
