import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  FooterText,
  Container,
  SideContainer,
  Logo
} from './Footer.elements'

import logo from '../../Assets/dollar.png';


// type FooterProps = {
// address: string,
// phone: string,
// androidLink: string,
// iosLink: string
// }

const Footer: React.FC = () => {
  return (
    <Container>
      <SideContainer>
        <FooterText weight={400} align='left'>textinho aqui</FooterText>
        <FooterText weight={400} align='left'>textinho aqui</FooterText>
        <FooterText weight={400} align='left'>textinho aqui</FooterText>
        <FooterText weight={700} align='left'>textinho aqui</FooterText>
      </SideContainer>
      
      <SideContainer>
        <Logo src={logo}/>
      </SideContainer>

      <SideContainer>
        <FooterText weight={400} align='right'>textinho aqui</FooterText>
        <FooterText weight={400} align='right'>textinho aqui</FooterText>
        <FooterText weight={400} align='right'>textinho aqui</FooterText>
        <FooterText weight={700} align='right'>textinho aqui</FooterText>
      </SideContainer>    
    </Container>
  );
}

export default Footer;