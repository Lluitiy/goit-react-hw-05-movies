import styled from '@emotion/styled';
import { MdOutlineLocationSearching } from 'react-icons/md';
export const Main = styled.main`
	margin: 0px auto;
`;

export const Section = styled.section`
	padding: 40px 0px;
`;
export const Container = styled.div`
	width: 1200px;
	margin: 0px auto;
	padding: 0px 15px;
`;
export const Form = styled.form`
	margin: 0px auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Label = styled.label``;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	width: 40px;
	height: 40px;
	gap: 16px;
	border-radius: 4px;
	border-bottom-left-radius: 0px;
	border-top-left-radius: 0px;
	text-decoration: none;
	border: none;

	color: rgb(0, 0, 0);
	background-color: rgb(255, 165, 0);

	transition: 250ms color ease-in-out, 250ms background-color ease-in-out,
		250ms border ease-in-out, 250ms transform ease-in-out;
	:hover {
		color: rgb(255, 165, 0);
		background-color: rgb(0, 0, 0);

		box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
			rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	}
`;
export const SearchIcon = styled(MdOutlineLocationSearching)`
	width: 100%;
	height: 100%;
	fill: rgb(0, 0, 0);
	transition: 250ms fill ease-in;
	:hover {
		fill: rgb(255, 165, 0);
	}
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
	width: 300px;
	height: 400px;
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
