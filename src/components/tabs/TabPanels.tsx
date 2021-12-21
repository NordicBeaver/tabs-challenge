import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const TabPanelsStyled = styled.div`
  padding: 1em;
`;

export default function TabPanels({ children }: PropsWithChildren<{}>) {
  return <TabPanelsStyled>{children}</TabPanelsStyled>;
}
