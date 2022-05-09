import React from 'react';

import {
  Container,
  Title1,
  Title2,
  SideContainer1,
  SideContainer2,
  ImageContainer,
  DownloadBtn,
  StoreIcon
} from './Banner.elements';

import phone from '../../Assets/banner_img.png';
import apple from '../../Assets/apple-logo.png';
import android from '../../Assets/play-store.png';

const Banner: React.FC = () => {
  return(
    <Container>
      <SideContainer1>
        <Title1>Oioioi</Title1>
        <Title2>Subtituloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Title2>
      </SideContainer1>
      <SideContainer2>
        <ImageContainer src={phone}/>
        <DownloadBtn>
          <StoreIcon src={apple} />
          App Store
        </DownloadBtn>
        <DownloadBtn>
          <StoreIcon src={android} />
          Play Store
          </DownloadBtn>
      </SideContainer2>
    </Container>
  );
}

export default Banner;