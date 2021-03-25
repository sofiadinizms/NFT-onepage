import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import '../Modal/Modal.css'



function Modal (props) {

const [isUsernameActive, setIsUsernameActive] = useState(false);
const [isEmailActive, setIsEmailActive] = useState(false);
const [isPhoneActive, setIsPhoneActive] = useState(false);

const [link, setLink] = useState(false)
const [username, setUsername] = useState('') ;
const [email, setEmail] = useState('') ;
const [phone, setPhone] = useState('') ;
const [subject, setSubject] = useState('Interesse') ;
const [value, setValue] = useState('Esse usuário demonstrou interesse pelos conteúdos disponibilizados no site da Delta Odontologia!');

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


return(
  <Popup
    trigger={
		<div className="content">
			<img src={props.image[0]?.url} alt='conteudo'/>
			<p>{props.title}</p>
		</div>
		}
    modal
    nested
  >
    {close => (
      <div className="modal">
        
        <div className="header"> Preencha as informações para ter acesso ao conteúdo gratuito:   </div>
        <div>
          {' '}
					<div className="form">
						<form method='POST' onSubmit={(e) => handleSubmit(e)}>
							<div className="form-label">
								<input className="form-input" 
									type="text"
									username={username}
									onChange={ (e) => handleUsernameChange(e.target.value) }
									placeholder=""
								/>
								<label className={ isUsernameActive ? "usernameActive" :"usernameInactive"}>Nome</label>
							</div>

							<div className="form-label">
								<input className="form-input"
									type="text"
									username={email}
									onChange={ (e) => handleEmailChange(e.target.value) }
									placeholder=""
								/>
								<label className={ isEmailActive ? "usernameActive" : "usernameInactive"}>E-mail</label>
							</div>

							<div className="form-label">
								<input id="telefone" className="form-input" 
									type="text"
									username={phone}
									onChange={(e) => handlePhoneChange(e.target.value)}
									placeholder=""
								/>
								<label className={ isPhoneActive ? "usernameActive" : "usernameInactive"}>Telefone</label>
							</div>
							{link ? <a href={props.link}><button className="BotaoBaixar" type="submit" onClick={() => setLink(!link)}>Acessar Conteúdo</button></a> : <button className="BotaoBaixar" type="submit" onClick={() => setLink(!link)}>Enviar</button>}
						</form>
					</div>
          
        </div>
      </div>
    )}
  </Popup>
)
}

export default Modal;