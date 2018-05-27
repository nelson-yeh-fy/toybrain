import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { apiMiddleware as webApiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import routesMap from './routesMap';
import options from './options';
import * as reducers from './reducers';
import * as actionCreators from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
  : compose;

const configureStore = (history) => {
  const {
    reducer,
    middleware,
    enhancer,
  // } = connectRoutes(createHistory(), routesMap, options);
  } = connectRoutes(history, routesMap);

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware, webApiMiddleware, thunk);
  const enhancers = composeEnhancers(enhancer, middlewares);

  return createStore(rootReducer, enhancers);
};

export default configureStore;



// const initialState = {};
// const enhancers = [];
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
