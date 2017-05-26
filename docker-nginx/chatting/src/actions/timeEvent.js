export const addToTimeEvent = (item) => {
    console.log('adding time event:', item);
    return {
        type: 'ADD_TimeEvent',
        item
    };
};
