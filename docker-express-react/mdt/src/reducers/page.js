import { NOT_FOUND } from 'redux-first-router';
import {
  CFS_LIST_FETCHED,
  CFS_INFO_FETCHED,
  CFS_RELATED_FETCHED } from '../constants/actionTypes';

const componentName = {
  [NOT_FOUND]: 'NotFound',
  HOME: 'Home',
  COUNTER: 'Counter',
  [CFS_LIST_FETCHED]: 'CFSList',
  [CFS_INFO_FETCHED]: 'CFSInfo',
  [CFS_RELATED_FETCHED]: 'CFSRelated',
  VIDEO: 'Video',
  ADMIN: 'Admin',
  LOGIN: 'Login',
};

export default (state = 'HOME', action = {}) =>
  componentName[action.type] || state;
