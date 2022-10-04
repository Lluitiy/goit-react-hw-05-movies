import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiCast, IMG_PATH } from 'components/Api/Api';
import {
	Section,
	Container,
	ActorsList,
	ActorsItem,
	ActorsImg,
	ActorsMeta,
	ActorsInfo,
} from './Cast.styled';

export const Cast = () => {
	const { movieId } = useParams();
	const [actors, setActors] = useState(null);
	useEffect(() => {
		movieApiCast(movieId).then(({ cast }) => setActors(cast.splice(0, 6)));
	}, [movieId]);

	return (
		<Section>
			{actors?.length ? (
				<Container>
					<ActorsList>
						{actors.map(({ id, profile_path, original_name, character }) => (
							<ActorsItem key={id}>
								<ActorsImg
									src={`${IMG_PATH}${profile_path}`}
									alt={original_name}
								/>
								<ActorsMeta>
									<ActorsInfo>{original_name}</ActorsInfo>
									<ActorsInfo>Role : {character}</ActorsInfo>
								</ActorsMeta>
							</ActorsItem>
						))}
					</ActorsList>
				</Container>
			) : (
				<h1>Unfortunately there is no actors data available for this movie</h1>
			)}
		</Section>
	);
};
