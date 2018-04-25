import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  isRefreshing: false,
  isAdding: false,
  listFilterMask: 7, // 1: system text 2: user text 4: tone text
  chkChecked_SysText: true,
  chkChecked_UsrText: true,
  chkChecked_Tone: true,
};

// The followings are reducers
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REFRESH_CFSLOG_REQUESTED:
      return {
        ...state,
        isRefreshing: true,
      };

    case actionTypes.REFRESH_CFSLOG_SUCCESS:
      return {
        ...state,
        isRefreshing: !state.isRefreshing,
      };

    case actionTypes.POST_CFSLOG_REQUESTED:
      return {
        ...state,
        isAdding: true,
      };

    case actionTypes.POST_CFSLOG_SUCCESS:
      return {
        ...state,
        isAdding: !state.isAdding,
      };

    case actionTypes.SHOW_CFSLOG_SYSTEMTEXT:
      return {
        ...state,
        chkChecked_SysText: action.payload,
        listFilterMask: action.payload === true ? state.listFilterMask + 1 : state.listFilterMask - 1,
      };

    case actionTypes.SHOW_CFSLOG_USERTEXT:
      return {
        ...state,
        chkChecked_UsrText: action.payload,
        listFilterMask: action.payload === true ? state.listFilterMask + 2 : state.listFilterMask - 2,
      };

    case actionTypes.SHOW_CFSLOG_TONE:
      return {
        ...state,
        chkChecked_Tone: action.payload,
        listFilterMask: action.payload === true ? state.listFilterMask + 4 : state.listFilterMask - 4,
      };

    default:
      return state;
  }
};

// The followings are actionCreators, to be separated from reducer file
export const showAllCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_CFSLOG_ALL,
    });
  };

export const showCFSLogSystemText = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_CFSLOG_SYSTEMTEXT,
      payload: val,
    });
  };

export const showCFSLogUserText = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_CFSLOG_USERTEXT,
      payload: val,
    });
  };

export const showCFSLogTone = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_CFSLOG_TONE,
      payload: val,
    });
  };
