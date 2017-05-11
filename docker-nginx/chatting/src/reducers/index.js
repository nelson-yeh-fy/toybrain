import todo from './todo';
import cart from './cart';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    cart,
    todo
});
export default rootReducer;
