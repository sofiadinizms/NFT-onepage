import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {Services} from '..';

import './OurServices.css';

function OurServices (){  
  const [services, setServices] = useState([]);

  const loadServices = async () => {
    const res = await axios.get('https://delta-odontologia.herokuapp.com/api/services');
    setServices(res.data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="ourServicesSection" id="NossosServicos">
      <h1 className="titleServices">Nossos serviços</h1>
        <Slider {...settings}>
        {services?.map(( OurServices, index) => (
          <Services
          key = {index}
          title = {OurServices.title}
          image = {OurServices.image}
          description = {OurServices.description}
          />))}
        </Slider>                
    </div> 
    );
};


export default OurServices;
