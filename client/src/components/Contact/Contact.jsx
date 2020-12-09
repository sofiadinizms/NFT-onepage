import React, {useState} from 'react';
import './Contact.css'
import contact from "./../assets/contact.jpg"



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
    <div className="contact">
      <div className="info">
        <h1>Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="label-float">
          <input 
            type="text"
            username={username}
            onChange={(e) => handleUsernameChange(e.target.username)}
            placeholder=""/>
            <label className={ isUsernameActive ? "usernameActive" : "usernameInactive"}>Nome</label>
        </div>
        <div className="info_client">
          <div className="label-float">
            <input
            type="text"
            email={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder=""/>
            <label className={ isEmailActive ? "emailActive" : "email_phone"}>E-mail</label>
          </div>
          <div className="label-float">
            <input
            type="text"
            phone={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder=""/>
            <label className={ isPhoneActive ? "phoneActive" : "email_phone"}>Telefone</label>
          </div>
        </div>
        <div className="label-float">
          <input
          type="text"
          subject={subject}
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
        <button type="submit">Enviar</button>
      </div>
      <div className="image_delta">
        <img src ={contact} alt=""/>        
      </div>
    </div>
  )
}

export default Contact;