import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getTodos } from 'store/todo/todo.selectors';
import TodoList from './TodoList';

export const TodoListContainer = ({ todo: { todos }, ...props }) => (
  <TodoList data={todos} {...props} />
);

const mapStateToProps = () =>
  createStructuredSelector({
    todo: getTodos,
  });

export default connect(
  mapStateToProps,
  {}
)(TodoListContainer);
