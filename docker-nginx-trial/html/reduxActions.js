// //REDUX ACTION TYPES:

// /*
//  * Define all REDUX ACTION TYPES
//  */
// export const ADD_COMMENT = 'ADD_COMMENT';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// /*
//  * Other constants
//  */
// export const VISIBILITY_FILTER = { 
//   SHOW_ALL: 'SHOW_ALL', 
//   SHOW_APPROVED: 'SHOW_APPROVED'
// }

// /*
//  * Sample ACTIONS
//   */
// // {
// //   type: ADD_COMMENT,
// //   commentText: 'some comment'
// // }
// // {
// //   type: SET_VISIBILITY_FILTER,
// //   filter: true
// // }


// /*
//  * Define Action Creators
//  */
// function addComment(comment){
//   return {
//     type: ADD_COMMENT,
//     commentText: comment
//   }
// }

// function setCommentVisibilityFilter(filter){
//   return {
//     type: SET_VISIBILITY_FILTER,
//     filter: filter
//   }
// }

// export { addComment, setCommentVisibilityFilter }



// Redux - Actions
const ADD_TODO = 'INCREMENT';
const DEC_TODO = 'DECREMENT';

// Redux - ActionCreators
function addTodo(num){
  return {
    type: ADD_TODO,
    number: num
  }
} 
function removeTodo(num){
  return {
    type: DEC_TODO,
    number: num
  }
}

export { addTodo, removeTodo }