import * as types from './types';

// Redux - Action Creators for FilterTable
export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}


// Redux - Action Creators for TodoBoard
let nextTodoId = 1
export function addTodo(text){
  return {
		type: types.ADD_TODO,
    id: nextTodoId++,
    text
  };
} 

export const setVisibilityFilter = (filter) => {
  return {
    type: types.FILTER_TODO,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

// export function decTodo(num){
//   return {
// 		type: types.DEC_TODO,
// 		number: num
//   };
// }

// export function postTodo(todoItem){
//   return {
//     type: types.POST_TODO,
//     todoItem: todoItem
//   };
// }

// export function removeTodo(){
//   return {
//     type: types.REMOVE_TODO
//   };
// }