export const APPEND_REQUESTED = 'cfslog/APPEND_REQUESTED';
export const APPEND = 'cfslog/APPEND';
export const REFRESH_REQUESTED = 'cfslog/REFRESH_REQUESTED';
export const REFRESH = 'cfslog/REFRESH';

const initialState = {
  timeEventLogs: [{
    idx: 1494578015311,
    isUserComment: true,
    text: 'Dispatching unit 0310 to CFS2017-00123', // to be changed to Text
    addby: 'System', // to be changed to Author
    // to be add a avator info to Author?
    addon: '2017-05-06', // to be changed to AddOn
  }, {
    idx: 1494578015312,
    isUserComment: true,
    text: 'Dispatching unit 0310 to CFS2017-00124', // to be changed to Text
    addby: 'System', // to be changed to Author
    // to be add a avator info to Author?
    addon: '2017-05-10', // to be changed to AddOn
  }, {
    idx: 1494578015312,
    isUserComment: true,
    text: 'How artistic!', // to be changed to Text
    addby: 'Matt', // to be changed to Author
    // to be add a avator info to Author?
    addon: '2017-08-10', // to be changed to AddOn
  }, {
    idx: 1494578015312,
    isUserComment: true,
    text: 'we surely will come back for more of the same another day soon. Ours is a life of constant reruns. \
        We\'re always circling back to where we\'d we started, then starting all \
        over again. Even if we don\'t run extra laps that day', // to be changed to Text'
    addby: 'Jackson', // to be changed to Author
    // to be add a avator info to Author?
    addon: '2017-09-05', // to be changed to AddOn
  }, {
    idx: 1494578015312,
    isUserComment: true,
    text: 'Ours is a life of constant reruns. We re always circling back to where we d we started, then starting all \
        over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another \
        day soon. Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all \
        over again. Even if we dgain. Even if we don\'t run extra laps that day, we surely will come back for more of the same another \
        day soon. Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all',
    addby: 'Alison', // to be changed to Author
    // to be add a avator info to Author?
    addon: '2017-09-10', // to be changed to AddOn
  }],
  isRefreshing: false,
  isAdding: false,
};

// The followings are reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case APPEND_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case APPEND:
      return [...state, action.item];

    case REFRESH_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case REFRESH:
      return [...state, action.item];

    default:
      return state;
  }
};


// export const timeEventShow = (state = true, payload) => {
//   switch (payload.type) {
//       case 'SHOW_TIMEEVENT':
//           return payload.isShowTimeEvent;
//       default:
//           return state;
//   }
// };

// export const timeEventShowsUserCommentOnly = (state = false, payload) => {
//   switch (payload.type) {
//       case 'SHOW_USER_COMMENT_ONLY':
//           return payload.isShowUserCommentOnly;
//       default:
//           return state;
//   }
// };

// export const timeEventLoadingStatus = (state = false, payload) => {
//   switch (payload.type) {
//       case 'SET_LOADING_FLAG':
//           return payload.isLoading;
//       default:
//           return state;
//   }
// };

// export const timeEventLoadingResult = (state = false, payload) => {
//   switch (payload.type) {
//       case 'SET_LOADING_RESULT':
//           return payload.hasError;
//       default:
//           return state;
//   }
// };

// The followings are actions, to be separated from reducer file
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
