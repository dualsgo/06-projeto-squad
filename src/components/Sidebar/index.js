import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkContact } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to='locations' onClick={toggle}>Fucionalidades</SidebarLink>
                    <SidebarLink to='memberships' onClick={toggle}>Planos</SidebarLink>
                    <SidebarLinkContact to='/contact' onClick={toggle}> Contato</SidebarLinkContact>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Log In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar