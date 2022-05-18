import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  FooterText,
  Container,
  SideContainer,
  Logo
} from './Footer.elements'

import { ReactComponent as LogoIcon} from '../../Assets/ColoredLogo.svg';

const Footer: React.FC = () => {
  
  const [footer, setFooter] = useState([]);

  const loadFooter = async() => {
    const res = await axios.get('http://localhost:3001/api/footer');
    setFooter(res.data);
  };

  
  useEffect(() => {
    let run = true

    if (run){
      loadFooter();
    } else{
      return
    }
    return () => { 
      run = false;
    }}, []);

  return (
    <Container>
      {footer?.map(({_id,appleDownload, androidDownload}) => (
      <SideContainer key={_id}>
        <FooterText align='left'><a href={appleDownload}>Baixe nosso app na App Store</a></FooterText>
        <FooterText align='left'><a href={androidDownload}>Baixe nosso app na Play Store</a></FooterText>
        <FooterText weight align='left'>Made with<strong>&lt; &#x0002F; &gt;</strong>and <strong>&hearts;</strong> by Sofia Diniz e Vitória Pinheiro</FooterText>
      </SideContainer>
      ))}
      

        <Logo data-testid='LogoFooter'>
          <LogoIcon/>
        </Logo>

        <SideContainer>

          {footer?.map(({_id,paragraph}) => (
            <FooterText align='right' key={_id}>{paragraph}</FooterText>    
          ))}
        </SideContainer>    

    </Container>
  );
}

export default Footer;