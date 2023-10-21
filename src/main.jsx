import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FontStyles } from './FontStyle.jsx';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/pj-react-777">
      <FontStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
