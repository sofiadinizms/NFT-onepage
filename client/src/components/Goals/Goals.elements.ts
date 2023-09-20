import styled from 'styled-components';
import { Theme } from '../../global/theme';

interface EvalProp{
  star?:boolean
}

export const Container = styled.section`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${Theme.colors.white};

  
  svg{
    position: absolute;
    margin-top: 650px;
    animation: wave 30s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    height: 100vh;

    @media screen and (max-width:768px){
      display: none;
    }
  }

  @keyframes wave {
    0% {
      margin-left: 100%;
    }
    50% {
      margin-left: 300%;
    }
    100%{
      margin-left: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: fit-content;
  }
`

export const EvalContainer = styled.div`
  height: 220px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 230px;
    margin-bottom: 40px;
  }
`
export const NumberContainer = styled.div`
  width: 260px;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const EvalDivider = styled.div`
  height: 1.5px;
  width: 300px;
  background-color: ${Theme.colors.green1000};

`

export const Evaluation = styled.h2<EvalProp>`
  color: ${Theme.colors.green1000};
  font-weight: 500;
  font-size: ${EvalProp => EvalProp.star ? '50px' : '130px'};
  line-height: ${EvalProp => EvalProp.star ? '40px' : '95px'};

  @media screen and (max-width: 768px) {
    font-size: ${EvalProp => EvalProp.star ? '50px' : '100px'};
    line-height: ${EvalProp => EvalProp.star ? '40px' : '80px'};
  }
`

export const EvalText = styled.p`
  color: ${Theme.colors.green1000};
  font-weight: 300;
  font-size: 20px;
  text-align: left;
  overflow-wrap: break-word;
`

export const Title = styled.h2`
  color: ${Theme.colors.green1000};
  font-weight: 500;
  font-size: 40px;
  height: 100px;
  width: 510px;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100vw;
  }
`
export const GoalCard = styled.div`
  width: 160px;
  height: 155px;
  z-index: 10;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.2);
  border-color: ${Theme.colors.green1000};
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
`
export const GoalName = styled.p`
  color: ${Theme.colors.green1000};
  font-size: 28px;
  font-weight: 500;
`

export const GoalContainer = styled.div`
  width: 510px;
  min-width: 150px;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media screen and (max-width: 415px){
    height: 495px;
    width: 90vw;
    flex-direction: column;
    align-items: center;
  }
`

export const GoalSide = styled.div`
  height: 100%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 180px;

  @media screen and (max-width: 768px) {
    height: 300px;
    padding: 0;
  }

  @media screen and (max-width: 415px) {
    height: 100vh;
    padding: 0;
  }
`

