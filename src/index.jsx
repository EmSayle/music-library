import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import '../style/index.css';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root')
);
