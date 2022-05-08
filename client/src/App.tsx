import React from 'react';
import {
  GenericSections
} from './components';
import GlobalStyle from './global/globalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './global/theme';

const App:React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <GenericSections />
    </ThemeProvider>
  );
}

export default App;
