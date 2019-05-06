import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoAdd } from 'store/todo/todo.duck';
import TodoForm from './TodoForm';

const TodoFormContainer = ({ onAdd, ...props }) => {
  const [text, setText] = useState('');
  const submitForm = event => {
    event.preventDefault();
    onAdd(text);
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

const mapDispatchToProps = dispatch => ({
  onAdd: text => dispatch(todoAdd(text)),
});

export default connect(
  null,
  mapDispatchToProps
)(TodoFormContainer);
