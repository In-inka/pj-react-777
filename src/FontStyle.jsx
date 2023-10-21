import { createGlobalStyle } from 'styled-components';
import RobotoWoff from './fonts/roboto-v30-latin-regular.woff2';
import RobotoWoff2 from './fonts/roboto-v30-latin-500.woff2';
import RobotoWoff3 from './fonts/roboto-v30-latin-700.woff2';

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff2'),
       url(${RobotoWoff3}) format('woff2');
       
}
`;
