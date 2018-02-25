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

    case actionTypes.INCREMENT:
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

    case actionTypes.DECREMENT:
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
      type: actionTypes.INCREMENT,
    });
  };

export const incrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: actionTypes.INCREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.INCREMENT,
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
      type: actionTypes.DECREMENT,
    });
  };

export const decrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: actionTypes.DECREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.DECREMENT,
      });
    }, 2000);
  }
);

// export const decrement = () => (
//   {
//     type: DECREMENT,
//   }
// );

// export const decrementAsync = () => (
//   (dispatch) => {
//     setTimeout(() => {
//       dispatch(decrement());
//     }, 2000);
//   }
// );
