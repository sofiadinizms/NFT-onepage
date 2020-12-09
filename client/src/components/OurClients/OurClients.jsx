import React,{useState, useEffect} from 'react';
import Slider from "react-slick";
import './OurClients.css';
import OurClientsCard from '../OurClientsCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

<<<<<<< Updated upstream
function OurClients(){
  const [ourClients, setOurClients] = useState([]);
=======
import ArrowPrev from '../Assets/Path_prev.png';
import ArrowNext from '../Assets/Path_next.png';
import Rectangle from '../Assets/Rectangle.png';
import Vector_9 from '../Assets/Vector_9.png';
import Vector_10 from '../Assets/Vector_10.png';
import Vector_21 from '../Assets/Vector_21.png';
>>>>>>> Stashed changes

  const loadOurClients = async () => {
    const res = await axios.get('http://localhost:3001/api/ourclients');
    setOurClients(res.data);
  };

  useEffect(() => {
    loadOurClients();
  }, []);

<<<<<<< Updated upstream
=======
function OurClients(){

  const [ourClients, setOurClients] = useState([]);

  const loadOurClients = async () => {
    const res = await axios.get('http://localhost:3001/api/ourClients');
    setOurClients(res.data);
  };

  useEffect(() => {
    loadOurClients();
  }, []);
>>>>>>> Stashed changes
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    arrows: true,
  };

  return (
    <div className='OurClients'>
<<<<<<< Updated upstream
      <div className='section'>
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
=======
      <h2 id='title'>Nossos clientes</h2>
      <Slider {...settings}>
          {ourClients?.map((OurClients, index) =>(
           <OurClientsCard 
           image={OurClients.image}
           testimony={OurClients.testimony}
           name={OurClients.name}
           key={index}/>
          ))}
      </Slider>
>>>>>>> Stashed changes
    </div>
  );
}

export default OurClients;
