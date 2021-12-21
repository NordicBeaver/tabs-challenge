import React from 'react';
import GuardianLatestArticlesList from './GuardianLatestArticlesList';
import TabButton from './tabs/TabButton';
import TabList from './tabs/TabList';
import TabPanel from './tabs/TabPanel';
import TabPanels from './tabs/TabPanels';
import Tabs from './tabs/Tabs';

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
