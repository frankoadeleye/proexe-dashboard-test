import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }

  html,
  body {
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-family: 'Overpass', sans-serif;
      overflow-x:hidden;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  div,a,button,p,input,small,code,span{
      font-family: inherit;
  }
  
  
`;

export default GlobalStyles;
