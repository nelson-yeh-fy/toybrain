import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import cfsLog from './cfsLog';

export default combineReducers({
  routing: routerReducer,
  counter,
  cfsLog,
});
