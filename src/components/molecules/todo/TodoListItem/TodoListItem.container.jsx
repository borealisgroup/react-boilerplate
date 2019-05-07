import React from 'react';
import { useDispatch } from 'react-redux';
import { todoUpdate, todoRemove } from 'store/todo/todo.duck';
import TodoListItem from './TodoListItem';

const TodoListItemContainer = ({ onRemove, onUpdate, ...props }) => {
  const dispatch = useDispatch();
  return (
    <TodoListItem
      onChange={() =>
        dispatch(todoUpdate({ id: props.id, checked: !props.checked }))
      }
      onRemove={() => dispatch(todoRemove(props.id))}
      {...props}
    />
  );
};

export default TodoListItemContainer;
