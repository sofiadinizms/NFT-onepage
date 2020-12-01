import React from 'react';
import './Contact.css'
import contact from "./../assets/contact.jpg"

function Contact () {
  return (
    <div className="contact">
      <div className="info">
        <h1>Contato</h1>
        <p>subtext contact</p>
        <input placeholder="Nome"/>
        <div className="info_client">
          <input placeholder="E-mail"/>
          <input placeholder="Telefone"/>
        </div>
        <input placeholder="Assunto"/>
        <input placeholder="Mensagem"/>
        <button type="submit">Enviar</button>
      </div>
      <div className="image_delta">
        <img src ={contact} alt=""/>        
      </div>
    </div>
  )
}

export default Contact;