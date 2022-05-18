import React from 'react';
import {
  Titulo,
  Text,
  Container,
  PhotoSide,
  TextSide,
  FunIconsContainer,
  PagesContainer
} from './Journey.elements';

import { ReactComponent as ThinFlower } from '../../Assets/ThinFlower.svg';
import { ReactComponent as Sparkle } from '../../Assets/Sparkle.svg'; 
import { ReactComponent as AppScreen1 } from '../../Assets/AppPage1.svg';
import { ReactComponent as AppScreen2 } from '../../Assets/AppPage2.svg';
import { ReactComponent as AppScreen3 } from '../../Assets/AppPage3.svg';

const Journey:React.FC = () => {
  return(
    <Container>
      <PhotoSide>
        <PagesContainer>
          <AppScreen1 />
          <AppScreen2 />
          <AppScreen3 />
        </PagesContainer>
      </PhotoSide>
      
      <FunIconsContainer left='95vw' top='220vh'>
        <Sparkle />
      </FunIconsContainer>
      
      <TextSide>
          <ThinFlower />
        <Titulo>Escolha sua jornada!</Titulo>
        <Text>Defina seu modo de jogo e dê o primeiro passo na sua jornada!</Text>
      </TextSide>
    </Container>
  )
}

export default Journey;