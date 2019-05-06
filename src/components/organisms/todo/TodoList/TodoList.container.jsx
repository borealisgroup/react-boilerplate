import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from 'store/todo/todo.selectors';
import TodoList from './TodoList';

export const TodoListContainer = props => (
  <TodoList data={useSelector(getTodos)} {...props} />
);

export default TodoListContainer;
