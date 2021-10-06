import React from 'react';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Appbar from '../components/Appbar';
import Menu from '../components/Menu';

import '../styles/global.css';

const theme = createTheme({
  typography: {
    fontFamily: '"S-CoreDream-3Light", serif',
  },
});

const AppStyle = styled.div`
  display: grid;
  justify-content: center;
`;

const App = ({ Component }) => (
  <ThemeProvider theme={theme}>
    <AppStyle>
      <Appbar />
      <Menu />
      <Component />
    </AppStyle>
  </ThemeProvider>
);

export default App;
