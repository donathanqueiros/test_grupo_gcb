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

  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
  display: none;
}

.react-horizontal-scrolling-menu--scroll-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }


`;

export default GlobalStyle;
