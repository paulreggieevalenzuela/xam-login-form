import React from 'react';

import * as S from './Card.style';

interface IProps {
	noPadding?: boolean;
	withShadow?: boolean;
	id?: string;
	children: React.ReactNode;
}

const Card = ({
	noPadding = false,
	withShadow = false,
	id = 'cardComponent',
	children
}: IProps) => (
	<S.Wrapper id={id}>
		<S.Card
			className="card"
			{...{ withShadow }}
		>
			<S.Content {...{ noPadding }}>{children}</S.Content>
		</S.Card>
	</S.Wrapper>
);

export default Card;
