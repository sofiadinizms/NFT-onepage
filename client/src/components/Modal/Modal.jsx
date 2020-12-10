import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Modal/Modal.css'


function Modal (props) {

const [isUsernameActive, setIsUsernameActive] = useState(false);
const [isEmailActive, setIsEmailActive] = useState(false);
const [isPhoneActive, setIsPhoneActive] = useState(false);


const [username, setUsername] = useState('') ;
const [email, setEmail] = useState('') ;
const [phone, setPhone] = useState('') ;

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
    trigger={<div className="content">
		<img src={props.image} />
		<p>{props.name}</p>
	</div>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        
        <div className="header"> Preencha as informações para ter acesso ao conteúdo gratuito:   </div>
        <div>
          {' '}
					<div className="form">
						<form>
							<div className="form-label">
								<input className="form-input" 
									type="text"
									username={username}
									onChange={ (e) => handleUsernameChange(e.target.username) }
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
								<label className={ isEmailActive ? "emailActive" : "email_phone"}>E-mail</label>
							</div>

							<div className="form-label">
								<input id="telefone" className="form-input" 
									type="text"
									username={phone}
									onChange={(e) => handlePhoneChange(e.target.value)}
									placeholder=""
								/>
								<label className={ isPhoneActive ? "phoneActive" : "email_phone"}>Telefone</label>
							</div>
							<button className="BotaoBaixar" type="submit">Baixar pdf</button>
						</form>
					</div>
          
        </div>
      </div>
    )}
  </Popup>
)
}

export default Modal;