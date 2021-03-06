import { Weight } from './../types';
import styled from 'styled-components';

interface Props {
	w?: string;
	paddingTop?: string;
	paddingLeft?: string;
	softBorder?: boolean;
	boldBorder?: boolean;
	fontColor?: string;
	fontSize?: string;
	fontWeight?: Weight;
	fontFamily?: string;
	radius?: string;
}

export const Input = styled.input<Props>`
	width: ${({ w }) => (w ? w : '100%')};
	padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '2rem')};
	padding-bottom: ${({ paddingTop }) => (paddingTop ? paddingTop : '2rem')};
	padding-right: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '2rem')};
	padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '2rem')};
	color: ${({ fontColor }) => (fontColor ? fontColor : '#cccccc')};
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
	border-radius: ${({ radius }) => (radius ? radius : 'none')};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
	font-family: ${({ fontFamily }) =>
		fontFamily ? fontFamily : '"Segoe UI", sans-serif'};
`;
