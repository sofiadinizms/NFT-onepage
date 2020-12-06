import React, {Component} from 'react';
import Slider from "react-slick";
import './OurClients.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class OurClients extends Component{
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };

    return (//add the images to each client connected to the keystone 
      <div>
        <h2>Nossos clientes</h2>
        <Slider {...settings}>
          <div className='client'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 1</h3>
          </div>
          <div className='client'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 2</h3>
          </div>
          <div className='client'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 3</h3>
          </div>
          <div className='client'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 4</h3>
          </div>
          <div className='client'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 5</h3>
          </div>
          <div className='client'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing dit, sod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim vedam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Nome da pessoa/empresa 6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
