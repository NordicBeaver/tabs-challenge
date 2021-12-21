import React from 'react';
import { useTabsContext } from './TabsContext';

export default function TabButton({ index }: { index: number }) {
  const { currentTabIndex, setCurrentTabIndex } = useTabsContext()!;

  return <button onClick={() => setCurrentTabIndex(index)}>Tab - {index}</button>;
}
