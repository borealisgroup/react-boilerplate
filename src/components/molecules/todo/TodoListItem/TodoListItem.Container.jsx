import React from 'react';
import { todoUpdate, todoRemove } from 'store/todo/todo.duck';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

const TodoListItemContainer = ({ onRemove, onUpdate, ...props }) => (
  <TodoListItem
    onChange={() => onUpdate({ id: props.id, checked: !props.checked })}
    onRemove={() => onRemove(props.id)}
    {...props}
  />
);

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(todoRemove(id)),
  onUpdate: todo => dispatch(todoUpdate(todo)),
});

export default connect(
  null,
  mapDispatchToProps
)(TodoListItemContainer);
