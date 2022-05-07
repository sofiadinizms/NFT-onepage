import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../Section';

const GenericSections: React.FC = () => {
  const [section, setSection] = useState([]);

  const loadSections = async () => {
    const res = await axios.get('http://localhost:3001/api/section');
    setSection(res.data);
  };

  useEffect(() => {
    loadSections();
  }, []);

  return (
    <div>
      {section?.map(({ _id, title, subtitle, text, image }) => (
          <Section key={_id} image={image} title={title[0]} subtitle={subtitle[0]} text={text[0]} orderText={1} orderImg={0}/>
      ))} 
    </div>
)}

export default GenericSections;