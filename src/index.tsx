import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import store from './bll/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
