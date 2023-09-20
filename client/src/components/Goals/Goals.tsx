import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Evaluation,
  Title,
  GoalCard,
  GoalName,
  EvalText,
  EvalContainer,
  EvalDivider,
  NumberContainer,
  GoalContainer,
  GoalSide
} from './Goals.elements';

import {ReactComponent as Line} from '../../Assets/line.svg';

const Goals:React.FC = () => {
  const [goal, setGoal] = useState(["Alinhar", "Organizar", "Documentar"])

  return(
    <Container>
      <Line />
      <GoalSide>
        <Title>Nossos objetivos</Title>
        <GoalContainer>
        {goal?.map((goals) => (
          <GoalCard data-testid='goalTitle'>
            <GoalName>{goals}</GoalName>
          </GoalCard>
        ))}
        </GoalContainer>
      </GoalSide>
      <EvalContainer>
        <NumberContainer>
          <Evaluation>5.0</Evaluation>
          <Evaluation star>&#9733;</Evaluation>
        </NumberContainer>
        <EvalDivider />
        <EvalText>
        Média dos feedbacks enviados pelos nossos usuários na App Store
        </EvalText>
      </EvalContainer>
    </Container>
  )
}

export default Goals;