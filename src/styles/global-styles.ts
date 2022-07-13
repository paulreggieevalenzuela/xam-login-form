import { createGlobalStyle } from 'styled-components';

import { StyleConstants } from './StyleConstants';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${StyleConstants.body.default};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px; // set default font size as 16px for our base
    font-weight: 400;
    line-height: 1.4;
    overflow-x: hidden;
    color: ${StyleConstants.body.text};

    /* Font Smoothing */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  p, h1, h2,
  h3, h4, h5, 
  h6, label {
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    height: auto;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  .text-green {
    color: ${StyleConstants.color.tones.green} !important;
  }
  .text-red {
    color: ${StyleConstants.color.tones.red} !important;
  }

  .text-bold {
    font-weight: 600 !important;
  }
`;
