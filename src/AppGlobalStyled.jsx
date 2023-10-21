import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
