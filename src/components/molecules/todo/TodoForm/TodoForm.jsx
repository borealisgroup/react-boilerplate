import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'components';
import { StyledButton } from 'styled';

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
`;

const StyledAddButton = styled(StyledButton)`
  margin-left: ${({ theme }) => theme.space[3]}px;
`;

const TodoForm = () => (
  <StyledForm>
    <TextInput labelText="New todo" />
    <StyledAddButton>Add</StyledAddButton>
  </StyledForm>
);

export default TodoForm;
