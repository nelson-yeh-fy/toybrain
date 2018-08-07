import { NOT_FOUND } from 'redux-first-router';
import * as constants from './constants';
import * as itemTypes from './constants/itemTypes';
import * as actionTypes from './constants/actionTypes';
import { getCFSListAsync } from './actions/cfsActions';

const fakeDelay = ms => new Promise(res => setTimeout(res, ms));

const routesMap = {
  HOME: {
    path: '/',
    thunk: async (dispatch, getState) => {
      const {
        itemsByCategory,
      } = getState();

      if (!itemsByCategory.CFS_LIST) {
        return dispatch({ type: 'ITEM', payload: { category: itemTypes.CFS_LIST } });
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
          case itemTypes.CFS_LIST:
            return dispatch({ type: actionTypes.CFSLIST_GET_SUCCEED });
          case itemTypes.CFS_INFO:
            return dispatch({ type: actionTypes.CFSINFO_GET_SUCCEED });
          case itemTypes.CFS_RELATED:
            return dispatch({ type: actionTypes.CFSRELATED_GET_SUCCEED });
          default:
            return dispatch({ type: NOT_FOUND });
        }
      }

      switch (cate) {
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
        case itemTypes.CFS_LIST: {
          await fakeDelay(10); // await response of fetch call
          dispatch(getCFSListAsync());
          break;
        }

        case itemTypes.CFS_INFO: {
          if (currentId === undefined) {
            return dispatch({ type: 'HOME', payload: { category: itemTypes.CFS_LIST } });
          }

          // retreive cfsLog information first
          const responseLog = await fetch(`${constants.webAPIUrlCfsLogByCfs}/${currentId}`);
          // only proceed once promise is resolved
          const dataLog = await responseLog.json();
          if (dataLog.length !== 0) { // only proceed once second promise is resolved
            dispatch({
              type: actionTypes.CFSLOG_GET_SUCCEED,
              payload: { category: itemTypes.CFS_LOG, items: dataLog },
            });
          }

          // only proceed once promise is resolved
          const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
          const data = await response.json();
          if (data.length === 0) { // only proceed once second promise is resolved
            return dispatch({ type: NOT_FOUND });
          }
          dispatch({
            type: actionTypes.CFSINFO_GET_SUCCEED,
            payload: { category: cate, items: data },
          });

          break;
        }
        case itemTypes.CFS_RELATED: {
          if (currentId === undefined) {
            return dispatch({ type: 'HOME', payload: { category: itemTypes.CFS_LIST } });
          }

          // only proceed once promise is resolved
          const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
          const data = await response.json();
          if (data.length === 0) { // only proceed once second promise is resolved
            return dispatch({ type: NOT_FOUND });
          }

          dispatch({
            type: actionTypes.CFSRELATED_GET_SUCCEED,
            payload: { category: cate, items: data },
          });

          break;
        }
        default:
          return dispatch({ type: NOT_FOUND });
      }
    },
  },
};

export default routesMap;
