import { Container } from 'components/Cast/Cast.styled';

export const Spinner = () => {
	return (
		<Container>
			<div className="scaling-squares-spinner">
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
			</div>
		</Container>
	);
};
