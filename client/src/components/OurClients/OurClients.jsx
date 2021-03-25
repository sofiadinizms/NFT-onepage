import React,{useState, useEffect} from 'react';
import OurClientsCardMobile from '../OurClientsCardMobile';
import OurClientsCard2 from '../OurClientsCard2';
import OurClientsCard from '../OurClientsCard';
import Slider from "react-slick";
import axios from 'axios';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import './OurClients.css';

function OurClients(){
  const [ourClients, setOurClients] = useState([]);

  const loadOurClients = async () => {
    const res = await axios.get('http://localhost:3001/api/ourclients');
    setOurClients(res.data);
  };

  useEffect(() => {
    loadOurClients();
  }, []);

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          rows: 1,
        }
      }
    ],
  };

  return (
    <div className='OurClients' id='NossosClientes'>
      <div className='section'>
        <div className="titleOurClientsBox">
          <h2 id='titleOurClients'>Nossos clientes</h2>          
        </div>
        <Slider {...settings}>
          {ourClients?.map(({_id, image, testimony, name}, i) =>{
            return(
              <>
            {(i%2===0) ? (<OurClientsCard 
            image={image}
            testimony={testimony}
            name={name}
            key={_id}/>):(<OurClientsCard2
              image={image}
              testimony={testimony}
              name={name}
              key={_id}/>)}
              <OurClientsCardMobile
              image={image}
              testimony={testimony}
              name={name}
              key={_id}/>
            </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default OurClients;
