import { NOT_FOUND } from 'redux-first-router';
import * as constants from './constants';
import {
  CFS_LIST,
  CFS_LIST_FETCHED,
  CFS_INFO,
  CFS_INFO_FETCHED,
  CFS_RELATED,
  CFS_RELATED_FETCHED } from './constants/actionTypes';

const fakeDelay = ms => new Promise(res => setTimeout(res, ms));

const routesMap = {
  HOME: {
    path: '/',
    thunk: async (dispatch, getState) => {
      const {
        itemsByCategory,
      } = getState();

      if (!itemsByCategory.CFS_LIST) {
        return dispatch({ type: 'ITEM', payload: { category: CFS_LIST } });
      }
    },
  },
  USER: '/user/:id', // :id is a dynamic segment
  COUNTER: '/counter',
  ITEM: {
    path: '/items/:category',
    thunk: async (dispatch, getState) => {
      const {
        location: { payload: { category: cate } },
        location: { payload: { id: currentId } }, // const { id } = getState().location.payload;
        location: { prev: { payload: { id: prevId } } },
        itemsByCategory,
      } = getState();

      if (itemsByCategory[cate] && (currentId === prevId)) {
        switch (cate) {
          case CFS_LIST:
            return dispatch({ type: CFS_LIST_FETCHED });
          case CFS_INFO:
            return dispatch({ type: CFS_INFO_FETCHED });
          case CFS_RELATED:
            return dispatch({ type: CFS_RELATED_FETCHED });
          default:
            return dispatch({ type: NOT_FOUND });
        }
      }

      switch (cate) {
        case CFS_LIST: {
          await fakeDelay(10); // await response of fetch call
          const response = await fetch(`${constants.webAPIUrlCfsInfo}`);

          // only proceed once promise is resolved
          const data = await response.json();
          if (data.length === 0) { // only proceed once second promise is resolved
            return dispatch({ type: NOT_FOUND });
          }
          dispatch({
            type: CFS_LIST_FETCHED,
            payload: { category: cate, items: data },
          });
          break;
        }
        case CFS_INFO: {
          const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
          // only proceed once promise is resolved
          const data = await response.json();
          if (data.length === 0) { // only proceed once second promise is resolved
            return dispatch({ type: NOT_FOUND });
          }
          dispatch({
            type: CFS_INFO_FETCHED,
            payload: { category: cate, items: data },
          });
          break;
        }
        case CFS_RELATED: {
          const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
          // only proceed once promise is resolved
          const data = await response.json();
          if (data.length === 0) { // only proceed once second promise is resolved
            return dispatch({ type: NOT_FOUND });
          }
          dispatch({
            type: CFS_RELATED_FETCHED,
            payload: { category: cate, items: data },
          });
          break;
        }
        default:
          return dispatch({ type: NOT_FOUND });
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
  // CFSINFO: {
  //   path: '/cfsinfo/:id',
  //   thunk: async (dispatch, getState) => {
  //     const {
  //       location: { payload: { id: currentId } }, // const { id } = getState().location.payload;
  //       location: { prev: { payload: { id: prevId } } },
  //     } = getState();

  //     if (currentId !== prevId) {
  //       // console.log(`id: ${currentId}, prevId:${prevId}`);

  //       /* ****** same with reducer getCFSInfo_async ******* */
  //       dispatch({ type: actionTypes.GET_CFSINFO_REQUESTED });
  //       // additional await response of fetch call
  //       // await fakeDelay(1000);
  //       const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
  //       // only proceed once promise is resolved
  //       const data = await response.json();
  //       if (data.length === 0) { // only proceed once second promise is resolved
  //         dispatch({ type: actionTypes.GET_CFSINFO_FAILURE });
  //         return dispatch({ type: NOT_FOUND });
  //       }

  //       dispatch({
  //         type: actionTypes.GET_CFSINFO_SUCCESS,
  //         payload: data,
  //       });
  //       /* ****************end of same with reducer getCFSInfo_async */
  //     }
  //   },
  // },
  // CFSRELATED: {
  //   path: '/cfsrelated/:id',
  //   thunk: (dispatch, getState) => {
  //     const {
  //       location: { payload: { id } }, // const { id } = getState().location.payload;
  //       cfsList,
  //     } = getState();

  //     if (cfsList === undefined || cfsList.length === 0) {
  //       // const action = redirect({ type: 'CFSList' });
  //       // return dispatch(action);
  //       return dispatch({ type: 'CFSLIST' });
  //     }

  //     const currentCFSInfo = cfsList.find(item => item._id === id);
  //     if (currentCFSInfo === undefined || currentCFSInfo.length === 0) {
  //       return dispatch({ type: 'CFSLIST' });
  //     }
  //   },
  // },
};

export default routesMap;
