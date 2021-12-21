import React from 'react';
import styled from 'styled-components';
import TabButton from './components/tabs/TabButton';
import TabList from './components/tabs/TabList';
import TabPanel from './components/tabs/TabPanel';
import TabPanels from './components/tabs/TabPanels';
import Tabs from './components/tabs/Tabs';

const TabsContainer = styled.div`
  max-width: 480px;
  margin: 40px auto;
`;

function App() {
  return (
    <TabsContainer>
      <Tabs>
        <TabList>
          <TabButton index={0}>Tab 0</TabButton>
          <TabButton index={1}>Tab 1</TabButton>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Panel 0</TabPanel>
          <TabPanel index={1}>Panel 1</TabPanel>
        </TabPanels>
      </Tabs>
    </TabsContainer>
  );
}

export default App;
