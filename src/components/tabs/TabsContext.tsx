import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

interface TabsContextValues {
  currentTabIndex: number;
  setCurrentTabIndex: (newIndex: number) => void;
}

const TabsContext = createContext<TabsContextValues | null>(null);

export const TabsContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <TabsContext.Provider
      value={{ currentTabIndex: currentTabIndex, setCurrentTabIndex: (index) => setCurrentTabIndex(index) }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => useContext(TabsContext);
