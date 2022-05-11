import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        {banner?.map(({title, subtitle, appleLink, androidLink}) => (
          <Container>
            <SideContainer1>
              <Title1>{title}</Title1>
              <Title2>{subtitle}</Title2>
            </SideContainer1>
            <SideContainer2>
              <ImageContainer src={phone}/>
                <DownloadBtn>
                  <StoreIcon src={apple} />
                  <a href={appleLink}>
                    App Store
                  </a>
                </DownloadBtn>
                <DownloadBtn>
                  <StoreIcon src={android} />
                    <a href={androidLink}>
                      Play Store
                    </a>
                </DownloadBtn>
            </SideContainer2>
          </Container>
      ))}
    </div>
  );
}

export default Banner;