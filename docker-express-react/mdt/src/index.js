import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './components/App';
import configureStore from './configureStore';

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
