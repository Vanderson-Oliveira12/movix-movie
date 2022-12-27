import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import StyleGuides from './style/variablesColor';
import GlobalStyle from './style/global';

import { SearchProvider } from './context/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <ThemeProvider theme={StyleGuides}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
