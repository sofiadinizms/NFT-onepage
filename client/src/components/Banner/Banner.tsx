import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as AppIcon } from '../../Assets/AppIcon2.svg';
import { ReactComponent as Cubes } from '../../Assets/Cubes.svg';

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
  IconContainer
} from './Banner.elements';

import phone from '../../Assets/banner_img.png';
import apple from '../../Assets/apple-logo.png';
import android from '../../Assets/play-store.png';

const Banner: React.FC = () => {
  const [banner, setBanner] = useState([])

  const loadBanner = async() => {
    const res = await axios.get('http://localhost:3001/api/banner');
    setBanner(res.data);
  };

  useEffect(() => {
    loadBanner()
  }, []);


  return(
    <div>
        {banner?.map(({subtitle, appleLink, androidLink}) => (
          <Container>
            <StyledContainer>
              <SideContainer1>
                <IconContainer>
                  <Title1>NFT</Title1>
                  <Cubes />
                </IconContainer>
                <Title1>O JOGO</Title1>
                <Title2>Explore o mundo dos NFTs através de uma experiência única.</Title2>
                <Line />
                <DownloadBtn fill>
                  <a href={appleLink}>
                    App Store
                  </a>
                </DownloadBtn>
                <DownloadBtn>
                    <a href={androidLink}>
                      Play Store
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
      ))}
    </div>
  );
}

export default Banner;