import React from 'react';
import './Contact.css'
import contact from "./../assets/contact.jpg"

function Contact () {
  return (
    <div className="contact">
      <div className="info">
        <h1>Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="label-float">
          <input type="text" placeholder=""/>
          <label>Nome</label>
        </div>
        <div className="info_client">
          <div className="label-float">
            <input type="text" placeholder=""/>
            <label className="email_phone">E-mail</label>
          </div>
          <div className="label-float">
            <input type="text" placeholder=""/>
            <label className="email_phone">Telefone</label>
          </div>
        </div>
        <div className="label-float">
          <input type="text" placeholder=""/>
          <label>Assunto</label>
        </div>
        <div className="label-float">
          <input type="text" placeholder=""/>
          <label>Mensagem</label>
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