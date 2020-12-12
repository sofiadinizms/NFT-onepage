import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../Assets/logo_name.png'

import './Banner.css';

function Banner() {
  const [banners, setBanners] = useState([]);

  const loadBanners = async() => {
    const res = await axios.get('https://delta-odontologia.herokuapp.com/api/banners');
    setBanners(res.data);
  }

  useEffect(() => {
    loadBanners();
  }, [])

  return (
    <div class="banner">
      <div>
		    {banners?.map(({_id, valueProposition, valuePropositionDescription}) => (
          <div>
            <div className="container">
              <img id="logo" src={Logo} alt="Logo Delta Dental"></img>
            </div>
            <div class="banner_text">
              <h1 id="title">{valueProposition}</h1>
              <h2 id="description">{valuePropositionDescription}</h2>
              <a id="our_services" href="/">Nossos serviços</a>
            </div>
          </div>
		    ))}
        <div class="container">
        <a data-scroll href="#full">
       <div class="arrow"></div>
        </a>
      </div>
      </div>
    </div>
  );
}

export default Banner;