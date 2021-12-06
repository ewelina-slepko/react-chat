import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  line-height: 1.75;
  font-size: 1.25rem;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif,serif;
  }
`;

export default GlobalStyle;
