import React from 'react'
import { FiSearch, FiUser, FiShoppingCart, FiBell, FiMenu } from "react-icons/fi";
import { AuthContext } from '../../provider/auth'
import Sidebar from '../Sidebar/Sidebar';
import {
    HeaderContainer,
    HeaderLogoContainer,
    HeaderTitle,
    HeaderList,
    HeaderListElement,
    HeaderIconsContainer,
    HeaderIconsItem,
    HeaderContent,
    HeaderMenu
} from './HeaderElements'

const Header = () => {
    const { isOpen, setIsOpen } = React.useContext(AuthContext);

    return (
        <HeaderContainer>
            <Sidebar />
            <HeaderContent>
                <HeaderLogoContainer>
                    <HeaderTitle>limo</HeaderTitle>
                </HeaderLogoContainer>

                <HeaderList>
                    <HeaderListElement>Home</HeaderListElement>
                    <HeaderListElement>Shop</HeaderListElement>
                    <HeaderListElement>Products</HeaderListElement>
                    <HeaderListElement>Pages</HeaderListElement>
                    <HeaderListElement>Blog</HeaderListElement>
                    <HeaderListElement>Contact</HeaderListElement>
                </HeaderList>
            </HeaderContent>

            <HeaderIconsContainer>
                <HeaderIconsItem>
                    <FiSearch size="18" />
                </HeaderIconsItem>
                <HeaderIconsItem>
                    <FiUser size="18" />
                </HeaderIconsItem>
                <HeaderIconsItem>
                    <FiShoppingCart size="18" />
                </HeaderIconsItem>
                <HeaderIconsItem>
                    <FiBell size="18" />
                </HeaderIconsItem>
            </HeaderIconsContainer>

            <HeaderMenu onClick={() => setIsOpen(!isOpen)}>
                <FiMenu size="28" />
            </HeaderMenu>
        </HeaderContainer >
    )
}

export default Header