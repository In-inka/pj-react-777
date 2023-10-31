import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import RobotoWoff from './fonts/roboto-v30-latin-regular.woff2';
import RobotoWoff2 from './fonts/roboto-v30-latin-500.woff2';
import RobotoWoff3 from './fonts/roboto-v30-latin-700.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff2'),
       url(${RobotoWoff3}) format('woff2');
       
}

&.hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


*::-webkit-scrollbar {
  width: 8px;
}


/* Track */
*::-webkit-scrollbar-track {
  
  background-color: rgba(239, 237, 232, 0.1);
  border-radius: 10px;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background-color: rgba(239, 237, 232, 0.4);
  border-radius: 10px;
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background-color: #ec7246; 
}

body {
  background-color: #000000;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #efede8;
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
}
html {
  scroll-behavior: smooth;
}

`;
