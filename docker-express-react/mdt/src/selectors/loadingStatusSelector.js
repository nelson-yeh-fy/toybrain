import { createSelector } from 'reselect';
import * as itemTypes from '../constants/itemTypes';

const getLoadingStatus = createSelector(
  [
    state => state.loadingStatus,
    state => state.location.payload,
  ],
  (loadingStatus, { category }) => {
    return loadingStatus;
    // if (category === itemTypes.CFS_LIST) return loadingStatus;
    // if (category === itemTypes.CFS_INFO) return loadingStatus;
    // if (category === itemTypes.CFS_RELATED) return loadingStatus;
    // if (category === itemTypes.CFS_LOG) return loadingStatus;
  },
);

// const isLoading = val => val;

export default getLoadingStatus;
