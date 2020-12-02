import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if(props.show){
		drawerClasses = 'side-drawer open';
	}
	return (
	<nav className={drawerClasses}>
		<ul>
			<li><a href="/">Quem Somos</a></li>
			<li><a href="/">Nossos serviços</a></li>
			<li><a href="/">Nossos clientes</a></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Contato</a></li>
		</ul>
	</nav>
	)
};

export default sideDrawer;