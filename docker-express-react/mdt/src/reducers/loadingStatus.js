import * as actionTypes from '../constants/actionTypes';

export default (state = false, action = {}) => {
  switch (action.type) {
    case actionTypes.CFSLIST_GET_REQUESTED:
    case actionTypes.CFSINFO_GET_REQUESTED:
    case actionTypes.CFSRELATED_GET_REQUESTED:
    case actionTypes.CFSLOG_GET_REQUESTED:
      return true;
    case actionTypes.CFSLIST_GET_SUCCEED:
    case actionTypes.CFSLIST_GET_FAILED:
    case actionTypes.CFSINFO_GET_SUCCEED:
    case actionTypes.CFSINFO_GET_FAILED:
    case actionTypes.CFSRELATED_GET_SUCCEED:
    case actionTypes.CFSRELATED_GET_FAILED:
    case actionTypes.CFSLOG_GET_SUCCEED:
    case actionTypes.CFSLOG_GET_FAILED:
      return false;
    default:
      return state;
  }
};
