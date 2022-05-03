import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    html, body {
        height : 100%;
    }
    ul, li { margin:0; padding:0;}
    a { text-decoration: none; color: black;}
`;

export default GlobalStyle;
