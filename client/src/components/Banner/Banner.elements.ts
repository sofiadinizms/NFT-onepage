import styled from 'styled-components';
import { Theme } from '../../global/theme';

interface Props{
  fill?: boolean,
  star?: boolean
}

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: ${Theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledContainer = styled.div`
  width: 95vw;
  height: 75vh;
  border-radius: 20px;
  background-color: ${Theme.colors.green400};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const Title1 = styled.h1`
  color: black;
  font-size: 70px;
  text-align: left;
  font-weight: 500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 415px){
    font-size: 50px;
  }
  
`

export const Title2 = styled.h2`
  color: black;
  width: 100%;
  font-size: 20px;
  text-align: left;
  font-weight: 300;
  overflow-wrap: break-word;

  @media screen and (max-width: 768px){
    text-align: center;
  }

  @media screen and (max-width: 415px){
    font-size: 10px;
  }
`

export const Line = styled.div`
  height: 1px;
  background-color: ${Theme.colors.green400};
  border-top: 1px solid ${Theme.colors.green1000};
  width: 100%;
  margin-top: 10px;
`

export const SideContainer1 = styled.div`
  width: 30vw;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;

  @media screen and (max-width: 768px){
    width: 60vw;
    flex-direction: column;
    align-items: center;
  }
`

export const ImageContainer = styled.img`
  max-width: 15vw;
  height: fit-content;
`

export const DownloadBtn = styled.button<Props>`
  width: 180px;
  height: ${Props => Props.fill ? '42px' : '40px'};
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid ${Theme.colors.green1000};
  background-color: ${Props => Props.fill ? `${Theme.colors.green1000}` : `${Theme.colors.green400}`};
  color: ${Props => Props.fill ? `${Theme.colors.white}` : `${Theme.colors.green1000}`};
  font-size: 18px;
  outline: none;
  cursor: pointer;
`

export const FunIconsContainer = styled.div<Props>`
  position: absolute;
  top: ${Props => Props.star ? '8vh' : '80vh'};
  left:  ${Props => Props.star ? '2vw' : '73vw'};
  animation: rotation 30s infinite linear;

  svg{
    width: 5vw;
  }

  @media screen and (max-width: 768px){
    svg{
      width: 10vw;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

`

export const SideContainer2 = styled.div`
  width: 23vw;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

export const IconContainer = styled.div`
  width: 50%;
  height: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.1s ease-in;

  svg {
    height: 60px;

    path {
      fill: white;
      fill-opacity: 1;
    }
  }
  
  @media screen and (max-width: 415px){
    height: 10vh;
   
    svg{
      width: 30vw;
    }
  }

  @media screen and (max-width: 768px){
    justify-content: center;
  }

`;

export const AppIconContainer = styled.div`
  width: 20vw;
  min-width: 90px;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`