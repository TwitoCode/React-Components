import styled from 'styled-components';

interface Props {
	w?: string;
	pad?: string;
	textColor?: string;
	softBorder?: boolean;
	boldBorder?: boolean;
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
`;
