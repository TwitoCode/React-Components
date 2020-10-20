import styled from 'styled-components';

interface Props {
	size?: string;
	weight?: string;
	color?: string;
	align?: string;
}

export const Text = styled.h1<Props>`
	font-size: ${({ size }) => (size ? size : '1.25rem')};
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	color: ${({ color }) => (color ? color : 'black')};
	text-align: ${({ align }) => (align ? align : 'start')};
`;
