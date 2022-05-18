import React, { useEffect, useState } from 'react';
import {
  Title,
  ContentIconBackground,
  ContentIconContainer,
  ContentMedia,
  ContentCard,
  ContentTitle,
  ContentText,
  ContentContainer,
  SectionWrapper
} from './References.elements';
import { ReactComponent as Printer } from '../../Assets/3DPrinter.svg';
import { ReactComponent as Process } from '../../Assets/Process.svg';
import { ReactComponent as Float } from '../../Assets/Float.svg';
import axios from 'axios';


const References: React.FC = () => {
  const [content, setContent] = useState([]);

  const loadContent = async() => {
    const response = await axios.get('http://localhost:3001/api/contentcard');
    setContent(response.data);
  };

  useEffect(() => {
    loadContent();
  }, []);

  return(
    <SectionWrapper>
      <Title>Aprofunde seus conhecimentos</Title>
      <ContentContainer>
        {content?.map(({_id, title, link, text}, i) => (
          <a href={link} key={_id}>
            <ContentCard>
              <ContentMedia>
                <ContentIconBackground />
                <ContentIconContainer>
                  {i === 0 &&
                    <Printer />}
                  {i === 1 &&
                    <Process />}
                  {i === 2 &&
                    <Float />}
                </ContentIconContainer>
              </ContentMedia>
              <ContentTitle data-testid='titulo-conteudo'>{title}</ContentTitle>
              <ContentText>{text}</ContentText>
            </ContentCard>
          </a>
        ))}

      </ContentContainer>
    </SectionWrapper>
  )
}

export default References;
