import React, { useState } from 'react';
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
import { ReactComponent as Printer } from '../../Assets/Documentacao.svg';
import { ReactComponent as Process } from '../../Assets/Alinhados.svg';
import { ReactComponent as Float } from '../../Assets/gerencie.svg';
import { ReactComponent as Folder } from '../../Assets/Folder.svg';

const References: React.FC = () => {
  const [content, setContent] = useState([
    {
      title: "Documentação Otimizada",
      link: "https://www.linkedin.com/in/vitoria-pinheiro/",
      text: "Maximize a eficiência da sua documentação com nosso app."
    },
    {
      title: "Equipes Alinhadas",
      link: "https://www.linkedin.com/in/vitoria-pinheiro/",
      text: "O alinhamento eficaz de equipes é o alicerce de uma empresa sólida"
    },
    {
      title: "Gerencie Tarefas",
      link: "https://www.linkedin.com/in/vitoria-pinheiro/",
      text: "Organize a documentação das suas tasks de forma inteligente"
    }

  ]);

  return(
    <SectionWrapper>
      <Title>Comece a documentar agora</Title>
      <ContentContainer>
        {content?.map(({ title, link, text}, i) => (
          <a href={link} >
            <ContentCard>
              <ContentMedia>
                <Folder width={360} height={140} />
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
