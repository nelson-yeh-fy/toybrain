export const addToTimeEvent = (item) => {
    console.log('adding time event:', item);
    return {
        type: 'ADD_TimeEvent',
        item
    };
};

export const initializeTimeEvent = (item) => {
    console.log('initialize time event:', item);
    return {
        type: 'INI_TimeEvent',
        item
    };
};

