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
			<li><a href='#QuemSomosNos'>Quem somos</a></li>
			<li><a href='#NossosServicos'>Nossos serviços</a></li>
			<li><a href='#NossosClientes'>Nossos clientes</a></li>
			<li><a href='#NossoBlog'>Blog</a></li>
			<li><a href='#NossoContato'>Contato</a></li>
		</ul>
	</nav>
	)
};

export default sideDrawer;