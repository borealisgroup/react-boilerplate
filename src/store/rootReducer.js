import { combineReducers } from 'redux';
import todo from './todo/todo.duck';
import user from './user/user.duck';

export default combineReducers({
  todo,
  user,
});
