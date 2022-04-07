import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color:inherit;
    text-decoration: none;
  }
  
  button{
    padding: 0;
    margin: 0;
    border: none;
    background: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
