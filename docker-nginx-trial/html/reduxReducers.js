//REDUX REDUCERS:
import { combineReducers } from 'redux'

/* 
 * Import essential REDUX ACTION TYPES
 */
import * as ReduxActions from './reduxActions'
const { SHOW_ALL } = ReduxActions.visibilityFilter

const initialComment = {
  visibilityFilter: true,
  comments: [
      {
        id:1, author: "Default author", body: "Default body"
      }
      ]
}

/*
 * Define Reducers
 */
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function comments(state = initialComment, action){
  switch (action.type) {
    case ReduxActions.ADD_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.concat([action.commentText])
      })

    default:
      return state
  }
}

const commentApp = combineReducers({
  visibilityFilter,
  comments
})

export { commentApp } 