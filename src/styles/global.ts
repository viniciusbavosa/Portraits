import { createGlobalStyle } from "styled-components";

const GlobalStyles =  createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-snap-type: y mandatory;
  }

  html, body, #root {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: #F5F5F5;
  }

  body, input, button {
    color: #252525;
    font-size: 16px;
    font-family: "Merriweather", serif;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export default GlobalStyles;