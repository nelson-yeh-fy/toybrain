import { redirect, NOT_FOUND } from 'redux-first-router';
import * as itemTypes from './constants/itemTypes';
import * as actionTypes from './constants/actionTypes';
import { getCFSListAsync, refreshCFSLogAsync, getCFSInfoAsync, getCFSRelatedAsync } from './actions/cfsActions';

const fakeDelay = ms => new Promise(res => setTimeout(res, ms));

const routesMap = {
  HOME: {
    path: '/',
    thunk: async (dispatch, getState) => {
      const { itemsByCategory } = getState();
      if (!itemsByCategory.CFS_LIST) {
        return dispatch({ type: itemTypes.CFS_LIST });
      }
    },
  },
  USER: '/user/:id', // :id is a dynamic segment
  COUNTER: '/counter',
  CFS_LIST: {
    path: '/cfsList',
    thunk: async (dispatch) => {
      return dispatch(getCFSListAsync());
    },
  },
  CFS_INFO: {
    path: '/cfsInfo/:id',
    thunk: async (dispatch, getState) => {
      const {
        location: { payload: { id: cfsId } },
        // location: { payload: { id: currentCfsId } }, // const { id } = getState().location.payload;
        location: { prev: { payload: { id: prevId } } },
        itemsByCategory,
      } = getState();

      if (cfsId === undefined) {
        console.log("currentCfsId is undefined");
        return dispatch(redirect({ type: 'CFS_LIST' }));
      }
      if (!itemsByCategory[itemTypes.CFS_INFO] || itemsByCategory[itemTypes.CFS_INFO]._id !== cfsId) {
        console.log("!itemsByCategory[itemTypes.CFS_INFO] || itemsByCategory[itemTypes.CFS_INFO]._id !== cfsId");
        console.log(cfsId);
        console.log(prevId);
        await dispatch(refreshCFSLogAsync(cfsId));
        return dispatch(getCFSInfoAsync(cfsId));
      }
      return dispatch(redirect({ type: actionTypes.CFSINFO_SWITCHED }));
    },
  },
  CFS_RELATED: {
    path: '/cfsRelated/:id',
    thunk: async (dispatch, getState) => {
      const {
        location: { payload: { id: cfsId } },
        // location: { payload: { id: currentCfsId } }, // const { id } = getState().location.payload;
        location: { prev: { payload: { id: prevId } } },
        itemsByCategory,
      } = getState();

      if (cfsId === undefined) {
        console.log("currentCfsId is undefined");
        return dispatch(redirect({ type: 'CFS_LIST' }));
      }
      if (!itemsByCategory[itemTypes.CFS_RELATED] || itemsByCategory[itemTypes.CFS_RELATED]._id !== cfsId) {
        console.log("!itemsByCategory[itemTypes.CFS_RELATED] || itemsByCategory[itemTypes.CFS_RELATED]._id !== cfsId");
        console.log(cfsId);
        console.log(prevId);
        return dispatch(getCFSRelatedAsync(cfsId));
      }
      return dispatch(redirect({ type: actionTypes.CFSRELATED_SWITCHED }));
    },
  },


  // ITEM: {
  //   path: '/items/:category',
  //   thunk: async (dispatch, getState) => {
  //     const {
  //       location: { payload: { category: cate } },
  //       location: { payload: { id: currentCfsId } }, // const { id } = getState().location.payload;
  //       location: { prev: { payload: { id: prevId } } },
  //       itemsByCategory,
  //     } = getState();

  //     switch (cate) {
  //       case itemTypes.CFS_LIST: {
  //         await fakeDelay(10);
  //         dispatch(getCFSListAsync());
  //         break;
  //       }

  //       case itemTypes.CFS_INFO: {
  //         if (currentCfsId === undefined) {
  //           console.log("currentCfsId is undefined");
  //           return dispatch(redirect({ type: 'HOME' }));
  //         }
  //         if (itemsByCategory[cate] && (currentCfsId === prevId)) {
  //           console.log("currentCfsId === prevId");
  //           console.log(currentCfsId);
  //           console.log(prevId);
  //           return dispatch(redirect({ type: actionTypes.CFSINFO_SWITCHED }));
  //         }
  //         await dispatch(refreshCFSLogAsync(currentCfsId));
  //         await dispatch(getCFSInfoAsync(currentCfsId));
  //         break;
  //       }

  //       case itemTypes.CFS_RELATED: {
  //         if (currentCfsId === undefined) {
  //           return dispatch(redirect({ type: 'HOME' }));
  //         }
  //         if (itemsByCategory[cate] && (currentCfsId === prevId)) {
  //           return dispatch(redirect({ type: actionTypes.CFSRELATED_SWITCHED }));
  //         }
  //         dispatch(getCFSRelatedAsync(currentCfsId));
  //         break;
  //       }
  //       default:
  //         return dispatch({ type: NOT_FOUND });
  //     }
  //   },
};

export default routesMap;

// case itemTypes.CFS_LIST: {
//   await fakeDelay(10); // await response of fetch call
//   const response = await fetch(`${constants.webAPIUrlCfsInfoBriefList}`);

//   // only proceed once promise is resolved
//   const data = await response.json();
//   if (data.length === 0) { // only proceed once second promise is resolved
//     return dispatch({ type: NOT_FOUND });
//   }
//   dispatch({
//     type: actionTypes.CFSLIST_GET_SUCCEED,
//     payload: { category: cate, items: data },
//   });
//   break;
// }
