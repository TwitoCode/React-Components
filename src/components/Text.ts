import { TextAlign } from './../types';
import styled from 'styled-components';

interface Props {
	size?: string;
	weight?: string;
	color?: string;
	align?: TextAlign;
	family?: string;
}

export const Text = styled.h1<Props>`
	font-size: ${({ size }) => (size ? size : '1.25rem')};
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	color: ${({ color }) => (color ? color : 'black')};
	text-align: ${({ align }) => (align ? align : 'start')};
	font-family: ${({ family }) => (family ? family : '"Segoe UI", sans-serif')};
`;
