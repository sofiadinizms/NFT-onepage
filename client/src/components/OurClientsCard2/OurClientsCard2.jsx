import React from 'react';

function OurClientsCard2(props){
  
  return(
    <>
      <div className='client'>
        <div className='text'>
          <p className='testimony left'>{props.testimony}</p>
          <h3 className='name nameLeft'>{props.name}</h3>
        </div>
        <div className="image">
          <img className='client_photo' src={props.image[0]?.url} alt='Cliente' />
        </div>
      </div>
    </>
  );
}

export default OurClientsCard2;