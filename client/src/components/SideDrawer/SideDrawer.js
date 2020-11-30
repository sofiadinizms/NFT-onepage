import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => (
	<nav className="side-drawer">
		<ul>
			<li><a href="/">Quem Somos</a></li>
			<li><a href="/">Nossos serviços</a></li>
			<li><a href="/">Nossos clientes</a></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Contato</a></li>
		</ul>
	</nav>
);

export default sideDrawer;