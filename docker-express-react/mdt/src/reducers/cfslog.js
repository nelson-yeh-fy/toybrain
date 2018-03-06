import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import { schema, arrayOf, normalize } from 'normalizr';
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const cfsLogSchema = new schema.Entity('cfsLog');

const defaultState = [{
  id: 99999001,
  type: 1,
  text: 'Dispatching unit 0310 to CFS2017-00123',
  addby: 'System',
  addon: '2017-05-06',
}, {
  id: 99999002,
  type: 2,
  text: 'How artistic!',
  addby: 'Matt',
  addon: '2017-08-10',
}, {
  id: 99999003,
  type: 2,
  text: `we surely will come back for more of the same another day soon. Ours is a life of constant reruns.
        We're always circling back to where we'd we started, then starting all
        over again. Even if we don't run extra laps that day', // to be changed to Text`,
  addby: 'Jackson',
  addon: '2017-09-05',
}, {
  id: 99999004,
  type: 3,
  text: `Send Tone (0115) successfully,
        Tone 0115 = FD01, FD02, EMS South`,
  addby: 'Alison',
  addon: '2017-09-10',
}];

// The followings are reducers
export default (state = defaultState /* [] */, action) => {
  switch (action.type) {
    case actionTypes.REFRESH_SUCCESS:
      return action.payload;

    case actionTypes.APPEND_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
};

// The followings are actionCreators, to be separated from reducer file
export const refreshCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.REFRESH_REQUESTED,
    });

    dispatch({
      type: actionTypes.REFRESH_SUCCESS,
    });
  };

export const refreshCFSLogAsyncObsolete = () => (
  (dispatch) => {
    dispatch({
      type: actionTypes.REFRESH_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.REFRESH_SUCCESS,
      });
    }, 2000);
  }
);

export function refreshCFSLogAsync() {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrl,
      method: 'GET',
      types: [
        actionTypes.REFRESH_REQUESTED,
        {
          type: actionTypes.REFRESH_SUCCESS,
          // payload: [{
          //   type: 1,
          //   text: 'Dispatching unit 0310 to CFS2017-00123',
          //   addby: 'System',
          //   addon: '2017-05-06',
          // }],
          // payload: (action, state, res) =>
          //   getJSON(res)
          //     .then(json => normalize(json, arrayOf(timeEventSchema))),
        },
        'FAILURE',
      ],
    },
  };
}

export const appendCFSLog = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.APPEND_REQUESTED,
    });

    dispatch({
      type: actionTypes.APPEND_SUCCESS,
      payload: val,
    });
  };

export const appendCFSLogAsyncObsolete = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.APPEND_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.APPEND_SUCCESS,
        payload: val,
      });
    }, 2000);
  };

export function appendCFSLogAsync(val) {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrl,
      method: 'POST',
      body: JSON.stringify(normalize(val, cfsLogSchema)),
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.APPEND_REQUESTED,
        {
          type: actionTypes.APPEND_SUCCESS,
          payload: val,
        },
        'FAILURE',
      ],
    },
  };
}

// export const appendCFSLogAsync222 = val =>
//   (dispatch) => {
//     dispatch({
//       type: constants.APPEND_REQUESTED,
//     });

//     return fetch(
//       constants.webAPIUrl,
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           type: 3,
//           text: `Send Tone (0115) successfully,
//                 Tone 0115 = FD01, FD02, EMS South`,
//           addby: 'Alison',
//           addon: '2017-09-10',
//         }),
//       },
//     )
//       .then((response) => {
//         if (response.status >= 200 && response.status < 300) {
//           console.log(response);
//           console.log(...val);
//           dispatch({
//             type: constants.APPEND,
//             item: val,
//           });
//         } else {
//           const error = new Error(response.statusText);
//           error.response = response;
//           throw error;
//         }
//       });
//     // .then((items) => dispatch(initTimeEventsWhenFetchSucceed(items)))
//     // .catch((error) => dispatch(appendSystemErrorLog(error)));
//   };

// export const appendCFSLogAsync = val =>
//   (dispatch) => {
//     dispatch({
//       type: constants.APPEND_REQUESTED,
//     });

//     return fetch(
//       constants.webAPIUrl,
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           type: 3,
//           text: `Send Tone (0115) successfully,
//                 Tone 0115 = FD01, FD02, EMS South`,
//           addby: 'Alison',
//           addon: '2017-09-10',
//         }),
//       },
//     )
//       .then((response) => {
//         if (response.status >= 200 && response.status < 300) {
//           console.log(response);
//           console.log(...val);
//           dispatch({
//             type: constants.APPEND,
//             item: val,
//           });
//         } else {
//           const error = new Error(response.statusText);
//           error.response = response;
//           throw error;
//         }
//       });
//     // .then((items) => dispatch(initTimeEventsWhenFetchSucceed(items)))
//     // .catch((error) => dispatch(appendSystemErrorLog(error)));
//   };

export const showAllCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_ALL,
    });
  };

export const showSystemTextOnlyCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_SYSTEMTEXTONLY,
    });
  };

export const showUserTextOnlyCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_USERTEXTONLY,
    });
  };

export const showToneOnlyCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_TONEONLY,
    });
  };

