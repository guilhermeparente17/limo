import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;
    color: #525252;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


export const HeaderLogoContainer = styled.div`
    margin: 0px 80px 0px 100px;

    @media screen and (max-width: 550px){
        margin: 0px 0px 0px 30px;
    }

`

export const HeaderTitle = styled.h2`
    text-transform: uppercase;
`

export const HeaderList = styled.ul`
    display: flex;

    @media screen and (max-width: 950px){
        display: none;
    }
`

export const HeaderListElement = styled.li`
    margin-right: 25px;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`

export const HeaderIconsContainer = styled.ul`
    display: flex;
    margin-right: 100px;

    @media screen and (max-width: 950px){
        display: none;
    }
`

export const HeaderIconsItem = styled.li`
    margin-right: 25px;
    cursor: pointer;
`

export const HeaderMenu = styled.div`
    display: none;
    margin-right: 30px;
    cursor: pointer;

    @media screen and (max-width: 950px){
        display: block;
    }
`