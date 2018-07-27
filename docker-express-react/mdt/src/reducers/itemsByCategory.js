import {
  CFS_LIST_FETCHED,
  CFS_INFO_FETCHED,
  CFS_RELATED_FETCHED } from '../constants/actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case CFS_LIST_FETCHED:
    case CFS_INFO_FETCHED:
    case CFS_RELATED_FETCHED: {
      const { category, items } = action.payload;
      return {
        ...state,
        [category]: items,
      };
    }
    default:
      return state;
  }
};
