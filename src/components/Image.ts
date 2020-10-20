import styled from 'styled-components';

interface Props {
  w?: string;
  h?: string;   
  border?: boolean;
  borderColor?: string;
}

export const Image = styled.img<Props>`
	width: ${({ w }) => (w ? w : '10vw')};
	height: ${({ h }) => (h ? h : '10vw')};
	border: ${({ border, borderColor }) => (border ? `1px solid ${borderColor}` : 'none')};
`;