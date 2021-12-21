import React from 'react';
import styled from 'styled-components';
import TabButton from './tabs/TabButton';
import TabList from './tabs/TabList';
import TabPanel from './tabs/TabPanel';
import TabPanels from './tabs/TabPanels';
import Tabs from './tabs/Tabs';

const TabsContainer = styled.div`
  max-width: 480px;
  margin: 40px auto;
`;

function App() {
  return (
    <TabsContainer>
      <Tabs>
        <TabList>
          <TabButton index={0}></TabButton>
          <TabButton index={1}></TabButton>
        </TabList>
        <TabPanels>
          <TabPanel index={0}></TabPanel>
          <TabPanel index={1}></TabPanel>
        </TabPanels>
      </Tabs>
    </TabsContainer>
  );
}

export default App;
