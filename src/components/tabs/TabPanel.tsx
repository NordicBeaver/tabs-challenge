import React, { PropsWithChildren } from 'react';
import { useTabsContext } from './TabsContext';

export default function TabPanel({ index, children }: PropsWithChildren<{ index: number }>) {
  const { currentTabIndex } = useTabsContext()!;

  if (currentTabIndex !== index) {
    return null;
  }

  return <div role="tabpanel">{children}</div>;
}
