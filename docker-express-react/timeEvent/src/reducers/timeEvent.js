// Redux - Reducers Default State for TodoList
const initialTimeEventList = {
    idx: 1494578015311,
    isUserComment: true,
    text: 'Dispatching unit 0310 to CFS2017-00123',
    addby: 'defaultState',
    addon: '2017-05-06'
};

export const timeEvents = (state = [initialTimeEventList], payload) => {
    switch (payload.type) {
        case 'ADD_TIMEEVENT':
            return [...state, payload.item];
        case 'INI_TIMEEVENT':
            return [...state, ...payload.item];
        // case 'TOOGLE_TIMEEVENT_FILTER':
        //     return state.filter(eachitem => eachitem.showComments === payload.FilterToDisplayAll);
        default:
            return state;
    }
};

export const timeEventShow = (state = true, payload) => {
    switch (payload.type) {
        case 'SHOW_TIMEEVENT':
            return payload.isShowTimeEvent;
        default:
            return state;
    }
};

export const timeEventShowsUserCommentOnly = (state = false, payload) => {
    switch (payload.type) {
        case 'SHOW_USER_COMMENT_ONLY':
            return payload.isShowUserCommentOnly;
        default:
            return state;
    }
};

export const timeEventLoadingStatus = (state = false, payload) => {
    switch (payload.type) {
        case 'SET_LOADING_FLAG':
            return payload.isLoading;
        default:
            return state;
    }
};

export const timeEventLoadingResult = (state = false, payload) => {
    switch (payload.type) {
        case 'SET_LOADING_RESULT':
            return payload.hasError;
        default:
            return state;
    }
};

