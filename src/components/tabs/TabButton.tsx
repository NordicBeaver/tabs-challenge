import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useTabsContext } from './TabsContext';

const TabButtonStyled = styled.button<{ isActive?: boolean }>`
  flex-grow: 1;
  border: none;
  background-color: ${(props) => (props.isActive === true ? '#ffffff' : '#ededed')};
  cursor: ${(props) => (props.isActive === true ? 'default' : 'pointer')};
  padding: 1em;
  font-size: 1em;
`;

export default function TabButton({ index, children }: PropsWithChildren<{ index: number }>) {
  const { currentTabIndex, setCurrentTabIndex } = useTabsContext()!;

  return (
    <TabButtonStyled
      isActive={index === currentTabIndex}
      onClick={() => setCurrentTabIndex(index)}
      role="tab"
      aria-selected={index === currentTabIndex}
    >
      {children}
    </TabButtonStyled>
  );
}
