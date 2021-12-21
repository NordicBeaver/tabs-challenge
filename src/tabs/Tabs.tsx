import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { TabsContextProvider } from './TabsContext';

const TabsContainer = styled.div`
  border: 2px solid #ededed;
`;

export default function Tabs({ children }: PropsWithChildren<{}>) {
  return (
    <TabsContextProvider>
      <TabsContainer>{children}</TabsContainer>
    </TabsContextProvider>
  );
}
