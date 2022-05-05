import React from 'react';
import {
  Section,
} from './components';
import GlobalStyle from './global/globalStyles';

const App:React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Section text={'opa textinho'} image={'imagem e tals'} />
    </div>
  );
}

export default App;
