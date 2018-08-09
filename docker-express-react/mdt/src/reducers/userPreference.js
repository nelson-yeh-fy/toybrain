import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  displayingCfsId: undefined,
  isSystemLogsDisplayed: true,
  isUserLogsDisplayed: false,
  isToneLogsDisplayed: true,
};

// The followings are reducers
export default (state = defaultState, action) => {
  switch (action.type) {
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
