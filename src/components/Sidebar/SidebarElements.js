import styled from 'styled-components';

import { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
 /* 0% { height: 100vh; width: 380px; }
 30% { height: 100vh; width: 380px;  opacity: 1 }
 40% { height: 100vh; width: 405px; opacity: 0.3; }
 100% { height: 100vh; width: 405px; opacity: 0.6; } */

 from {
     height: 0px;
     width: 0px;
     opacity: 0;
 }

 to {
     height: 100vh;
     width: 100%;
     opacity: 1;
 }
`

export const SidebarContainer = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    background-image: linear-gradient(to top, #fff, #FFEDE6);

    animation-name: ${breatheAnimation};
    animation-duration: .3s;
`;

export const SidebarHeader = styled.header`
    color: #525252;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`;

export const SidebarTitle = styled.span`
    text-transform: uppercase;
`;

export const SidebarIcon = styled.div`
    cursor: pointer;
`;

export const SidebarMenu = styled.div`
    color: #525252;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const SidebarMenuItem = styled.div`
    margin: 30px 20px;
    font-size: 18px;
    cursor: pointer;
`;

export const SidebarMenuIcons = styled.div`
    color: #525252;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const SidebarMenuIcon = styled.div`
    margin: 0px 15px;
    cursor: pointer;
`;