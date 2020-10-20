import styled from 'styled-components';

interface Props {
	w?: string;
}

export const Container = styled.div<Props>`
	margin: auto;
	width: ${({ w }) => (w ? w : '90%')};
`;
