import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Anton', sans-serif;
  }
  *{
    font-family: 'Anton', sans-serif;
    box-sizing: border-box;
    user-select: none;
  }
`;

export default GlobalStyle;
