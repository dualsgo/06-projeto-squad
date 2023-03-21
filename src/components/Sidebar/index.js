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
                    <SidebarLink to='sobre' onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to='funcionalidades' onClick={toggle}>Fucionalidades</SidebarLink>
                    <SidebarLink to='planos' onClick={toggle}>Planos</SidebarLink>
                    <SidebarLinkContact to='/contato' onClick={toggle}> Contato</SidebarLinkContact>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Log In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar