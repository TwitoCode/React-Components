import { Weight } from './../types';
import styled from 'styled-components';

interface Props {
	w?: string;
	pad?: string;
	textColor?: string;
	softBorder?: boolean;
	boldBorder?: boolean;
	weight?: Weight;
	family?: string;
}

export const Input = styled.input<Props>`
	width: ${({ w }) => (w ? w : '100%')};
	padding: ${({ pad }) => (pad ? pad : '0.25rem')};
	color: ${({ textColor }) => (textColor ? textColor : '#cccccc')};
	outline: none;
	border: ${({ softBorder, boldBorder }) => {
		switch (true) {
			case softBorder:
				return '1px solid #cccccc';
			case boldBorder:
				return '1px solid #8a8a8a';
			default:
				return 'none';
		}
	}};
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	font-family: ${({ family }) => (family ? family : '"Segoe UI", sans-serif')};
`;
