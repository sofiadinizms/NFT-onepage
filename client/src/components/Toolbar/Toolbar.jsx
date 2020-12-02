import React, { useState, useEffect } from 'react'

import '../SideDrawer/DrawerToggleButton'
import DrawerToogleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

function Toolbar(props) {

const [navbar, setNavbar] = useState(false);

const changeBackground = () => {
	if(window.scrollY >= 80){
		setNavbar(true)
	}else{
		setNavbar(false)
	}
}

window.addEventListener('scroll', changeBackground);

return (
	<header className={navbar ? 'toolbar active' : 'toolbar'}>
		<nav className="toolbar__navigation">

			<div className={navbar ? 'toolbar__logo active' : 'toolbar__logo'}><a href="/"></a></div>
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
				<div className="toolbar__toggle-button">
					<DrawerToogleButton click={props.drawerClickHandler}/>
				</div>
			</div>
		</nav>
	</header>
);
}
export default Toolbar