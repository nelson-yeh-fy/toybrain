// Redux - Reducers Default State for TodoList
const initialTodoList = {
    idx: "0123456879",
    showComments: true,
    completed: true,
    text: "Dispatching unit 0310, 0311 to CFS2017-00123" 
}

export default(state = [initialTodoList], payload) => {
    switch (payload.type) {
        case 'ADD_TODO':
            return [...state, payload.item];
        default:
            return state;
    }
};