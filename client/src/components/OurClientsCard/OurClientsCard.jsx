import React, {useEffect, useState} from 'react';

function OurClientsCard(props){
  const [clients, setClients] = useState([]);

  const loadClients = async () => {
    const res = await axios.get('http://localhost:3001/api/ourclients');
    setClients(res.data);
  };

  useEffect(() => {
    loadClients();
  }, []);

  return(
    <div>
      {clients?.map(({_id, image, testimony, name}) =>{(
        <div className='client'>
          <div className="image">
            <img className='client_photo' src={props.image.url} alt='Humberto' />
          </div>
          <div className='text'>
            <p className='testimony'>{props.testimony}</p>
            <h3 className='name'>{props.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurClientsCard;