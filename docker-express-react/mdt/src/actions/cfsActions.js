import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

// The followings are actionCreators, to be separated from reducer file
// export function getCFSInfoAsync() {
//   return {
//     [RSAA]: {
//       endpoint: constants.webAPIUrlCfsInfo,
//       method: 'GET',
//       types: [
//         actionTypes.GET_CFSINFO_REQUESTED,
//         {
//           type: actionTypes.GET_CFSINFO_SUCCESS,
//           payload: (action, state, res) =>
//             getJSON(res).then((json) => {
//               const JsonArray = [];
//               json.map(item => JsonArray.push(item));
//               return JsonArray;
//             }),
//         },
//         actionTypes.GET_CFSINFO_FAILURE,
//       ],
//     },
//   };
// }

export function getCFSInfoAsync(val) {
  console.log(val);
  return {
    [RSAA]: {
      // endpoint: constants.webAPIUrlCfsInfo.concat('/', val),
      endpoint: `http://127.0.0.1:3001/api/cfsInfo/${val}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.GET_CFSINFO_REQUESTED,
        {
          type: actionTypes.GET_CFSINFO_SUCCESS,
          payload: (action, state, res) => {
            console.log("json: "+ res);
            getJSON(res).then(json => json)
          },
        },
        actionTypes.GET_CFSINFO_FAILURE,
      ],
    },
  };
}

export function postCFSInfoAsync(val) {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfo,
      method: 'POST',
      body: JSON.stringify(val),
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.POST_CFSINFO_REQUESTED,
        {
          type: actionTypes.POST_CFSINFO_SUCCESS,
          payload: val,
        },
        actionTypes.POST_CFSINFO_FAILURE,
      ],
    },
  };
}

export function putCFSInfoAsync(val) {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfo.concat('/', val.toBeUpdateId),
      method: 'PUT',
      body: JSON.stringify(val),
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.PUT_CFSINFO_REQUESTED,
        {
          type: actionTypes.PUT_CFSINFO_SUCCESS,
          payload: val,
        },
        actionTypes.PUT_CFSINFO_FAILURE,
      ],
    },
  };
}

export function patchCFSInfoAsync(val) {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfo.concat('/', val.toBeUpdateId),
      method: 'PATCH',
      body: JSON.stringify(val),
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.PATCH_CFSINFO_REQUESTED,
        {
          type: actionTypes.PATCH_CFSINFO_SUCCESS,
          payload: val,
        },
        actionTypes.PATCH_CFSINFO_FAILURE,
      ],
    },
  };
}


/*
 * CFS Log
 */
export function appendCFSLogAsync(val) {
  console.log(val);
  return {
    [RSAA]: {
      // endpoint: `http://127.0.0.1:3001/api/cfsLog/`,
      endpoint: constants.webAPIUrlCfsLog,
      method: 'POST',
      // body: JSON.stringify(normalize(val, constants.cfsLogSchema)),
      body: JSON.stringify(val),
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.POST_CFSLOG_REQUESTED,
        {
          type: actionTypes.POST_CFSLOG_SUCCESS,
          payload: val,
        },
        actionTypes.POST_CFSLOG_FAILURE,
      ],
    },
  };
}

export function refreshCFSLogAsync(val) {
  return {
    [RSAA]: {
      // endpoint: `http://127.0.0.1:3001/api/cfsLogByCfs/${val}`,
      endpoint: constants.webAPIUrlCfsLogByCfs.concat('/', val),
      method: 'GET',
      types: [
        actionTypes.REFRESH_CFSLOG_REQUESTED,
        {
          type: actionTypes.REFRESH_CFSLOG_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then((json) => {
              // const sampleItem = [{
              //   _id: '5a9f2074651a131bdc9015d7',
              //   entities: {
              //     cfsLog: {
              //       1520377971854: {
              //         id: 1520377971854,
              //         type: 2,
              //         text: 'fsef',
              //         addby: 'UserName',
              //         addon: '3/6/2018, 6:12:51 PM',
              //       },
              //     },
              //   },
              //   result: 1520377971854,
              // }];

              // import { schema } from 'normalizr';
              // export const cfsInfoSchema = new schema.Entity('cfsInfo');
              // export const cfsLogSchema = new schema.Entity('cfsLog');
              // const denormalizedJsonArray = [];
              // json.map(item =>
              //   denormalizedJsonArray.push(denormalize(item.entities.cfsLog[Object.keys(item.entities.cfsLog)], constants.cfsLogSchema, item)));
              // // console.log(denormalizedJsonArray);
              // return denormalizedJsonArray;
              const JsonArray = [];
              json.map(item => JsonArray.push(item));
              return JsonArray;
            }),
        },
        actionTypes.REFRESH_CFSLOG_FAILURE,
      ],
    },
  };
}

/*
 * User Preference
 */
export const toggleShowSystemLogs = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.TOGGLE_SHOW_SYSTEM_LOG,
    });
  };

export const toggleShowUserLogs = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.TOGGLE_SHOW_USER_LOG,
    });
  };

export const toggleShowToneLogs = () =>
  (dispatch) => {
    dispatch({
      type: actionTypes.TOGGLE_SHOW_TONE_LOG,
    });
  };
