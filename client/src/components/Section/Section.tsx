import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Title1, 
  Container,
  Subtitle,
  Description,
  Picture,
  TextContainer
 } from './Section.elements';

import testImage from '../../Assets/test_image.svg';

 type SectionProps = {
  title: string,
  subtitle: string,
  text: string,
  image: string,
  orderImg: number,
  orderText: number
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  text,
  image,
  orderImg,
  orderText
} : SectionProps) => {
  // const [posts, setPosts] = useState([]);

  // const loadPosts = async () => {
  //   const res = await axios.get('http://localhost:3001/api/posts');
  //   setPosts(res.data);
  // };

  // useEffect(() => {
  //   loadPosts();
  // }, []);

  return (
    <Container bkgColor='darkPurple'>
      {/* {posts?.map(({ _id, name, image }) => ( */}
        {/* <div key={_id} className="post-card"> */}
          {/* <img src={image[0]?.url} alt="Post de Exemplo"/> */}
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
