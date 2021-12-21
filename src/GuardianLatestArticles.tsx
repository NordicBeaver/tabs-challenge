import React from 'react';
import GuardianLatestArticlesList from './components/GuardianLatestArticlesList';
import TabButton from './components/tabs/TabButton';
import TabList from './components/tabs/TabList';
import TabPanel from './components/tabs/TabPanel';
import TabPanels from './components/tabs/TabPanels';
import Tabs from './components/tabs/Tabs';

export default function GuardianLatestArticles() {
  return (
    <Tabs>
      <TabList>
        <TabButton index={0}>UK news</TabButton>
        <TabButton index={1}>Football</TabButton>
        <TabButton index={2}>Travel</TabButton>
      </TabList>
      <TabPanels>
        <TabPanel index={0}>
          <GuardianLatestArticlesList section="uk-news"></GuardianLatestArticlesList>
        </TabPanel>
        <TabPanel index={1}>
          <GuardianLatestArticlesList section="football"></GuardianLatestArticlesList>
        </TabPanel>
        <TabPanel index={2}>
          <GuardianLatestArticlesList section="travel"></GuardianLatestArticlesList>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
