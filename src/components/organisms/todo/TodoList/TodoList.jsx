import React from 'react';
import styled from 'styled-components';
import { TodoListItem } from 'components';

const StyledTodoListItem = styled(TodoListItem)``; // MARGINS SHOULD BE DONE HERE BUT IT'S NOT WORKING

const StyledList = styled.ul`
  margin: ${({ theme }) => theme.space[5]}px 0px;
`;

const TodoList = ({ data }) => (
  <StyledList>
    {data.map(props => (
      <StyledTodoListItem key={props.id} {...props} />
    ))}
  </StyledList>
);

export default TodoList;
