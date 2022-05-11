import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../Section';
import { imageConverter } from '../../Utils/get-image';


const GenericSections: React.FC = () => {
  const [section, setSection] = useState([]);

  const loadSections = async () => {
    const res = await axios.get('http://localhost:3001/api/sections');
    setSection(res.data);
  };

  useEffect(() => {
    loadSections();
  }, []);

  return (
    <div>
      {section?.map(({ _id, title, subtitle, text, image, orderText, orderImg, background}) => (
          <Section 
          key={_id} 
          image={imageConverter(image)} 
          title={title} 
          subtitle={subtitle} 
          text={text} 
          orderText={orderText} 
          orderImg={orderImg}
          bkgColor={background}/>
      ))} 
    </div>
)}

export default GenericSections;