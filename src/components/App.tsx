import React from 'react';
import styled from '@emotion/styled';

const H1 = styled.h1`
  font-family: system-ui, sans-serif;
  font-weight: 400;
  font-size: 30px;
`;

const App = () => (
  <H1 role="header">
    Hello World!
  </H1>
);

export default App;
