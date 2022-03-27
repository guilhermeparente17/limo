import React from 'react'
import { FiBell, FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import { AuthContext } from '../../provider/auth';

import {
    SidebarContainer,
    SidebarHeader,
    SidebarTitle,
    SidebarIcon,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuIcons,
    SidebarMenuIcon
} from './SidebarElements'

const Sidebar = () => {
    const { isOpen, setIsOpen } = React.useContext(AuthContext);
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarHeader>
                <SidebarTitle>Limo</SidebarTitle>
                <SidebarIcon>
                    <FiX size="38" onClick={() => setIsOpen(!isOpen)} />
                </SidebarIcon>
            </SidebarHeader>

            <SidebarMenuIcons>
                <SidebarMenuIcon>
                    <FiSearch size="28" />
                </SidebarMenuIcon>

                <SidebarMenuIcon>
                    <FiUser size="28" />
                </SidebarMenuIcon>

                <SidebarMenuIcon>
                    <FiShoppingCart size="28" />
                </SidebarMenuIcon>

                <SidebarMenuIcon>
                    <FiBell size="28" />
                </SidebarMenuIcon>
            </SidebarMenuIcons>

            <SidebarMenu>
                <SidebarMenuItem>Home</SidebarMenuItem>
                <SidebarMenuItem>Shop</SidebarMenuItem>
                <SidebarMenuItem>Products</SidebarMenuItem>
                <SidebarMenuItem>Pages</SidebarMenuItem>
                <SidebarMenuItem>Blog</SidebarMenuItem>
                <SidebarMenuItem>Contact</SidebarMenuItem>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar