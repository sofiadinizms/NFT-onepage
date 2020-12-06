import { useState, useEffect } from 'react';
import axios from 'axios';

import './Services.css';

function Services() {
  const [services, setServices] = useState([]);

  const loadServices = async () => {
    const res = await axios.get('http://localhost:3001/api/services');
    setServices(res.data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <div className="services-list">
      {services?.map(({ _id, title, image, description }) => (
        <div key={_id} className="service-card">
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={image[0]?.url} alt="Imagem do serviço"/>          
        </div>
      ))}
    </div>
  );
}

export default Services;
