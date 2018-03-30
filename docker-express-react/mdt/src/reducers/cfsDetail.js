import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import { normalize, denormalize } from 'normalizr';
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const defaultState = {
  cfsStatus: 0, // 0:new, 1:dispatched, 2:closed
  isCFSStatusUpdating: false,
};

// The followings are reducers
export default (state = defaultState /* [] */, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CFSSTATUS_REQUESTED:
      return {
        ...state,
        isCFSStatusUpdating: true,
      };

    case actionTypes.UPDATE_CFSSTATUS_SUCCESS:
      return {
        ...state,
        isCFSStatusUpdating: !state.isCFSStatusUpdating,
        cfsStatus: action.payload,
      };

    default:
      return state;
  }
};

// The followings are actionCreators, to be separated from reducer file
export const updateCFSStatus = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_CFSSTATUS_REQUESTED,
    });

    dispatch({
      type: actionTypes.UPDATE_CFSSTATUS_SUCCESS,
      payload: val,
    });
  };

export const updateCFSStatusAsync = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_CFSSTATUS_REQUESTED,
    });

    dispatch({
      type: actionTypes.UPDATE_CFSSTATUS_SUCCESS,
      payload: val,
    });
  };
