import React from 'react';

import './Services.css';

function Services(props) {
  
  return (
    <div className="services-list">  
      <div className="service-card">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.image[0]?.url} alt="Imagem do serviço"/>          
      </div> 
    </div>
  );
}

export default Services;
