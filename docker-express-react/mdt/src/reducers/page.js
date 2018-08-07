import { NOT_FOUND } from 'redux-first-router';
import * as actionTypes from '../constants/actionTypes';

const componentName = {
  [NOT_FOUND]: 'NotFound',
  HOME: 'Home',
  COUNTER: 'Counter',
  [actionTypes.CFSLIST_GET_SUCCEED]: 'CFSList',
  [actionTypes.CFSINFO_GET_SUCCEED]: 'CFSInfo',
  [actionTypes.CFSRELATED_GET_SUCCEED]: 'CFSRelated',
  VIDEO: 'Video',
  ADMIN: 'Admin',
  LOGIN: 'Login',
};

export default (state = 'HOME', action = {}) =>
  componentName[action.type] || state;
