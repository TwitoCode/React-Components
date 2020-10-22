import { Weight } from './../types';
import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';

interface Props {
	size?: string;
	weight?: Weight;
	color?: string;
	family?: string;
}

export const Link = styled(RLink)<Props>`
	color: ${({ color }) => (color ? color : 'white')};
	font-size: ${({ size }) => (size ? size : '1.25rem')};
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	font-family: ${({ family }) => (family ? family : '"Segoe UI", sans-serif')};
	text-decoration: none;

	&:hover {
		opacity: 50%;
	}
`;
