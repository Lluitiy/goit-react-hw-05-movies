import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 40px 0px;
`;

export const Container = styled.div`
	width: 1200px;
	margin: 0px auto;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	gap: 16px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const MovieImg = styled.img`
	display: block;
	width: 400px;
	height: 500px;
`;

export const MetaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: 28px;
	height: 100%;
	padding-bottom: auto;
`;

export const MovieHead = styled.h2`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 15%;
	font-size: 24px;
	font-weight: 600;
	color: black;
	padding: 8px;
	border-radius: 4px;
	background-color: orange;
`;

export const MovieScore = styled.p`
	font-size: 18px;
	font-weight: 400;
`;
export const MovieOverview = styled.h3`
	color: orange;
	padding: 8px;
	border-radius: 4px;
	background-color: black;
`;
export const MovieReview = styled.p`
	display: block;
	width: 700px;
`;
export const MovieGenre = styled.h4`
	color: orange;
	padding: 8px;
	border-radius: 4px;
	background-color: black;
`;

export const GenreWrapper = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;
export const GenreList = styled.ul``;
export const GenreItem = styled.li``;
export const Genre = styled.p`
	border-bottom: 1px solid orange;
`;
export const ReviewList = styled.ul`
	display: flex;
	align-items: center;
	gap: 16px;
`;
export const ReviewItem = styled.li``;
export const ReviewText = styled.p``;
export const Navigation = styled(NavLink)`
	display: flex;
	align-items: center;
	font-size: 18px;
	padding: 8px;
	width: 100px;
	border-radius: 4px;
	text-decoration: none;

	color: rgb(0, 0, 0);
	background-color: transparent;
	border: 1px solid black;

	transition: 250ms color ease-in-out, 250ms background-color ease-in-out,
		250ms border ease-in-out, 250ms transform ease-in-out;
	&.active {
		transform: scale(1.17);

		color: rgb(255, 165, 0);
		background-color: rgb(0, 0, 0);
		border: rgb(0, 0, 0);

		box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
			rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	}
	:hover:not(.active) {
		background-color: rgb(255, 165, 0);
	}
`;
