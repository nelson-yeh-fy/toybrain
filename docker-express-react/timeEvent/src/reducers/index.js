import todo from './todo';
import cart from './cart';
import { timeEvents, timeEventLoadingStatus, timeEventLoadingResult } from './timeEvent';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    cart,
    todo,
    timeEvents,
    timeEventLoadingStatus,
    timeEventLoadingResult
});
export default rootReducer;
