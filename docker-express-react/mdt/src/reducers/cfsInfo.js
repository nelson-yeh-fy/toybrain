import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import { normalize, denormalize } from 'normalizr';
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
    case actionTypes.ADD_CFSINFO_REQUESTED:
      return {
        ...state,
        isCFSUpdating: !state.isCFSUpdating,
      };

    case actionTypes.ADD_CFSINFO_SUCCESS:
      return {
        ...action.payload,
        isCFSUpdating: !state.isCFSUpdating,
      };

    case actionTypes.UPDATE_CFSINFO_REQUESTED:
      return {
        ...state,
        isCFSUpdating: true,
      };

    case actionTypes.UPDATE_CFSINFO_SUCCESS:
      return {
        ...state,
        isCFSUpdating: !state.isCFSUpdating,
        cfsStatus: action.payload,
      };

    default:
      return state;
  }
};


// The followings are actionCreators, to be separated from reducer file
export function getCFSInfoAsync() {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrl_cfsInfo,
      method: 'GET',
      types: [
        actionTypes.GET_CFSINFO_REQUESTED,
        {
          type: actionTypes.GET_CFSINFO_SUCCESS,
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
              const denormalizedJsonArray = [];
              json.map(item =>
                denormalizedJsonArray.push(denormalize(item.entities.cfsLog[Object.keys(item.entities.cfsLog)], constants.cfsInfoSchema, item)));
              // console.log(denormalizedJsonArray);
              return denormalizedJsonArray;
            }),
        },
        actionTypes.GET_CFSINFO_FAILURE,
      ],
    },
  };
}

export function addCFSInfoAsync(val) {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrl_cfsInfo,
      method: 'POST',
      body: JSON.stringify(normalize(val, constants.cfsInfoSchema)),
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        actionTypes.ADD_CFSINFO_REQUESTED,
        {
          type: actionTypes.ADD_CFSINFO_SUCCESS,
          payload: val,
        },
        actionTypes.ADD_CFSINFO_FAILURE,
      ],
    },
  };
}

export const updateCFS = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_CFSINFO_REQUESTED,
    });

    dispatch({
      type: actionTypes.UPDATE_CFSINFO_SUCCESS,
      payload: val,
    });
  };

export const updateCFSAsync = val =>
  (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_CFSINFO_REQUESTED,
    });

    dispatch({
      type: actionTypes.UPDATE_CFSINFO_SUCCESS,
      payload: val,
    });
  };
