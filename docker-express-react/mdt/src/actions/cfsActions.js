import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
// import { NOT_FOUND } from 'redux-first-router';
import * as itemTypes from '../constants/itemTypes';
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

/*
 * CFS_LIST
 */
export function getCFSListAsync() {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfoBriefList,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.CFSLIST_GET_REQUESTED,
        {
          type: actionTypes.CFSLIST_GET_SUCCEED,
          payload: (action, state, res) =>
            getJSON(res).then(json => ({ category: itemTypes.CFS_LIST, items: json })),
        },
        actionTypes.CFSLIST_GET_FAILED,
      ],
    },
  };
}

/*
 * CFS_INFO
 */
export function getCFSInfoAsync(val) {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfo.concat('/', val),
      // endpoint: `http://127.0.0.1:3001/api/cfsInfo/${val}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.CFSINFO_GET_REQUESTED,
        {
          type: actionTypes.CFSINFO_GET_SUCCEED,
          payload: (action, state, res) =>
            getJSON(res).then(json => ({ category: itemTypes.CFS_INFO, items: json })),
        },
        actionTypes.CFSINFO_GET_FAILED,
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
        actionTypes.CFSINFO_POST_REQUESTED,
        {
          type: actionTypes.CFSINFO_POST_SUCCEED,
          payload: val,
        },
        actionTypes.CFSINFO_POST_FAILED,
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
        actionTypes.CFSINFO_PUT_REQUESTED,
        {
          type: actionTypes.CFSINFO_PUT_SUCCEED,
          payload: val,
        },
        actionTypes.CFSINFO_PUT_FAILED,
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
        actionTypes.CFSINFO_PATCH_REQUESTED,
        {
          type: actionTypes.CFSINFO_PATCH_SUCCEED,
          payload: val,
        },
        actionTypes.CFSINFO_PATCH_FAILED,
      ],
    },
  };
}

/*
 * CFS_LOG
 */
export function appendCFSLogAsync(val) {
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
        actionTypes.CFSLOG_POST_REQUESTED,
        {
          type: actionTypes.CFSLOG_POST_SUCCEED,
          payload: val,
        },
        actionTypes.CFSLOG_POST_FAILED,
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
        actionTypes.CFSLOG_GET_REQUESTED,
        {
          type: actionTypes.CFSLOG_GET_SUCCEED,
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
              // return JsonArray;
              return { category: itemTypes.CFS_LOG, items: JsonArray };
            }),
        },
        actionTypes.CFSLOG_GET_FAILED,
      ],
    },
  };
}

/*
 * CFS_RELATED
 */
export function getCFSRelatedAsync(val) {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfo.concat('/', val),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.CFSRELATED_GET_REQUESTED,
        {
          type: actionTypes.CFSRELATED_GET_SUCCEED,
          payload: (action, state, res) =>
            getJSON(res).then(json => ({ category: itemTypes.CFS_RELATED, items: json })),
        },
        actionTypes.CFSRELATEDT_GET_FAILED,
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
