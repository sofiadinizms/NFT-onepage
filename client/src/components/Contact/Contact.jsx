import contact from "./../assets/contact.jpg"
import React, {useState} from 'react';
import axios from 'axios';
import './Contact.css'



function Contact () {
  const [isUsernameActive, setIsUsernameActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPhoneActive, setIsPhoneActive] = useState(false);
  const [isSubjectActive, setIsSubjectActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [username, setUsername] = useState('') ;
  const [email, setEmail] = useState('') ;
  const [phone, setPhone] = useState('') ;
  const [subject, setSubject] = useState('') ;
  const [value, setValue] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.post('http://localhost:3001/api/contact', {
        name:username,
        email,
        phone,
        subject,
        message:value,
      });

      setUsername('');
      setEmail('');
      setPhone('');
      setSubject('');
      setValue('');

      console.log('Email enviado com sucesso!');
    } catch (err) {
      console.log(err?.response || err);
    }
  }

  function handleUsernameChange(text) {
    setUsername(text);

    if (text !== '') {
      setIsUsernameActive(true);
    } else {
      setIsUsernameActive(false);
    }
  }

  function handleEmailChange(text) {
    setEmail(text);

    if (text !== '') {
      setIsEmailActive(true);
    } else {
      setIsEmailActive(false);
    }
  }

  function handlePhoneChange(text) {
    setPhone(text);

    if (text !== '') {
      setIsPhoneActive(true);
    } else {
      setIsPhoneActive(false);
    }
  }

  function handleSubjectChange(text) {
    setSubject(text);

    if (text !== '') {
      setIsSubjectActive(true);
    } else {
      setIsSubjectActive(false);
    }
  }
  
  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <form method='POST' className="contact" onSubmit={(e) => handleSubmit(e)} id="NossoContato">
      <div className="info">
        <h1 className="info_contact">Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="label-float">
          <input 
            type="text"
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
            placeholder=""/>
            <label className={ isUsernameActive ? "usernameActive" : "usernameInactive"}>Nome</label>
        </div>
        <div className="info_client">
          <div className="label-float">
            <input
            type="text"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder=""/>
            <label className={ isEmailActive ? "emailActive" : "email_phone"}>E-mail</label>
          </div>
          <div className="label-float">
            <input
            type="text"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder=""/>
            <label className={ isPhoneActive ? "phoneActive" : "email_phone"}>Telefone</label>
          </div>
        </div>
        <div className="label-float">
          <input
          type="text"
          value={subject}
          onChange={(e) => handleSubjectChange(e.target.value)}
          placeholder=""/>
          <label className={ isSubjectActive ? "subjectActive" : ""}>Assunto</label>
        </div>
        <div className="label-float">
          <input
          type="text"
          value={value}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder=""/>
          <label className={ isActive ? "active" : ""}>Mensagem</label>
        </div>
        <button className="button_ontact" type="submit">Enviar</button>
      </div>
      <div className="image_delta">
        <img src ={contact} alt=""/>        
      </div>
    </form>
  )
}

export default Contact;