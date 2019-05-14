import { combineReducers } from 'redux'
// export { default as itemsByCategory } from './itemsByCategory';
// export { default as userPreference } from './userPreference';
// export { default as loadingStatus } from './loadingStatus';
// export { default as page } from './page';
import counter from './counter';

export default combineReducers({
  counter
})