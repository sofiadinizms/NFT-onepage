import React,{useState, useEffect} from 'react';
import Slider from "react-slick";
import './OurClients.css';
import OurClientsCard from '../OurClientsCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function OurClients(){
  const [ourClients, setOurClients] = useState([]);

  const loadOurClients = async () => {
    const res = await axios.get('http://localhost:3001/api/ourclients');
    setOurClients(res.data);
  };

  useEffect(() => {
    loadOurClients();
  }, []);

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
  };

  return (
    <div className='OurClients'>
      <h2 id='title'>Nossos clientes</h2>
      <Slider {...settings}>
        {ourClients?.map(({_id, image, testimony, name}) =>{
          return(
           <OurClientsCard 
           image={image}
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
