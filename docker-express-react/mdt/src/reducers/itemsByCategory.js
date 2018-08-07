import * as itemTypes from '../constants/itemTypes';
import * as actionTypes from '../constants/actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case actionTypes.CFSLIST_GET_SUCCEED:
    case actionTypes.CFSINFO_GET_SUCCEED:
    case actionTypes.CFSLOG_GET_SUCCEED:
    case actionTypes.CFSRELATED_GET_SUCCEED: {
      const { category, items } = action.payload;
      console.log(category);
      console.log(items);
      return {
        ...state,
        [category]: items,
      };
    }
    // case actionTypes.CFSLOG_GET_SUCCEED:
    //   return {
    //     ...state,
    //     [actionTypes.CFS_LOG]: [...action.payload],
    //   };

    case actionTypes.CFSLOG_POST_SUCCEED:
      return {
        ...state,
        [itemTypes.CFS_LOG]: [...state.CFS_LOG, action.payload],
      };
    default:
      return state;
  }
};
