import styled from 'styled-components';

interface Props {
	justify?: string;
	align?: string;
	wrap?: boolean;
	direction?: string;
}

export const Flex = styled.div<Props>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
	align-items: ${({ align }) => (align ? align : 'flex-start')};
	flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;
