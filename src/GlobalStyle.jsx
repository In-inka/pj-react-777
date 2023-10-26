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

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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