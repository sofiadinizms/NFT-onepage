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
  justify-content: flex-end;
  background: linear-gradient(220.21deg, #E2F4EA 2.99%, #A3CBC4 67.5%);
  border-radius: 0 20px 20px 0;

  svg{
    position: relative;
    top: 580px;
    left: 30px;
    width: 4vw;
  }

  @media screen and (max-width: 768px){
    width: 100vw;
    
    svg{
      display: none;
    }
  }
`

export const TextSide = styled.div`
  height: 70vh;
  width: 40vw;
  background: #F5FFF5;
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
  left:  ${Props => Props.left};

  svg{
    width: 4vw;
  }

  @media screen and (max-width: 768px){
    svg{
      display: none;
    }
  }
`