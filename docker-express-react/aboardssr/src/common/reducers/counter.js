import * as actionTypes from '../constants/actionTypes';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

// The followings are reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case actionTypes.INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
      };

    case actionTypes.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      };

    case actionTypes.DECREMENT_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing,
      };

    default:
      return state;
  }
};

// The followings are actionCreators, to be separated from reducer file
export const increment = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.INCREMENT_REQUESTED,
    });

    dispatch({
      type: actionTypes.INCREMENT_SUCCESS,
    });
  };

export const incrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: actionTypes.INCREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.INCREMENT_SUCCESS,
      });
    }, 2000);
  }
);

export const decrement = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.DECREMENT_REQUESTED,
    });

    dispatch({
      type: actionTypes.DECREMENT_SUCCESS,
    });
  };

export const decrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: actionTypes.DECREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.DECREMENT_SUCCESS,
      });
    }, 2000);
  }
);
