import * as itemTypes from '../constants/itemTypes';
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

export const toggleShowSystemLogs = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SYSTEM_LOG_TOGGLED,
    });
  };

export const toggleShowUserLogs = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.USER_LOG_TOGGLED,
    });
  };

export const toggleShowToneLogs = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.TONE_LOG_TOGGLED,
    });
  };

export const set = (value) => ({
    type: actionTypes.SET_COUNTER,
    payload: value
  })

export const increment = () => ({
  type: actionTypes.INCREMENT_COUNTER
})

export const decrement = () => ({
  type: actionTypes.DECREMENT_COUNTER
})

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState()

  if (counter % 2 === 0) {
    return
  }

  dispatch(increment())
}

export const incrementAsync = (delay = 1000) => dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }