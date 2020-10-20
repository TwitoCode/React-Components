import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';

interface Props {
	size?: string;
	weight?: string;
	color?: string;
}

export const Link = styled(RLink)<Props>`
	color: ${({ color }) => (color ? color : 'white')};
	font-size: ${({ size }) => (size ? size : '1.25rem')};
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	text-decoration: none;

	&:hover {
		opacity: 50%;
	}
`;
