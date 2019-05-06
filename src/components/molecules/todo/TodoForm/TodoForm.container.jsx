import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from 'store/todo/todo.duck';
import TodoForm from './TodoForm';

const TodoFormContainer = props => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const submitForm = event => {
    event.preventDefault();
    dispatch(todoAdd(text));
    setText('');
  };
  return (
    <TodoForm
      value={text}
      onChange={event => setText(event.target.value)}
      onSubmit={submitForm}
      {...props}
    />
  );
};

export default TodoFormContainer;
