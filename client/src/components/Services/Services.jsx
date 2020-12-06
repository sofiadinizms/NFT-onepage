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
      {services?.map(({ _id, title, image }) => (
        <div key={_id} className="service-card">
          <img src={image[0]?.url} alt="Imagem do serviço"/>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
