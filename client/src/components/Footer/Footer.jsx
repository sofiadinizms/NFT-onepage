import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from '../Assets/Deltaodontologia-logo02.png'
import Instagram_icon from '../Assets/Instagram_icon.svg'
import Phone_icon from '../Assets/Phone_icon.svg'

import './Footer.css';

function Footer() {
  const [footer, setFooter] = useState([]);

  const loadFooter = async () => {
    const res = await axios.get('http://localhost:3001/api/footers');
    setFooter(res.data);
  };

  useEffect(() => {
    loadFooter();
  }, []);

  return (
    <div className="footer">
      {footer?.map(({address, phone, instagram}) => (
        <div className="footer_infos">
          <div className="contact_footer">
            <p>
              <img src={Phone_icon}/>
              {phone}
            </p>
            <p>
              <img src={Instagram_icon}/>
              <a href="https://instagram.com/">{instagram}</a>              
            </p>
            <p>Nos acompanhe nas redes sociais!</p>
          </div>
          <div className="logo_footer">
            <img src={Image}/>
          </div>          
          <div className="adress_credits">
            <p>Endereço: {address}</p>
          </div> 
        </div>
      ))}
    </div>
  );
}

export default Footer;
