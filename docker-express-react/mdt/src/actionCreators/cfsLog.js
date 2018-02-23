import { APPEND_REQUESTED, APPEND, REFRESH_REQUESTED, REFRESH } from '../constants/actionTypes';

// The followings are action creators, to be separated from this file
export const refreshCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: REFRESH_REQUESTED,
    });

    dispatch({
      type: REFRESH,
    });
  };

export const refreshCFSLogAsync = () => (
  (dispatch) => {
    dispatch({
      type: REFRESH_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: REFRESH,
      });
    }, 2000);
  }
);

export const appendCFSLog = val =>
  (dispatch) => {
    dispatch({
      type: APPEND_REQUESTED,
    });

    dispatch({
      type: APPEND,
      item: val,
    });
  };

export const appendCFSLogAsync = val => (
  (dispatch) => {
    dispatch({
      type: APPEND_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: APPEND,
        payload: val,
      });
    }, 2000);
  }
);

// export function fetchData(url) {
//   return (dispatch) => {
//       dispatch(TimeEventsIsLoading(true));

//       fetch(url, {
//           method: 'GET'
//       })
//           .then((response) => {
//               if (!response.ok) {
//                   throw Error(response.statusText);
//               }
//               dispatch(TimeEventsIsLoading(false));
//               return response.json();
//           })
//           .then((items) => dispatch(initTimeEventsWhenFetchSucceed(items)))
//           .catch((error) => dispatch(TimeEventsLoadingError(true)))
//           ;
//   };
// }
