import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

// const defaultCFSList = [
//   {
//     addon: '2018-04-25T15:22:23.371Z',
//     _id: '4dgr42fb01bab7ab4c5a1fd9',
//     cfsNumber: '2015-000990',
//     cfsStatus: 0,
//     cfsDesc: "'Dispatching unit 0310 to CFS2017-00123'",
//     addby: "'System'",
//     __v: 0,
//   },
// ];

// The followings are reducers
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_CFSINFO_LIST_SUCCESS:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};


// The followings are actionCreators, to be separated from reducer file
export function getCFSInfoListAsync() {
  return {
    [RSAA]: {
      endpoint: constants.webAPIUrlCfsInfo,
      method: 'GET',
      types: [
        actionTypes.GET_CFSINFO_LIST_REQUESTED,
        {
          type: actionTypes.GET_CFSINFO_LIST_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then((json) => {
              const JsonArray = [];
              json.map(item => JsonArray.push(item));
              console.log(JsonArray);
              return JsonArray;
            }),
        },
        actionTypes.GET_CFSINFO_LIST_FAILURE,
      ],
    },
  };
}

