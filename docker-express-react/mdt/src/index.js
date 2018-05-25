import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './components/HoCs/App';
import configureStore from './configureStore';
import 'semantic-ui-css/semantic.min.css';

// const history = createHistory();
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
