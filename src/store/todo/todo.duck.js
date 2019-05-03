import { createActions, handleActions } from 'redux-actions';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'I',
      checked: false,
    },
  ],
  lastId: 1,
};

const TODO_ADD = 'TODO_ADD';
const TODO_REMOVE = 'TODO_REMOVE';
const TODO_UPDATE = 'TODO_UPDATE';

export const { todoAdd, todoRemove, todoUpdate } = createActions(
  TODO_ADD,
  TODO_REMOVE,
  TODO_UPDATE
);

export default handleActions(
  {
    [TODO_ADD]: (state, action) => ({
      ...state,
      todos: state.todos.concat({
        text: action.payload,
        id: state.lastId + 1,
        checked: false,
      }),
      lastId: state.lastId + 1,
    }),
    [TODO_REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter(t => t.id !== action.payload),
    }),
    [TODO_UPDATE]: (state, action) => {
      const todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
    },
  },
  initialState
);
