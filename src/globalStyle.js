import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans', sans-serif;
        list-style: none;
    }
`;

export default GlobalStyle;