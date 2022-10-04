import styled from '@emotion/styled';

export const MovieList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 32px;
`;

export const MovieItem = styled.li`
	display: block;
	width: 300px;
	height: 300px;
`;
export const MovieImg = styled.img`
	display: block;
	width: 100%;
	height: 100%;

	transition: 250ms transform ease-in-out, 250ms filter ease-in-out;

	:hover {
		transform: scale(1.05);
		filter: brightness(115%);
	}
`;
export const Section = styled.section`
	padding-bottom: 30px;
`;
