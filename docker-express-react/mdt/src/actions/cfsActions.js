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
  console.log("val:" + val);
  return {
    [RSAA]: {
      // endpoint: constants.webAPIUrlCfsInfo.concat('/', val),
      endpoint: `http://127.0.0.1:5656/api/cfsInfo/${val}`,
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
