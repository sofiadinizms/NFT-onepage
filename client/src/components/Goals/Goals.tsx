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
  const [goal, setGoal] = useState([])

  const loadGoal = async() => {
    const res = await axios.get('http://localhost:3001/api/goals');
    setGoal(res.data);
  };

  useEffect(() => {
    loadGoal()
  }, []);

  return(
    <Container>
      <Line />
      <GoalSide>
        <Title>Nossos objetivos</Title>
        <GoalContainer>
        {goal?.map(({_id,title}) => (
          <GoalCard key={_id} data-testid='goalTitle'>
            <GoalName>{title}</GoalName>
          </GoalCard>
        ))}
        </GoalContainer>
      </GoalSide>
      <EvalContainer>
        <NumberContainer>
          <Evaluation>4.8</Evaluation>
          <Evaluation star>&#9733;</Evaluation>
        </NumberContainer>
        <EvalDivider />
        <EvalText>
        Média dos feedbacks enviados pelos nossos usuários na App Store e Play Store
        </EvalText>
      </EvalContainer>
    </Container>
  )
}

export default Goals;