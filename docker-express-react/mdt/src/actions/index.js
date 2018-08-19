import { NOT_FOUND } from 'redux-first-router';
import { RSAA, getJSON } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';
import { patchCFSInfoAsync } from './cfsActions';

// try dispatching these from the redux devTools

export const goToPage = (type, category) => ({
  type,
  payload: category && { category },
});

export const goHome = () => ({
  type: 'HOME',
});

export const goToAdmin = () => ({
  type: 'ADMIN',
});

export const notFound = () => ({
  type: NOT_FOUND,
});

export const visitCategory = category => ({
  type: 'LIST',
  payload: { category },
});

export const visitVideo = slug => ({
  type: 'VIDEO',
  payload: { slug },
});


export const patchCFSStatusTo0 = () =>
  (dispatch) => {
    const cfsId = '5b60e1c754864858e421ef55';
    const valJson = { cfsStatus: 0 };
    dispatch(patchCFSInfoAsync(cfsId, valJson));
  };

export const patchCFSStatusTo1 = () =>
  (dispatch) => {
    const cfsId = '5b60e1c754864858e421ef55';
    const valJson = { cfsStatus: 1 };
    dispatch(patchCFSInfoAsync(cfsId, valJson));
  };

export const patchCFSStatusTo2 = () =>
  (dispatch) => {
    const cfsId = '5b60e1c754864858e421ef55';
    const valJson = { cfsStatus: 2 };
    dispatch(patchCFSInfoAsync(cfsId, valJson));
  };

export const patchCFSStatusTo3 = () =>
  (dispatch) => {
    const cfsId = '5b60e1c754864858e421ef55';
    const valJson = { cfsStatus: 3 };
    dispatch(patchCFSInfoAsync(cfsId, valJson));
  };

export const patchCFSStatusTo4 = () =>
  (dispatch) => {
    const cfsId = '5b60e1c754864858e421ef55';
    const valJson = { cfsStatus: 4 };
    dispatch(patchCFSInfoAsync(cfsId, valJson));
  };
