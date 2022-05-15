import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarMenu,
  SidebarRoute
} from './Sidedbar.elements';

type SidebarProps = {
  toggle: (ev: any) => void,
  isOpen: boolean,
}

const Sidebar: React.FC<SidebarProps> = ({toggle, isOpen}) => {
  return(
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="footer" onClick={toggle}> About </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}> Discover </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}> Services </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}> Sign Up </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='footer'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;