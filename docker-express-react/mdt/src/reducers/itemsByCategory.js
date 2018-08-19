import * as itemTypes from '../constants/itemTypes';
import * as actionTypes from '../constants/actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case actionTypes.CFSLIST_GET_SUCCEED:
    case actionTypes.CFSINFO_GET_SUCCEED:
    case actionTypes.CFSLOG_GET_SUCCEED:
    case actionTypes.CFSRELATED_GET_SUCCEED: {
      const { category, items } = action.payload;
      return {
        ...state,
        [category]: items,
      };
    }
    case actionTypes.CFSINFO_PATCH_SUCCEED:
      return {
        ...state,
        [itemTypes.CFS_INFO]: { ...state.CFS_INFO, ...action.payload },
        // [itemTypes.CFS_INFO]: [itemTypes.CFS_INFO].map(
        //   (eachItem) => eachItem._id === cfsId ? {...eachItem, ...valJson}
        //                                        : eachItem
        // )
      };
    case actionTypes.CFSLOG_POST_SUCCEED:
      return {
        ...state,
        [itemTypes.CFS_LOG]: [...state.CFS_LOG, action.payload],
      };
    default:
      return state;
  }
};
