import { JustifyAlign } from './../types';
import styled from 'styled-components';

interface Props {
	w?: string;
	h?: string;
	color?: string;
	radius?: string;
	justify?: JustifyAlign;
	align?: JustifyAlign;
}

export const Bar = styled.div<Props>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
	align-items: ${({ align }) => (align ? align : 'flex-start')};
	width: ${({ w }) => (w ? w : '100vw')};
	height: ${({ h }) => (h ? h : '10vh')};
	background-color: ${({ color }) => (color ? color : 'black')};
	border-radius: ${({ radius }) => (radius ? radius : '0')};
`;
