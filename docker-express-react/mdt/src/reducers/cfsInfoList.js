import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';
import cfsInfo from './cfsInfo';

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

