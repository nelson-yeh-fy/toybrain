import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
//import { connectRoutes } from 'redux-first-router';
//import { apiMiddleware as webApiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
//import routesMap from './routesMap';
//import options from './options';
import reducers from '../reducers';
import * as actionCreators from '../actions';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
    : compose;

const configureStore = initialState => {
  const middlewares = applyMiddleware(/*webApiMiddleware,*/ thunk);
  const enhancers = composeEnhancers(/*enhancer,*/ middlewares);

  const store = createStore(
    reducers,
    initialState,
    enhancers
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
