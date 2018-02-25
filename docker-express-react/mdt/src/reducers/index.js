import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import cfsLog from './cfsLog';
import cfsLogStatus from './cfsLogStatus';

export default combineReducers({
  routing: routerReducer,
  counter,
  cfsLog,
  cfsLogStatus,
});
