import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  isRefreshing: false,
  isAdding: false,
  listFilterMask: 7, // 0: show all, 1: show user comment only, 2: show tone only
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

    case actionTypes.APPEND_CFSLOG_REQUESTED:
      return {
        ...state,
        isAdding: true,
      };

    case actionTypes.APPEND_CFSLOG_SUCCESS:
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

// export const timeEventShow = (state = true, payload) => {
//   switch (payload.type) {
//       case 'SHOW_TIMEEVENT':
//           return payload.isShowTimeEvent;
//       default:
//           return state;
//   }
// };

// export const timeEventShowsUserCommentOnly = (state = false, payload) => {
//   switch (payload.type) {
//       case 'SHOW_USER_COMMENT_ONLY':
//           return payload.isShowUserCommentOnly;
//       default:
//           return state;
//   }
// };

// export const timeEventLoadingStatus = (state = false, payload) => {
//   switch (payload.type) {
//       case 'SET_LOADING_FLAG':
//           return payload.isLoading;
//       default:
//           return state;
//   }
// };

// export const timeEventLoadingResult = (state = false, payload) => {
//   switch (payload.type) {
//       case 'SET_LOADING_RESULT':
//           return payload.hasError;
//       default:
//           return state;
//   }
// };
export const showAllCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_CFSLOG_ALL,
    });
  };

export const showCFSLogSystemText = val =>
  (dispatch) => {
    console.log(val);
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
