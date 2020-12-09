import React from 'react'

import './DrawerToggleButton.css'

const drawerToogleButton = props => (
	<button className="toggle-button" onClick={props.click}>
		<div className="toggle-button__line" id="tg1"></div>
		<div className="toggle-button__line" id="tg2"></div>
		<div className="toggle-button__line" id="tg3"></div>
		<div className="toggle-button__line" id="tg4"></div>
	</button>
);

export default drawerToogleButton;