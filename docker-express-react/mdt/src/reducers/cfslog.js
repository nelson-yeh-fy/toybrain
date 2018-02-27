import * as constants from '../constants';

const defaultState = [{
  id: 1494578015311,
  type: 1,
  text: 'Dispatching unit 0310 to CFS2017-00123',
  addby: 'System',
  addon: '2017-05-06',
}, {
  id: 1494578015313,
  type: 2,
  text: 'How artistic!',
  addby: 'Matt',
  addon: '2017-08-10',
}, {
  id: 1494578015314,
  type: 2,
  text: `we surely will come back for more of the same another day soon. Ours is a life of constant reruns.
        We're always circling back to where we'd we started, then starting all
        over again. Even if we don't run extra laps that day', // to be changed to Text`,
  addby: 'Jackson',
  addon: '2017-09-05',
}, {
  id: 1494578015315,
  type: 3,
  text: `Send Tone (0115) successfully,
        Tone 0115 = FD01, FD02, EMS South`,
  addby: 'Alison',
  addon: '2017-09-10',
}];

// The followings are reducers
export default (state = defaultState /* [] */, action) => {
  switch (action.type) {
    case constants.REFRESH:
      return state;

    case constants.APPEND:
      return [...state, action.item];

    default:
      return state;
  }
};

// The followings are actionCreators, to be separated from reducer file
export const refreshCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: constants.REFRESH_REQUESTED,
    });

    dispatch({
      type: constants.REFRESH,
    });
  };

export const refreshCFSLogAsync = () => (
  (dispatch) => {
    dispatch({
      type: constants.REFRESH_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: constants.REFRESH,
      });
    }, 2000);
  }
);

export const appendCFSLog = val =>
  (dispatch) => {
    dispatch({
      type: constants.APPEND_REQUESTED,
    });

    dispatch({
      type: constants.APPEND,
      item: val,
    });
  };

export const appendCFSLogAsync111 = val =>
  (dispatch) => {
    dispatch({
      type: constants.APPEND_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: constants.APPEND,
        item: val,
      });
    }, 2000);
  };

export const appendCFSLogAsync = val =>
  (dispatch) => {
    dispatch({
      type: constants.APPEND_REQUESTED,
    });

    fetch(constants.webAPIUrl,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(val)
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(TimeEventsIsLoading(false));
        return;
      });
      // .then((items) => dispatch(initTimeEventsWhenFetchSucceed(items)))
      // .catch((error) => dispatch(appendSystemErrorLog(error)));
  };

// export function addTimeEventToDB(url, item) {
//     return (dispatch) => {
//         console.log(JSON.stringify(item));
//         dispatch(TimeEventsIsLoading(true));
//         fetch(url,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(item)
//             }
//         )
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(TimeEventsIsLoading(false));
//                 return;
//             })
//             // .then((items) => dispatch(initTimeEventsWhenFetchSucceed(items)))
//             .catch((error) => dispatch(TimeEventsLoadingError(true)))
//             ;
//     };
// }

export const showAllCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: constants.SHOW_ALL,
    });
  };

export const showSystemTextOnlyCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: constants.SHOW_SYSTEMTEXTONLY,
    });
  };

export const showUserTextOnlyCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: constants.SHOW_USERTEXTONLY,
    });
  };

export const showToneOnlyCFSLog = () =>
  (dispatch) => {
    dispatch({
      type: constants.SHOW_TONEONLY,
    });
  };

