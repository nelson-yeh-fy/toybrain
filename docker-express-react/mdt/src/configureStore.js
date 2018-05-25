import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { apiMiddlewareForRSAA } from 'redux-api-middleware';
import createHistory from 'history/createBrowserHistory';
import routesMap from './routesMap';
import options from './options';
import * as reducers from './reducers';
import * as actionCreators from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
  : compose;
const history = createHistory();

const configureStore = () => {
  const {
    reducer,
    middleware,
    enhancer,
  // } = connectRoutes(createHistory(), routesMap, options);
  } = connectRoutes(history, routesMap);

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  // const middlewares = applyMiddleware([middleware, apiMiddlewareForRSAA]);
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);

  return createStore(rootReducer, enhancers);
};

export default configureStore;



// export const history = createHistory();
// const initialState = {};
// const enhancers = [];
// Object.assign([], middlewares, apiMiddleware); // make it able to use RSAAs

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension;

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

// export default createStore(
//   combineReducers({
//     router: reducerFromLittleRouter,
//     counter,
//     cfsInfoList,
//     cfsInfo,
//     cfsLog,
//     cfsLogStatus,
//   }),
//   initialState,
//   compose(
//     applyMiddleware(...middlewares),
//     ...enhancers,
//   ),
// );
