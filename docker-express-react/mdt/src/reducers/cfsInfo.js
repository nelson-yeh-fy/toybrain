import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const defaultState = {
  id: 99999001,
  cfsNumber: '2018-000120',
  cfsStatus: 0, // 0:new, 1:dispatched, 2:closed
  cfsDesc: 'Dispatching unit 0310 to CFS2017-00123',
  addby: 'System',
  addon: '2017-05-06',
  isCFSUpdating: false,
};

// The followings are reducers
export default (state = defaultState /* [] */, action) => {
  switch (action.type) {
    case actionTypes.POST_CFSINFO_REQUESTED:
      return {
        ...state,
        isCFSUpdating: true,
      };

    case actionTypes.POST_CFSINFO_SUCCESS:
      return {
        ...action.payload,
        isCFSUpdating: false,
      };

    case actionTypes.PUT_CFSINFO_REQUESTED:
      return {
        ...state,
        isCFSUpdating: true,
      };

    case actionTypes.PUT_CFSINFO_SUCCESS:
      return {
        ...action.payload,
        isCFSUpdating: false,
      };

    default:
      return state;
  }
};


// The followings are actionCreators, to be separated from reducer file
export function getCFSInfoAsync() {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfo,
      method: 'GET',
      types: [
        actionTypes.GET_CFSINFO_REQUESTED,
        {
          type: actionTypes.GET_CFSINFO_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then((json) => {
              const JsonArray = [];
              json.map(item => JsonArray.push(item));
              return JsonArray;
            }),
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
