import React from 'react';
import TabButton from './tabs/TabButton';
import TabPanel from './tabs/TabPanel';
import Tabs from './tabs/Tabs';

function App() {
  return (
    <div>
      <Tabs>
        <div>
          <div>
            <TabButton index={0}></TabButton>
            <TabButton index={1}></TabButton>
          </div>
          <div>
            <TabPanel index={0}></TabPanel>
            <TabPanel index={1}></TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
