import React, {useState} from 'react';
import './Contact.css'
import contact from "./../assets/contact.jpg"



function Contact () {
  const [isActive, setIsActive] = useState(false);

  const [value, setValue] = useState('');

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <div className="contact">
      <div className="info">
        <h1>Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="label-float">
          <input 
            type="text"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder=""/>
          <label className={ isActive ? "Active" : ""}>Nome</label>
        </div>
        <div className="info_client">
          <div className="label-float">
            <input
            type="text"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder=""/>
            <label className="email_phone">E-mail</label>
          </div>
          <div className="label-float">
            <input
            type="text"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder=""/>
            <label className="email_phone">Telefone</label>
          </div>
        </div>
        <div className="label-float">
          <input
          type="text"
          value={value}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder=""/>
          <label className={ isActive ? "Active" : ""}>Assunto</label>
        </div>
        <div className="label-float">
          <input
          type="text"
          value={value}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder=""/>
          <label className={ isActive ? "Active" : ""}>Mensagem</label>
        </div>
        <button type="submit">Enviar</button>
      </div>
      <div className="image_delta">
        <img src ={contact} alt=""/>        
      </div>
    </div>
  )
}

export default Contact;