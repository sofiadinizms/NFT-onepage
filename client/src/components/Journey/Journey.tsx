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

import { ReactComponent as Yarn } from '../../Assets/yarn.svg'; 
import { ReactComponent as AppScreen } from '../../Assets/PC.svg';
import { ReactComponent as Star } from '../../Assets/Star.svg';

const Journey:React.FC = () => {
  return(
    <Container>
      <PhotoSide>
        <PagesContainer>
          <AppScreen />
        </PagesContainer>
      </PhotoSide>
      
      <FunIconsContainer left='90vw' top='220vh'>
        <Star />
      </FunIconsContainer>
      
      <TextSide>
        <FunIconsContainer left='98vw' top='0vh'>
          <Yarn />
        </FunIconsContainer>
        <Titulo>O poder da documentação ao seu alcance</Titulo>
        <Text>Acesso rápido a documentação de suas tasks, organize compartilhe e acesse com facilidade</Text>
      </TextSide>
    </Container>
  )
}

export default Journey;