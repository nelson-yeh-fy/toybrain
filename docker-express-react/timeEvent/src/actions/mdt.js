export const addToTimeEvent = (item) => {
    return {
        type: 'ADD_TIMEEVENT',
        item
    };
};

export const showTimeEvent = (bool) => {
    return {
        type: 'SHOW_TIMEEVENT',
        isShowTimeEvent: bool
    };
};
