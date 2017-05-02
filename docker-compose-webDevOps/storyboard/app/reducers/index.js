import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

// Redux - Reducers Default State for TodoBoard
const initialTodo = {
  id: 0,
  text: 'unknown',
  completed: false
}

// Redux - Reducers for TodoBoard
const todo = (state = {}, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false        
      }

    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    // case types.DEC_TODO:
    //   return {TodoCount: state.TodoCount - action.number};
    // case types.POST_TODO:
    //   return {TodoCount: state.TodoCount+1, TodoList: state.TodoList.concat([action.todoItem]) };
    // case types.REMOVE_TODO:
    //   return {TodoCount: state.TodoCount-1, TodoContent: action.content};
    default:
      return state;
  }
}

const todos = (state = [initialTodo], action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case types.TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state;
  }
}


const rootReducer = combineReducers({
    filter,
    todos,
    routing
});

export default rootReducer;