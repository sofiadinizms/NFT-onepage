import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {Services} from '..';

import './OurServices.css';

function OurServices (){  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3    
  };
  return (
    <div className="ourServicesSection">
      <h1>Nossos serviços</h1>
        <Slider {...settings}>
          <Services/>
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

