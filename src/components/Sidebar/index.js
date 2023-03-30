import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='sobre' onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to='funcionalidades' onClick={toggle}>Fucionalidades</SidebarLink>
                    <SidebarLink to='contato' onClick={toggle}> Contato</SidebarLink>
                    <a href="https://www.scielo.br/j/rdpsi/a/RpX434mLxwCh976f4b3dKqw/?lang=pt#:~:text=As%20pesquisas%20demonstram%20que%20a,da%20ansiedade%2C%20tens%C3%A3o%20e%20depress%C3%A3o./">BMC - Mental Move</a>
                    <a href="https://www.blackbox-vr.com/the-game/">BMC - Virtual Reality</a>
                    <a href="https://play.google.com/store/apps/details?id=com.hevy&hl=pt_BR&gl=US">BMC - Aplicativo</a>


                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Área administrativa</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar