import { NOT_FOUND } from 'redux-first-router';
import * as constants from './constants';

const routesMap = {
  HOME: '/', // action <-> url path
  USER: '/user/:id', // :id is a dynamic segment
  CFSLIST: '/cfslist', // this.fetchData('http://localhost:3001/users');
  // CFSLIST: {
  //   path: '/cfslist',
  //   thunk: async (dispatch, getState) => {
  //     const { cfsInfoList } = getState();
  //     if (cfsInfoList === undefined || cfsInfoList.length === 0) {
  //       console.log("now waiting for getting CFSInfoList");
  //       const response = await fetch(constants.webAPIUrlCfsInfo); // await response of fetch call
  //       const data = await response.json(); // only proceed once promise is resolved
  //       console.log("data: " + data);
  //       if (data.length === 0) { // only proceed once second promise is resolved
  //         return dispatch({ type: NOT_FOUND });
  //       }
  //       dispatch({
  //         type: 'USER',
  //         payload: { id: 123 },
  //       });
  //     }
  //   },
  // },

  CFSINFO: {
    path: '/cfsinfo/:id',
    thunk: (dispatch, getState) => {
      const {
        location: { payload: { id } }, // const { id } = getState().location.payload;
        cfsInfoList,
      } = getState();

      if (cfsInfoList === undefined || cfsInfoList.length === 0) {
        // const action = redirect({ type: 'CFSList' });
        // return dispatch(action);
        return dispatch({ type: 'CFSLIST' });
      }

      const currentCFSInfo = cfsInfoList.find(item => item._id === id);
      if (currentCFSInfo === undefined || currentCFSInfo.length === 0) {
        return dispatch({ type: 'CFSLIST' });
      }
    },
  },
  CFSRelatedInfo: '/cfs/:id/relatedInfo',
  COUNTER: '/counter',
};

export default routesMap;
