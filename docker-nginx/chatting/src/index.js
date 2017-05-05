//React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//Redux
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store(); //Initiate a new redux store

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
