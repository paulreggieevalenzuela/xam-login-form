import styled, { css } from 'styled-components';
import { StyleConstants } from "styles/StyleConstants";

export const Card = styled.div<{
	withShadow?: boolean;
}>`
  	background: ${StyleConstants.color.white};
	border-radius: 8px;

	${({ withShadow, hover }) =>
		withShadow &&
		!hover &&
		css`
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
		`}
`;

export const Content = styled.div<{
	noPadding: boolean;
}>`
	${({ noPadding }) =>
		!noPadding &&
		css`
			padding: 40px;
		`}
`;

export const Wrapper = styled.div``;
