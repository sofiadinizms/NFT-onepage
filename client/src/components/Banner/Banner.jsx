import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../Assets/logo_name.png'

import './Banner.css';

function Banner() {
  const [banners, setBanners] = useState([]);

  const loadBanners = async() => {
    const res = await axios.get('http://localhost:3001/api/banners');
    setBanners(res.data);
  }

  useEffect(() => {
    loadBanners();
  }, [])

  return (
    <div class="banner">
      <div className="container">
		    {banners?.map(({_id, valueProposition, valuePropositionDescription}) => (
			    <div>
            <img id="logo" src={Logo} alt="Logo Delta Dental"></img>
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