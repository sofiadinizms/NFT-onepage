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
  toggle: () => void,
  isOpen: boolean,
}

const Sidebar: React.FC<SidebarProps> = ({toggle, isOpen}) => {

  return(
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle} data-testid='iconButton'>
        <CloseIcon />
      </Icon>
      <SidebarWrapper data-testid='sidebar'>
        <SidebarMenu>
          <SidebarLink to="/api/banner" onClick={toggle}> Início </SidebarLink>
          <SidebarLink to="/api/goals" onClick={toggle}> Nossos objetivos </SidebarLink>
          <SidebarLink to="/api/contentcard" onClick={toggle}> Benefícios </SidebarLink>
          <SidebarLink to="/api/contentcard" onClick={toggle}> Contate-nos </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='footer'>Download</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;