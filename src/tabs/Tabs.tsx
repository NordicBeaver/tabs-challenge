import React, { PropsWithChildren } from 'react';
import { TabsContextProvider } from './TabsContext';

export default function Tabs({ children }: PropsWithChildren<{}>) {
  return <TabsContextProvider>{children}</TabsContextProvider>;
}
