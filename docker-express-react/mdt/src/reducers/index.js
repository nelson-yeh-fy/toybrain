import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import cfslog from './cfslog';

export default combineReducers({
  routing: routerReducer,
  counter,
  cfslog,
});
