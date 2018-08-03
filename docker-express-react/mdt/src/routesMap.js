import { NOT_FOUND } from 'redux-first-router';
import * as constants from './constants';
import {
  CFS_LIST,
  CFS_LIST_FETCHED,
  CFS_INFO,
  CFS_INFO_FETCHED,
  CFS_LOG,
  CFS_LOG_FETCHED,
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
          const response = await fetch(`${constants.webAPIUrlCfsInfoBriefList}`);

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
          if (currentId === undefined) {
            return dispatch({ type: 'HOME', payload: { category: CFS_LIST } });
          }

          // retreive cfsLog information first
          const responseLog = await fetch(`${constants.webAPIUrlCfsLogByCfs}/${currentId}`);
          // only proceed once promise is resolved
          const dataLog = await responseLog.json();
          if (dataLog.length !== 0) { // only proceed once second promise is resolved
            dispatch({
              type: CFS_LOG_FETCHED,
              payload: { category: CFS_LOG, items: dataLog },
            });
          }

          // only proceed once promise is resolved
          const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
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
          if (currentId === undefined) {
            return dispatch({ type: 'HOME', payload: { category: CFS_LIST } });
          }

          // only proceed once promise is resolved
          const response = await fetch(`${constants.webAPIUrlCfsInfo}/${currentId}`);
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
};

export default routesMap;
