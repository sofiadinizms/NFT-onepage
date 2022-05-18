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

type NavbarProps = {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({toggle}) => {
  return(
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/footer' onClick={toggle}>Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='footer' onClick={toggle}>Sobre nós</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='footer' onClick={toggle}>Conteúdos</NavLinks>
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