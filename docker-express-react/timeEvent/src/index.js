// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './css/font-awesome/css/font-awesome.css';

// Redux
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store(); // Initiate a new redux store

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
