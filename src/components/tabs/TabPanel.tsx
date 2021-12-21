import React from 'react';
import { useTabsContext } from './TabsContext';

export default function TabPanel({ index }: { index: number }) {
  const { currentTabIndex } = useTabsContext()!;

  if (currentTabIndex !== index) {
    return null;
  }

  return <div>Panel - {index}</div>;
}
