import React from 'react';

function OurClientsCardMobile(props){
  
  return(
    <>
      <div className='clientMobile'>
        <div className="imageMobile">
          <img className='clientPhotoMobile' src={props.image[0]?.url} alt='Cliente'/>
        </div>
        <div className='textMobile'>
          <p className='testimonyMobile'>{props.testimony}</p>
          <h3 className='nameMobile'>{props.name}</h3>
        </div>
      </div>
    </>
  );
}

export default OurClientsCardMobile;