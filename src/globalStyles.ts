import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
  ${(props) => props.theme.fonts.primary};
  letter-spacing: 0.03em;

  }

  span {
    ${(props) => props.theme.fonts.secondary};
    letter-spacing: 0.03em;
  }

`;

export default GlobalStyle;
