import React from 'react';
import {
  GenericSections,
  Footer,
  Banner
} from './components';
import GlobalStyle from './global/globalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './global/theme';

const App:React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Banner />
      <GenericSections />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
