import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 40px 0px;
`;

export const Container = styled.div`
	width: 1200px;
	margin: 0px auto;
`;

export const ReviewList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 16px;
	gap: 32px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const ReviewItem = styled.li`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 32px;
	gap: 32px;
	background-color: lightgray;
	border: 1px solid lightgray;
	border-radius: 8px;
`;
export const ReviewImg = styled.img`
	display: block;
	width: 325px;
	height: 285px;
	transition: 250ms box-shadow ease-in-out;
	:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
`;
export const ReviewAuthor = styled.p`
	font-size: 24px;
	font-weight: 600;
`;
export const ReviewArticle = styled.article`
	font-size: 16px;
`;

export const Message = styled.h2`
	text-align: center;
	color: orange;
	font-weight: 600;
	font-size: 18px;
`;
