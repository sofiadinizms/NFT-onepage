import React from 'react';
import { ReactComponent as AppIcon } from '../../Assets/AppIcon.svg';
import { ReactComponent as Star } from '../../Assets/Star.svg';
import { ReactComponent as Flower } from '../../Assets/Flower.svg';

import {
  Container,
  Title1,
  Title2,
  SideContainer1,
  SideContainer2,
  DownloadBtn,
  AppIconContainer,
  StyledContainer,
  Line,
  IconContainer,
  FunIconsContainer
} from './Banner.elements';

const Banner: React.FC = () => {

  return(
    <>
          <Container>
            <FunIconsContainer star>
              <Star />
            </FunIconsContainer>
            <FunIconsContainer>
              <Flower />
            </FunIconsContainer>
            <StyledContainer>
              <SideContainer1>
                <IconContainer>
                  <Title1>Needle</Title1>
                </IconContainer>
                <Title1>não deixe pontas soltas</Title1>
                <Title2>Documente os processos da sua equipe e garanta o alinhamento do seu time</Title2>
                <Line />
                <DownloadBtn fill>
                  <a href={"https://apps.apple.com/br/app/needleapp/id6459739412?l=en-GB&mt=12"}>
                  Baixe Agora
                  </a>
                </DownloadBtn>
              </SideContainer1>
              <SideContainer2>
                <AppIconContainer>
                  <AppIcon />
                </AppIconContainer>
              </SideContainer2>
            </StyledContainer>
          </Container>
    </>
  );
}

export default Banner;