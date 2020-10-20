import { JustifyAlign, Direction } from './../types';
import styled from 'styled-components';

interface Props {
	justify?: JustifyAlign;
	align?: JustifyAlign;
	wrap?: boolean;
	direction?: Direction;
}

export const Flex = styled.div<Props>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
	align-items: ${({ align }) => (align ? align : 'flex-start')};
	flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;
