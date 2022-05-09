import React from 'react';
import { 
  Title1, 
  Container,
  Subtitle,
  Description,
  Picture,
  TextContainer
} from './Section.elements';

type SectionProps = {
title: any,
subtitle: any,
text: any,
image: any,
orderImg: number,
orderText: number,
bkgColor: string
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  text,
  image,
  orderImg,
  orderText,
  bkgColor
} : SectionProps) => {

  return (
    <Container bkgColor={bkgColor}>
          <Picture src={image} orderImg={orderImg}></Picture>
          <TextContainer orderText={orderText}>
            <Title1>{title}</Title1>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{text}</Description>
          </TextContainer>
    </Container>
  );
}

export default Section;
