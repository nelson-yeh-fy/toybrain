import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import cfsInfoList from './cfsInfoList';
import cfsInfo from './cfsInfo';
import cfsLog from './cfsLog';
import cfsLogStatus from './cfsLogStatus';

export default combineReducers({
  routing: routerReducer,
  counter,
  cfsInfoList,
  cfsInfo,
  cfsLog,
  cfsLogStatus,
});
