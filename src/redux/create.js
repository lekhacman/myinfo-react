import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './modules/reducer';

/**
 * Create redux store with preloadedState
 * @param history
 * @param api
 * @param preloadedState
 * @returns {Object}
 */
export default function configStore(history, api, preloadedState) {
  const middleware = [
    routerMiddleware(history),
    thunk.withExtraArgument({ api }),
  ];
  const rootReducer = createRootReducer(history);

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware.apply(null, middleware)
  );
}
