import styled from 'styled-components';
import {Theme} from '../../global/theme';

interface PropsIcon{
  top?:string,
  left?:string,
}


export const Titulo = styled.h2`
  font-size: 50px;
  font-weight: 600;
  color: ${Theme.colors.green1000};
  text-align: center;
  overflow-wrap: break-word;
`

export const Text = styled.p`
  max-width: 430px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${Theme.colors.green1000};
  overflow-wrap: break-word;
`
export const Container = styled.section`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.white};
  z-index: -6;

  svg{
    position: absolute;
    right: 200px;

  }

  @media screen and (max-width: 768px){
    flex-direction: column-reverse;
  }
`

export const PhotoSide = styled.div`
  height: 90vh;
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 20px 20px 0;
  background:  ${Theme.colors.green1000};
  
  @media screen and (max-width: 768px){
    width: 100vw;
  }
`

export const TextSide = styled.div`
  height: 70vh;
  width: 40vw;
  background:  ${Theme.colors.green500};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg{
    position: absolute;
    top:170vh;
    right: 40px;
    width: 4vw;
  }

  @media screen and (max-width: 768px){
    width: 100vw;

    svg{
      display: none;
    }
  }
`

export const FunIconsContainer = styled.div<PropsIcon>`
  position: absolute;
  top: ${Props => Props.top};
  left: ${Props => Props.left};
  animation: rotation 3s infinite linear ease-in-out;

  svg{
    width: 4vw;
  }

  @media screen and (max-width: 768px){
    svg{
      display: none;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(12deg);
    }
  }
`

export const PagesContainer = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg{
    position: static;
    height: 60%;
  }
`
