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
    const res = await axios.get('http://localhost:3001/api/services');
    setServices(res.data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50vw",
    slidesToShow: 2,
    speed: 500,    
    arrows: true,
  };
  return (
    <div className="ourServicesSection">
      <h1>Nossos serviços</h1>
        <Slider {...settings}>
        {services?.map(( OurServices, index) => (
          <Services
          key = {index}
          title = {OurServices.title}
          image = {OurServices.image}
          description = {OurServices.description}
          />))}
        </Slider>          
      <div className="">botões</div>
    </div> 
    );
};


export default OurServices;


// import {
//   Services
// } from '../';



// function OurServices() {
//   const [services, setServices] = useState([]);

//   const loadServices = async () => {
//     const res = await axios.get('http://localhost:3001/api/services');
//     setServices(res.data);
//   };

//   useEffect(() => {
//     loadServices();
//   }, []);

//   return (
//     <div className="ourServicesSection">
//       <h1>Nossos serviços</h1>
//       <Services/>
//       <div className="">botões</div>
//     </div>  
//   );
// }

