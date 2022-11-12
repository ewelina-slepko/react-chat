import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  line-height: 1.75;
  color: #dadada;
  }
  
 * {
  box-sizing: border-box;
 }

  body {
  margin: 0;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif,serif;
  font-size: 16px;
  }
  
  html, body, #root {
  height: 100%;
  }
  
  #root {
  display: flex;
  flex-direction: column;
  }
  
`;

export default GlobalStyle;
