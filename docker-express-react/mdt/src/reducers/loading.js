import * as itemTypes from '../constants/itemTypes';
import * as actionTypes from '../constants/actionTypes';

export default (state = false, action = {}) => {
  switch (action.type) {
    case itemTypes.CFS_LIST:
    case itemTypes.CFS_INFO:
    case itemTypes.CFS_RELATED:
      return true;
    case actionTypes.CFSLIST_GET_SUCCEED:
    case actionTypes.CFSINFO_GET_SUCCEED:
    case actionTypes.CFSRELATED_GET_SUCCEED:
      return false;
    default:
      return state;
  }
};
