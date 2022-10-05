import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 40px 0px;
`;
export const Container = styled.div`
	width: 1200px;
	margin: 0px auto;
	padding: 0px 15px;
`;
export const ActorsList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 16px;
	gap: 32px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const ActorsItem = styled.li`
	width: 325px;
	height: 425px;
	border-radius: 4px;
`;
export const ActorsImg = styled.img`
	display: block;
	width: 325px;
	height: 385px;
	margin-bottom: 8px;
	transition: 250ms box-shadow ease-in-out;
	:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
`;
export const ActorsMeta = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;
export const ActorsInfo = styled.p`
	display: block;
	font-size: 18px;
	font-weight: 500;
	color: #ffa600ab;
	text-decoration: underline orange;
`;

export const Message = styled.h2`
	color: orange;
	font-weight: 600;
	font-size: 18px;
`;
