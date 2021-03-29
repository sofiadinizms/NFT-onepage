import {React, useState, useEffect} from 'react';
import axios from 'axios';

function ContentCard(){
  const [content, setContent] = useState([]);

  const loadContent = async () => {
    const res = await axios.get('https://delta-odontologia.herokuapp.com/content');
    setContent(res.data);
  };

  useEffect(() => {
    loadContent();
  }, []);

  return(
    <>
      {content?.map(({_id, title, image, link}) => (
        <a href={link}>
          <div className="content">
            <img src={image[0]?.url} alt='Capa do  Conteúdo' />
            <p>{title}</p>
          </div>
        </a>
      ))}
    </>
  );
}

export default ContentCard;