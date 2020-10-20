import styled from 'styled-components';

interface Props {
	w?: string;
	h?: string;
	color?: string;
	radius?: string;
}

export const Bar = styled.div<Props>`
	width: ${({ w }) => (w ? w : '100vw')};
	height: ${({ h }) => (h ? h : '10vh')};
	background-color: ${({ color }) => (color ? color : 'black')};
	border-radius: ${({ radius }) => (radius ? radius : '0')};
`;
