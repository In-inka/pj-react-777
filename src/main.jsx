import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle, FontStyle } from './GlobalStyle.jsx';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/pj-react-777">
      <FontStyle />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
