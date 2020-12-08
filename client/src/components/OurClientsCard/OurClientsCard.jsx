import React from 'react';

function OurClientsCard(props){
  
  return(
    <div>
      <div className='client'>
        <div className="image">
          <img className='client_photo' src={props.image[0]?.url} alt='Humberto' />
        </div>
        <div className='text'>
          <p className='testimony'>{props.testimony}</p>
          <h3 className='name'>{props.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default OurClientsCard;