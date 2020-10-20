import { TextAlign } from './../types';
import { darken } from 'polished';
import styled from 'styled-components';

interface Props {
	pad?: string;
	bgColor?: string;
	fontColor?: string;
	radius?: string;
	family?: string;
	size?: string;
	weight?: string;
	align?: TextAlign;
}

export const Button = styled.button<Props>`
	padding: ${({ pad }) => (pad ? pad : '0.5rem 1rem')};
	color: ${({ fontColor }) => (fontColor ? fontColor : 'white')};
	background-color: ${({ bgColor }) => (bgColor ? bgColor : '#4f4f4f')};
	border-radius: ${({ radius }) => (radius ? radius : '0.5rem')};
	font-family: ${({ family }) => (family ? family : '"Segoe UI", sans-serif')};
	font-size: ${({ size }) => (size ? size : '1.25rem')};
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	text-align: ${({ align }) => (align ? align : 'start')};
	border: transparent;
	outline: none;

	&:hover {
		transition: all ease-in 0.1s;
		background-color: ${({ bgColor }) =>
			bgColor ? darken(0.1, bgColor) : darken(0.1, '#4f4f4f')};
		color: ${({ fontColor }) =>
			fontColor ? darken(0.1, fontColor) : darken(0.1, 'white')};
	}
`;
