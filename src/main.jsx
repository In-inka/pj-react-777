import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from './GlobalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { glodalColor } from './Styled/GlobalColor.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/pj-react-777">
      <ThemeProvider theme={glodalColor}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
