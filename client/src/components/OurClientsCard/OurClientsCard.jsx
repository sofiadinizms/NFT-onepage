<<<<<<< Updated upstream
import React from 'react';
=======
import React, {useEffect, useState} from 'react';
import axios from 'axios';
>>>>>>> Stashed changes

function OurClientsCard(props){
  
  return(
<<<<<<< Updated upstream
    <>
      <div className='client'>
        <div className="image">
          <img className='client_photo' src={props.image[0]?.url} alt='Humberto' />
        </div>
        <div className='text'>
          <p className='testimony'>{props.testimony}</p>
          <h3 className='name'>{props.name}</h3>
        </div>
      </div>
    </>
=======
    <div className='client'>
      <div className="image">
        <img className='client_photo' src={props.image[0]?.url} alt='Humberto' />
      </div>
      <div className='text'>
        <p className='testimony'>{props.testimony}</p>
        <h3 className='name'>{props.name}</h3>
      </div>
    </div>
>>>>>>> Stashed changes
  );
}

export default OurClientsCard;