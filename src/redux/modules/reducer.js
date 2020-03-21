import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import myinfo from './myinfo';

function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    myinfo,
  });
}
export default createRootReducer;
