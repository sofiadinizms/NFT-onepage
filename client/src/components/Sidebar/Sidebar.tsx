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
          <SidebarLink to="/api/goals" onClick={toggle}> Sobre nós </SidebarLink>
          <SidebarLink to="/api/contentcard" onClick={toggle}> Conteúdos </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='footer'>Download</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;