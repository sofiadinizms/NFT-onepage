//@ts-nocheck
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
  toggle: React.MouseEventHandler<HTMLButtonElement>
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
              <NavLinks to='/footer'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='footer'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='footer'>services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='footer'>sign up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/footer'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;