import * as constants from '../constants';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

// The followings are reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case constants.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
      };

    case constants.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      };

    case constants.DECREMENT:
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
      type: constants.INCREMENT_REQUESTED,
    });

    dispatch({
      type: constants.INCREMENT,
    });
  };

export const incrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: constants.INCREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: constants.INCREMENT,
      });
    }, 2000);
  }
);

export const decrement = () =>
  (dispatch) => {
    dispatch({
      type: constants.DECREMENT_REQUESTED,
    });

    dispatch({
      type: constants.DECREMENT,
    });
  };

export const decrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: constants.DECREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: constants.DECREMENT,
      });
    }, 2000);
  }
);
