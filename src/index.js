import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import { Provider } from 'react-redux';
import { store } from './store/store';

import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
