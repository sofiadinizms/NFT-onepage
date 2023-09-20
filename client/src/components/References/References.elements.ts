import styled from 'styled-components';
import { Theme } from '../../global/theme';

export const SectionWrapper = styled.section`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 30px;

  @media screen and (max-width: 1024px){
    height: fit-content;
  }
`

export const Title = styled.h2`
  color:;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  height: fit-content;

  @media screen and (max-width: 414px){
    font-size: 30px;
  }
`

export const ContentTitle = styled.h3`
  color: ${Theme.colors.green1000};
  font-weight: 500;
  font-size: 25px;
  text-align: center;
`

export const ContentText = styled.p`
  color: ${Theme.colors.green1000};
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  overflow-wrap: break-word;
`


export const ContentCard = styled.div`
  max-width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentIconBackground = styled.div`
  height: 130px;
  width: 300px;
  background-color: ${Theme.colors.green500};
  border-radius: 15px;
` 

export const ContentIconContainer = styled.div`
  width: 110px;
  height: 110px;
  z-index: 1000;
  border-radius: 10px;
  position: relative;
  bottom: 60px;
  left: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
  background: ${Theme.colors.white};

  svg{
    height: 55%;
  }
`

export const ContentMedia = styled.div`
  height: 180px;
  width: 300px;
  justify-content: center;
  align-items: center;
`

export const ContentContainer = styled.div`
  width:80vw;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 414px){
    width: fit-content;
    justify-content: center;
  }
`