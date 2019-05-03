import React from 'react';
import styled from 'styled-components';
import { TodoListItem } from 'components';

const StyledTodoListItem = styled(TodoListItem)``; // MARGINS SHOULD BE DONE HERE BUT IT'S NOT WORKING

const StyledList = styled.ul`
  margin: ${({ theme }) => theme.space[5]}px 0px;
`;

const TodoList = () => {
  return (
    <StyledList>
      <StyledTodoListItem />
      <StyledTodoListItem />
      <StyledTodoListItem />
    </StyledList>
  );
};

export default TodoList;
