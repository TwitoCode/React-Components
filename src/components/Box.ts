import styled from 'styled-components';

interface Props {
	w?: string;
	h?: string;
	color?: string;
	pad?: string;
	boldBorder?: boolean;
	softBorder?: boolean;
	img?: string;
}

export const Box = styled.div<Props>`
	width: ${({ w }) => (w ? w : '50%')};
	height: ${({ h }) => (h ? h : '50%')};
	background-color: ${({ color }) => (color ? color : '#e6e6e6')};
	padding: ${({ pad }) => (pad ? pad : '0')};

	border: ${({ boldBorder, softBorder }) => {
		switch (true) {
			case boldBorder:
				return '1px solid #333333';
			case softBorder:
				return '1px solid #e0e0e0';
			default:
				return 'none';
		}
	}};

	background-image: url(${({ img }) => (img ? img : 'none')});
	background-position: center;
`;
