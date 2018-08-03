import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  // isRefreshing: false,
  // isAdding: false,
  isSystemLogsDisplayed: true,
  isUserLogsDisplayed: false,
  isToneLogsDisplayed: true,
};

// The followings are reducers
export default (state = defaultState, action) => {
  switch (action.type) {
    // case actionTypes.REFRESH_CFSLOG_REQUESTED:
    //   return {
    //     ...state,
    //     isRefreshing: true,
    //   };

    // case actionTypes.REFRESH_CFSLOG_SUCCESS:
    //   return {
    //     ...state,
    //     isRefreshing: !state.isRefreshing,
    //   };

    // case actionTypes.POST_CFSLOG_REQUESTED:
    //   return {
    //     ...state,
    //     isAdding: true,
    //   };

    // case actionTypes.POST_CFSLOG_SUCCESS:
    //   return {
    //     ...state,
    //     isAdding: !state.isAdding,
    //   };

    case actionTypes.TOGGLE_SHOW_SYSTEM_LOG:
      return {
        ...state,
        isSystemLogsDisplayed: !state.isSystemLogsDisplayed,
      };

    case actionTypes.TOGGLE_SHOW_USER_LOG:
      return {
        ...state,
        isUserLogsDisplayed: !state.isUserLogsDisplayed,
      };

    case actionTypes.TOGGLE_SHOW_TONE_LOG:
      return {
        ...state,
        isToneLogsDisplayed: !state.isToneLogsDisplayed,
      };

    default:
      return state;
  }
};
