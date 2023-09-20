import styled  from 'styled-components';
import { Theme } from '../../global/theme';

interface Props{
  weight?: boolean,
  align?: string
}

export const FooterText = styled.p<Props>`
  max-width: 25vw;
  font-weight: ${Props => Props.weight ? '400' : '500'};
  color: ${Theme.colors.green1000};
  font-size: 13px;
  text-align: ${Props => Props.align};
  overflow-wrap: break-word;

  @media screen and (max-width: 768px){
    text-align: center;
  }

  @media screen and (max-width: 415px){
    max-width: 100%;
    
  }
`

export const Container = styled.footer`
  width: 100vw;
  height: 30vh;
  border-top: 1px solid ${Theme.colors.green1000};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width:768px){
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    height: 40vh;
    max-height: 60vh;
  }
`

export const SideContainer = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media screen and (max-width:768px){
    width: fit-content;
  }

  @media screen and (max-width: 414px){
    width: 80vw;
    align-items: center;
  }
`

export const Logo = styled.div`
  width: fit-content;
  svg{
    width: 8vh;
    height: 8vh;
  }
`