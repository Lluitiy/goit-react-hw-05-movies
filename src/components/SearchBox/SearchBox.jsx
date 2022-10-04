import { StyledInput } from './SearchBox.styled';

export const SearchBox = ({ onChange }) => {
	return (
		<StyledInput name="searchQuery" onChange={e => onChange(e.target.value)} />
	);
};
