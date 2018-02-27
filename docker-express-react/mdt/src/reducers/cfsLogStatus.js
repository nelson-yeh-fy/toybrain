import * as constants from '../constants';

const defaultState = {
  isRefreshing: false,
  isAdding: false,
  listFilter: 0, // 0: show all, 1: show user comment only, 2: show tone only
};

// The followings are reducers
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.REFRESH_REQUESTED:
      return {
        ...state,
        isRefreshing: true,
      };

    case constants.REFRESH:
      return {
        ...state,
        isRefreshing: !state.isRefreshing,
      };

    case constants.APPEND_REQUESTED:
      return {
        ...state,
        isAdding: true,
      };

    case constants.APPEND:
      return {
        ...state,
        isAdding: !state.isAdding,
      };

    case constants.SHOW_ALL:
      return {
        ...state,
        listFilter: 7,
      };

    case constants.SHOW_SYSTEMTEXTONLY:
      return {
        ...state,
        listFilter: 1,
      };

    case constants.SHOW_USERTEXTONLY:
      return {
        ...state,
        listFilter: 2,
      };

    case constants.SHOW_TONEONLY:
      return {
        ...state,
        listFilter: 4,
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
