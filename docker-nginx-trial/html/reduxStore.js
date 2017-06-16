//REDUX STORE:
import { createStore } from 'redux'

// /* 
//  * Import essential REDUX ACTION TYPES
//  */
// import * as ReduxActions from './reduxActions'
// const { SHOW_ALL } = ReduxActions.visibilityFilter

/* 
 * Import essential REDUX REDUCERS
 */
import * as ReduxReducers from  './reduxReducers'
let store = createStore(ReduxReducers.commentApp)


// log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe( () => 
  console.log(store.getState())
)

store.dispatch(ReduxActions.addComment('learn about actions1'))
store.dispatch(ReduxActions.addComment('learn about actions2'))
store.dispatch(ReduxActions.setCommentVisibilityFilter(VISIBILITY_FILTER.SHOW_ALL))

unsubscribe()