import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { ENV } from 'config/env.config';
import createRootReducer from './rootReducer';

/**
 * Create Redux store
 */

export const history = createBrowserHistory();

const enhancers = [];
const middlewares = [thunk, routerMiddleware(history)];

if (ENV.dev) {
  // Logger MUST be the last middleware in the middleware array
  const logger = createLogger({
    collapsed: true,
    logger: console,
    colors: {
      title: action => {
        if (action.type.endsWith('LOCATION_CHANGE')) return '#fa541c';
        if (action.type.includes('EMIT')) return '#ffadd2';
        if (action.type.includes('UPDATE')) return '#13c2c2';
        if (action.type.includes('INIT')) return '#d3adf7';
        if (action.type.includes('RESET')) return '#b37feb';
        if (action.type.endsWith('SUCCESS')) return '#52c41a';
        if (action.type.endsWith('FAILURE')) return '#f5222d';
        if (action.type.includes('FETCH')) return '#faad14';
        return '#1890ff';
      },
      prevState: () => '#9E9E9E',
      action: () => '#03A9F4',
      nextState: () => '#4CAF50',
      error: () => '#F20404',
    },
  });
  middlewares.push(logger);
}

const composedEnhancers = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    ...middlewares
  ),
  ...enhancers
);

const store = createStore(
  createRootReducer(history), // root reducer with router state
  composedEnhancers
);

export default store;
