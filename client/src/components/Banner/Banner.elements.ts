import styled from 'styled-components';
import { Theme } from '../../global/theme';

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: ${Theme.colors.lilac};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Title1 = styled.h1`
  color: black;
  font-size: 50px;
  text-align: left;
  font-weight: 500;
`

export const Title2 = styled.h2`
  color: black;
  font-size: 35px;
  text-align: left;
  font-weight: 400;
  overflow-wrap: break-word;
`

export const SideContainer1 = styled.div`
  width: 30vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: top;
`

export const ImageContainer = styled.img`
  max-width: 15vw;
  height: fit-content;
`

export const DownloadBtn = styled.button`
  width: 9vw;
  height: 40px;
  margin-top: 20px;
  border-radius: 50px;
  border: 1px solid ${Theme.colors.mediumPurple};
  background-color: ${Theme.colors.white};
  color: ${Theme.colors.mediumPurple};
  font-size: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  outline: none;
`
export const StoreIcon = styled.img`
  width: 18px;
  height: 18px;
`

export const SideContainer2 = styled.div`
  width: 23vw;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`