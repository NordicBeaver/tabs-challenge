import React from 'react';
import styled from 'styled-components';
import GuardianLatestArticles from './components/GuardianLatestArticles';

const Containter = styled.div`
  max-width: 480px;
  margin: 40px auto;
`;

function App() {
  return (
    <Containter>
      <GuardianLatestArticles></GuardianLatestArticles>
    </Containter>
  );
}

export default App;
