import styled from '@emotion/styled';

export const Heading = styled.h1`
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 30px;
	color: rgb(255, 165, 0);
`;

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
	width: 250px;
	height: 350px;
`;
export const MovieImg = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 4px;

	transition: 250ms transform ease-in-out, 250ms filter ease-in-out;

	:hover {
		transform: scale(1.05);
		filter: brightness(115%);
	}
`;
export const Section = styled.section`
	padding: 30px;
`;
