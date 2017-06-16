import todo from './todo';
import cart from './cart';
import timeEvent from './timeEvent';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    cart,
    todo,
    timeEvent
});
export default rootReducer;
