// Redux - Reducers Default State for TodoList
const initialTimeEventList = {
    idx: 1494578015311,
    showComments: true,
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
            return payload.LoadingError;
        default:
            return state;
    }
};

