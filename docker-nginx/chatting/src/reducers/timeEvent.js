// Redux - Reducers Default State for TodoList
const initialTimeEventList = {
    idx: 1494578015311,
    showComments: true,    
    text: 'Dispatching unit 0310 to CFS2017-00123',
    eventTime: '2017-05-06'
};

export default(state = [initialTimeEventList], payload) => {
    switch (payload.type) {
        case 'ADD_TimeEvent':
            return [...state, payload.item];
        default:
            return state;
    }
};
