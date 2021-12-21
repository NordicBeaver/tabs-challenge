import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const TabListStyled = styled.div`
  display: flex;
`;

export default function TabList({ children }: PropsWithChildren<{}>) {
  return <TabListStyled>{children}</TabListStyled>;
}
