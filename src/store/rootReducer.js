import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

/**
 * Root Reducer - with combine reducers
 * Combine all reducers in this file and export the combined reducers.
 */
export default history =>
  combineReducers({
    router: connectRouter(history),
  });
