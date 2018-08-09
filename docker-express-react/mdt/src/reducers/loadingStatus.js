import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  isCfsListLoading: true,
  isCfsInfoLoading: false,
  isCfsRelatedLoading: false,
  isCfsLogLoading: false,
  isCfsLogAdding: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionTypes.CFSLIST_GET_REQUESTED:
      return { ...state, isCfsListLoading: true };
    case actionTypes.CFSLIST_GET_SUCCEED:
    case actionTypes.CFSLIST_GET_FAILED:
      return { ...state, isCfsListLoading: false };

    case actionTypes.CFSINFO_GET_REQUESTED:
      return { ...state, isCfsInfoLoading: true };
    case actionTypes.CFSINFO_GET_SUCCEED:
    case actionTypes.CFSINFO_GET_FAILED:
      return { ...state, isCfsInfoLoading: false };

    case actionTypes.CFSRELATED_GET_REQUESTED:
      return { ...state, isCfsRelatedLoading: true };
    case actionTypes.CFSRELATED_GET_SUCCEED:
    case actionTypes.CFSRELATED_GET_FAILED:
      return { ...state, isCfsRelatedLoading: false };

    case actionTypes.CFSLOG_GET_REQUESTED:
      return { ...state, isCfsLogLoading: true };
    case actionTypes.CFSLOG_GET_SUCCEED:
    case actionTypes.CFSLOG_GET_FAILED:
      return { ...state, isCfsLogLoading: false };

    case actionTypes.CFSLOG_POST_REQUESTED:
      return { ...state, isCfsLogAdding: true };
    case actionTypes.CFSLOG_POST_SUCCEED:
    case actionTypes.CFSLOG_POST_FAILED:
      return { ...state, isCfsLogAdding: false };

    default:
      return state;
  }
};
