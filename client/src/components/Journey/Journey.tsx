import React from 'react';
import {
  Titulo,
  Text,
  Container,
  PhotoSide,
  TextSide,
  FunIconsContainer
} from './Journey.elements';

import { ReactComponent as DenseStar } from '../../Assets/DenseStar.svg';
import { ReactComponent as ThinFlower } from '../../Assets/ThinFlower.svg';
import { ReactComponent as Sparkle } from '../../Assets/Sparkle.svg'; 

const Journey:React.FC = () => {
  return(
    <Container>
      <PhotoSide>
        <DenseStar />
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