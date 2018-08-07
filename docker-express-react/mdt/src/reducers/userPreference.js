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
    // case actionTypes.CFSLOG_GET_REQUESTED:
    //   return {
    //     ...state,
    //     isRefreshing: true,
    //   };

    // case actionTypes.CFSLOG_GET_SUCCEED:
    //   return {
    //     ...state,
    //     isRefreshing: !state.isRefreshing,
    //   };

    // case actionTypes.CFSLOG_POST_REQUESTED:
    //   return {
    //     ...state,
    //     isAdding: true,
    //   };

    // case actionTypes.CFSLOG_POST_SUCCEED:
    //   return {
    //     ...state,
    //     isAdding: !state.isAdding,
    //   };

    case actionTypes.SYSTEM_LOG_TOGGLED:
      return {
        ...state,
        isSystemLogsDisplayed: !state.isSystemLogsDisplayed,
      };

    case actionTypes.USER_LOG_TOGGLED:
      return {
        ...state,
        isUserLogsDisplayed: !state.isUserLogsDisplayed,
      };

    case actionTypes.TONE_LOG_TOGGLED:
      return {
        ...state,
        isToneLogsDisplayed: !state.isToneLogsDisplayed,
      };

    default:
      return state;
  }
};
