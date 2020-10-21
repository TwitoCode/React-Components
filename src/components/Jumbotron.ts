import { JustifyAlign } from './../types';
import styled from 'styled-components';

interface Props {
	justify?: JustifyAlign;
	pad?: string;
	img?: string;
	color?: string;
	boldBorder?: boolean;
	softBorder?: boolean;
	h?: string;
	w?: string;
}

export const Jumbotron = styled.div<Props>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : 'center')};
	align-items: center;
	padding: ${({ pad }) => (pad ? pad : '0')};
	background-color: ${({ color }) => (color ? color : 'none')};

	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${({ img }) => img});

	background-position: center;
	background-blend-mode: darken;

	:after {
		background: rgba(0, 0, 0, 0.5);
	}

	width: ${({ w }) => (w ? w : '100%')};
	height: ${({ h }) => (h ? h : '40vh')};

	border-bottom: ${({ boldBorder, softBorder }) => {
		switch (true) {
			case boldBorder:
				return '1px solid #333333';
			case softBorder:
				return '1px solid #e0e0e0';
			default:
				return 'none';
		}
	}};
`;
