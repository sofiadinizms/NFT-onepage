import React, {Component} from 'react';
import Slider from "react-slick";
import './OurClients.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//importing images
import Humberto from '../Assets/humberto-chavez.jpg'
import Humphrey from '../Assets/humphrey-muleba.jpg'

export default class OurClients extends Component{
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };

    return (
      <div className='OurClients'>
        <h2 id='title'>Nossos clientes</h2>
        <Slider {...settings}>
          <div className='client'>
            <img className='client_photo' src='Humberto' alt='Humberto'></img>
            <p className='testimony'>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 1</h3>
          </div>
          <div className='client'>
          <p className='testimony'>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 2</h3>
          </div>
          <div className='client'>
          <p className='testimony'>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 3</h3>
          </div>
          <div className='client'>
          <p className='testimony'>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 4</h3>
          </div>
          <div className='client'>
          <p className='testimony'>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 5</h3>
          </div>
          <div className='client'>
          <p className='testimony'>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
