import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFF;
    position: relative;
    width: 100%;
    background: '#FFF';
    color: '#000000';
    overflow-x: hidden;
  }
  body, input, button, h1, h2, h3, p, textarea {
    font-family: 'Jost';
  }
  a {
    text-decoration: none;
    color: unset;
  }
  button {
    cursor: pointer,
  }
  #root {
    position: relative;
    min-height: calc(100vh - 75px);
  }
`;

export default GlobalStyle;