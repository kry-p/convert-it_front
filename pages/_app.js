import React from 'react';
import styled from 'styled-components';
import Appbar from '../components/Appbar';
import Menu from '../components/Menu';

const AppStyle = styled.div`
  display: grid;
  justify-content: center;
`;

const App = ({ Component }) => (
  <>
    <AppStyle>
      <Appbar />
      <Menu />
    </AppStyle>
    <Component />
  </>
);

export default App;
