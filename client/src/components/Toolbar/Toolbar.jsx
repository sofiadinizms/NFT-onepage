import React from 'react'

import '../SideDrawer/DrawerToggleButton'
import DrawerToogleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

export default props =>
	<header className="toolbar">
		<nav className="toolbar__navigation">

			<div className="toolbar__logo"><a href="/">THE LOGO</a></div>
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<ul>
					<li><a href="/">Quem somos</a></li>
					<li><a href="/">Nossos serviços</a></li>
					<li><a href="/">Nossos clientes</a></li>
					<li><a href="/">Blog</a></li>
					<li><a href="/">Contato</a></li>
				</ul>
			</div>
			<div>
				<DrawerToogleButton/>
			</div>
		</nav>
	</header>
