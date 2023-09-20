import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './Navbar.elements';

import {ReactComponent as Logo} from '../../Assets/ColoredLogo.svg';

type NavbarProps = {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({toggle}) => {
  return(
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'><Logo /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/footer' onClick={toggle}>Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/footer' onClick={toggle}>Nosso objetivos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/footer' onClick={toggle}>Benefícios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/footer' onClick={toggle}>Contate-nos</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/footer' data-testid='download-button'>Download</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;