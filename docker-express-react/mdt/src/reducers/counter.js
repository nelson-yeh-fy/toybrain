export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

// The followings are reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing,
      };

    default:
      return state;
  }
};

// The followings are actions, to be separated from reducer file
export const increment = () =>
  (dispatch) => {
    dispatch({
      type: INCREMENT_REQUESTED,
    });

    dispatch({
      type: INCREMENT,
    });
  };

export const incrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: INCREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: INCREMENT,
      });
    }, 2000);
  }
);

export const decrement = () =>
  (dispatch) => {
    dispatch({
      type: DECREMENT_REQUESTED,
    });

    dispatch({
      type: DECREMENT,
    });
  };

export const decrementAsync = () => (
  (dispatch) => {
    dispatch({
      type: DECREMENT_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: DECREMENT,
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
