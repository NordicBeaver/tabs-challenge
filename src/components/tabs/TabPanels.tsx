import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const TabPanelsStyled = styled.div`
  padding: 2em 1em 1em 1em;
`;

export default function TabPanels({ children }: PropsWithChildren<{}>) {
  return <TabPanelsStyled>{children}</TabPanelsStyled>;
}
