import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as AppIcon } from '../../Assets/AppIcon.svg';
import { ReactComponent as Cubes } from '../../Assets/Cubes.svg';
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
        {banner?.map(({appleLink, androidLink}) => (
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