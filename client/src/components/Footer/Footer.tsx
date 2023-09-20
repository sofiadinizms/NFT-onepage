import React from 'react';

import {
  FooterText,
  Container,
  SideContainer,
  Logo
} from './Footer.elements'

import { ReactComponent as LogoIcon} from '../../Assets/ColoredLogo.svg';

const Footer: React.FC = () => {
  
  return (
    <Container>
      <SideContainer>
        <FooterText weight align='left'><a href={"https://apps.apple.com/br/app/needleapp/id6459739412?l=en-GB&mt=12"}>needleoficial@gmail.com</a></FooterText>
        <FooterText weight align='left'><a href={"https://apps.apple.com/br/app/needleapp/id6459739412?l=en-GB&mt=12"}>needle_oficial</a></FooterText>
        <FooterText align='left'><a href={"https://apps.apple.com/br/app/needleapp/id6459739412?l=en-GB&mt=12"}>Nos acompanhe nas redes sociais!</a></FooterText>
      </SideContainer>
      

        <Logo data-testid='LogoFooter'>
          <LogoIcon/>
        </Logo>

        <SideContainer>
        <FooterText weight align='right'><a href={"https://apps.apple.com/br/app/needleapp/id6459739412?l=en-GB&mt=12"}>Needle: Documente o presente, simplifique</a></FooterText>
        <FooterText weight align='right'><a href={"https://apps.apple.com/br/app/needleapp/id6459739412?l=en-GB&mt=12"}>o futuro. Garanta hoje um maior alinhamento</a></FooterText>
        <FooterText weight align='right'><a href={"https://apps.apple.com/br/app/needleapp/id6459739412?l=en-GB&mt=12"}> e o registro de todas as suas atividades.</a></FooterText>  
        <FooterText align='right'>Made with <strong>&lt;&#x0002F;&gt;</strong> and <strong>&hearts;</strong> by Vitória Pinheiro</FooterText>
       
        </SideContainer>    

    </Container>
  );
}

export default Footer;