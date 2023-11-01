import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from './GlobalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { glodalColor } from './Styled/GlobalColor.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/pj-react-777">
          <ThemeProvider theme={glodalColor}>
            <GlobalStyle />
            <App />
            <ToastContainer theme="colored" position="top-center" />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
