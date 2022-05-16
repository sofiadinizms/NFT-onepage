import React, { useState } from 'react';
import {
  Navbar,
  Sidebar,
  Footer,
  Banner,
  References
} from './components';
import GlobalStyle from './global/globalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './global/theme';
import { BrowserRouter as Router } from 'react-router-dom';

const App:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <GlobalStyle />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Banner />
        <References />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
