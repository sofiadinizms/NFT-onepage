import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Title1 } from './Section.elements';


type SectionProps = {
  text: string,
  image: string
}

const Section: React.FC<SectionProps> = ({
  text,
  image
} : SectionProps) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await axios.get('http://localhost:3001/api/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="post-list">
      {posts?.map(({ _id, name, image }) => (
        <div key={_id} className="post-card">
          {/* <img src={image[0]?.url} alt="Post de Exemplo"/> */}
          <p>{name}</p>
          <Title1>Oioioi</Title1>
        </div>
      ))}
    </div>
  );
}

export default Section;
