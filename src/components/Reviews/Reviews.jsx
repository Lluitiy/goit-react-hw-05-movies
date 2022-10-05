import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiRreviews } from 'components/Api/Api';
import {
	Section,
	Container,
	ReviewList,
	ReviewItem,
	ReviewImg,
	ReviewAuthor,
	ReviewArticle,
	Message,
} from './Reviews.styled';

export const Reviews = () => {
	const { movieId } = useParams();

	const [reviews, setReviews] = useState(null);

	useEffect(() => {
		movieApiRreviews(movieId)
			.then(({ results }) => setReviews(results))
			.catch(error => console.log(error));
	}, [movieId]);

	return (
		<>
			{reviews?.length ? (
				<Section>
					<Container>
						<ReviewList>
							{reviews.map(
								({ id, author_details: { avatar_path }, author, content }) => {
									const ImgSrc = avatar_path
										? `${avatar_path.slice(1, -1)}`
										: `https://via.placeholder.com/395x574`;
									return (
										<ReviewItem key={id}>
											<ReviewImg src={ImgSrc} alt={author} />
											<ReviewAuthor>Author: {author}</ReviewAuthor>
											<ReviewArticle>{content}</ReviewArticle>
										</ReviewItem>
									);
								}
							)}
						</ReviewList>
					</Container>
				</Section>
			) : (
				<Container>
					<Message>Unfortunately there are no rewiews yet</Message>
				</Container>
			)}
		</>
	);
};
