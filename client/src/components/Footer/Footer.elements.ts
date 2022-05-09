import styled  from 'styled-components';
import { Theme } from '../../global/theme';

interface Props{
  weight?: number,
  align?: string
}

export const FooterText = styled.p<Props>`
  font-weight: ${Props => Props.weight};
  color: ${Theme.colors.darkPurple};
  font-size: 12px;
  text-align: ${Props => Props.align};
`

export const Container = styled.footer`
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SideContainer = styled.div`
  width: max-content;
  height: max-content;
`

export const Logo = styled.img`
  width: 7vh;
  height: 7vh;
`