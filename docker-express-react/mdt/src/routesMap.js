import { NOT_FOUND } from 'redux-first-router';
import * as constants from './constants';
import * as actionTypes from './constants/actionTypes';

const fakeDelay = ms => new Promise(res => setTimeout(res, ms));

const routesMap = {
  HOME: '/', // action <-> url path
  USER: '/user/:id', // :id is a dynamic segment
  LIST: {
    path: '/list/:category',
    thunk: async (dispatch, getState) => {
      const {
        location: { payload: { category: cate } },
        itemsByCategory,
      } = getState();

      console.log("category" + cate);

      if (itemsByCategory[cate]) return;

      if (cate === 'cfsList') {
        // await response of fetch call
        await fakeDelay(1000);
        const response = await fetch(`${constants.webAPIUrlCfsInfo}`);

        // only proceed once promise is resolved
        const data = await response.json();
        if (data.length === 0) { // only proceed once second promise is resolved
          return dispatch({ type: NOT_FOUND });
        }
        dispatch({
          type: 'CFSLIST_FETCHED',
          payload: { category: cate, items: data },
        });
      }
    },
  },
  // CFSLIST: '/cfslist', // this.fetchData('http://localhost:3001/users');
  // CFSLIST: {
  //   path: '/cfslist',
  //   thunk: async (dispatch, getState) => {
  //     const {
  //       cfsList,
  //     } = getState();

  //     if (cfsList === undefined || cfsList.length === 0) {
  //       dispatch({ type: actionTypes.GET_CFS_LIST_REQUESTED });

  //       // await response of fetch call
  //       await fakeDelay(3000);
  //       const response = await fetch(`${constants.webAPIUrlCfsInfo}`);

  //       // only proceed once promise is resolved
  //       const data = await response.json();
  //       if (data.length === 0) { // only proceed once second promise is resolved
  //         dispatch({ type: actionTypes.GET_CFS_LIST_FAILURE });
  //         return dispatch({ type: NOT_FOUND });
  //       }

  //       dispatch({
  //         type: actionTypes.GET_CFS_LIST_SUCCESS,
  //         payload: data,
  //       });
  //     }
  //   },
  // },
  CFSINFO: {
    path: '/cfsinfo/:id',
    thunk: async (dispatch, getState) => {
      const {
        location: { payload: { id: currentId } }, // const { id } = getState().location.payload;
        location: { prev: { payload: { id: prevId } } },
      } = getState();

      if (currentId !== prevId) {
        // console.log(`id: ${currentId}, prevId:${prevId}`);

        /* ****** same with reducer getCFSInfo_async ******* */
        dispatch({ type: actionTypes.GET_CFSINFO_REQUESTED });
        // additional await response of fetch call
        // await fakeDelay(1000);
        const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
        // only proceed once promise is resolved
        const data = await response.json();
        if (data.length === 0) { // only proceed once second promise is resolved
          dispatch({ type: actionTypes.GET_CFSINFO_FAILURE });
          return dispatch({ type: NOT_FOUND });
        }

        dispatch({
          type: actionTypes.GET_CFSINFO_SUCCESS,
          payload: data,
        });
        /* ****************end of same with reducer getCFSInfo_async */
      }
    },
  },

  CFSRELATED: {
    path: '/cfsrelated/:id',
    thunk: (dispatch, getState) => {
      const {
        location: { payload: { id } }, // const { id } = getState().location.payload;
        cfsList,
      } = getState();

      if (cfsList === undefined || cfsList.length === 0) {
        // const action = redirect({ type: 'CFSList' });
        // return dispatch(action);
        return dispatch({ type: 'CFSLIST' });
      }

      const currentCFSInfo = cfsList.find(item => item._id === id);
      if (currentCFSInfo === undefined || currentCFSInfo.length === 0) {
        return dispatch({ type: 'CFSLIST' });
      }
    },
  },
  COUNTER: '/counter',
};

export default routesMap;
