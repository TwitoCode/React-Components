import styled from 'styled-components';

interface Props {
	img: string;
}

export const BackgroundImage = styled.div<Props>`
	background-image: url(${({ img }) => img});
`;
