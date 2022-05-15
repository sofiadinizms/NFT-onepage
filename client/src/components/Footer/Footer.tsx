import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  FooterText,
  Container,
  SideContainer,
  Logo
} from './Footer.elements'

import logo from '../../Assets/dollar.png';

const Footer: React.FC = () => {
  
  const [footer, setFooter] = useState([]);

  const loadFooter = async() => {
    const res = await axios.get('https://projeto-nft-o-jogo.herokuapp.com/api/footer');
    setFooter(res.data);
  };

  useEffect(() => {
    loadFooter();
  }, []);

  return (
    <Container>
      {footer?.map(({socialMedia1, socialMedia2, appleDownload, androidDownload}) => (
      <SideContainer>
        <FooterText weight={500} align='left'><a href={socialMedia1}>Instagram</a></FooterText>
        <FooterText weight={500} align='left'><a href={socialMedia2}>LinkedIn</a></FooterText>
        <FooterText weight={500} align='left'><a href={appleDownload}>Baixe nosso app na App Store!</a></FooterText>
        <FooterText weight={500} align='left'><a href={androidDownload}>Baixe nosso app na App Store!</a></FooterText>
      </SideContainer>
      ))}
      
      <SideContainer>
        <Logo src={logo}/>
      </SideContainer>
        {footer?.map(({paragraph}) => (
        <SideContainer>
          <FooterText weight={500} align='right'>{paragraph}</FooterText>
        </SideContainer>    

        ))}
    </Container>
  );
}

export default Footer;