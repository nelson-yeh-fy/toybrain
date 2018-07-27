import {
  CFS_LIST,
  CFS_LIST_FETCHED,
  CFS_INFO,
  CFS_INFO_FETCHED,
  CFS_RELATED,
  CFS_RELATED_FETCHED } from '../constants/actionTypes';

export default (state = false, action = {}) => {
  switch (action.type) {
    case CFS_LIST:
    case CFS_INFO:
    case CFS_RELATED:
      return true;
    case CFS_LIST_FETCHED:
    case CFS_INFO_FETCHED:
    case CFS_RELATED_FETCHED:
      return false;
    default:
      return state;
  }
};
