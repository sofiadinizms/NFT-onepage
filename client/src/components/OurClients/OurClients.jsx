import React,{useState, useEffect} from 'react';
import Slider from "react-slick";
import './OurClients.css';
import OurClientsCard from '../OurClientsCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

import Humberto from '../Assets/humberto-chavez.png';
import Humphrey from '../Assets/humphrey-muleba.png';
import ArrowPrev from '../Assets/Path_prev.png';
import ArrowNext from '../Assets/Path_next.png';
import Rectangle from '../Assets/Rectangle.png';
import Vector_9 from '../Assets/Vector_9.png';
import Vector_10 from '../Assets/Vector_10.png';
import Vector_21 from '../Assets/Vector_21.png';



function OurClients(){
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
  };

  return (
    <div className='OurClients'>
      <h2 id='title'>Nossos clientes</h2>
      <img className='wallpaperImage' id='rightUp' src={Vector_9} ></img>
      <img className='wallpaperImage' id='leftDown' src={Vector_10} ></img>
      <img className='wallpaperImage' id='rightDown' src={Vector_21} ></img>
      <Slider {...settings}>
        {clients?.map(({_id, image, testimony, name}) =>{
          return(
           <OurClientsCard 
           image={image?.url}
           testimony={testimony}
           name={name}
           key={_id}/>   
          );
        })}
      </Slider>
    </div>
  );
}

export default OurClients;
