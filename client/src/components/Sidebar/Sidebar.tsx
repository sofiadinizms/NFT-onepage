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
          <SidebarLink to="footer" onClick={toggle}> Início </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}> Sobre nós </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}> Conteúdos </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='footer'>Download</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;