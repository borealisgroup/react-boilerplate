import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

const TodoListItemContainer = () => {
  const [checked, setChecked] = useState(false);
  return (
    <TodoListItem checked={checked} onChange={() => setChecked(!checked)} />
  );
};

export default TodoListItemContainer;
