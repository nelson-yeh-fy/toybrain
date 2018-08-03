import {
  CFS_LIST_FETCHED,
  CFS_INFO_FETCHED,
  CFS_LOG_FETCHED,
  CFS_RELATED_FETCHED,

  CFS_LOG,
  REFRESH_CFSLOG_SUCCESS,
  POST_CFSLOG_SUCCESS } from '../constants/actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case CFS_LIST_FETCHED:
    case CFS_INFO_FETCHED:
    case CFS_LOG_FETCHED:
    case CFS_RELATED_FETCHED: {
      const { category, items } = action.payload;
      return {
        ...state,
        [category]: items,
      };
    }
    case REFRESH_CFSLOG_SUCCESS:
      return {
        ...state,
        [CFS_LOG]: [...action.payload],
      };

    case POST_CFSLOG_SUCCESS:
      return {
        ...state,
        [CFS_LOG]: [...state.CFS_LOG, action.payload],
      };
    default:
      return state;
  }
};
