import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'components';
import { StyledButton } from 'styled';
import { useT } from 'hooks';

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
`;

const StyledAddButton = styled(StyledButton)`
  margin-left: ${({ theme }) => theme.space[3]}px;
`;

const TodoForm = ({ onSubmit, onChange, value }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        value={value}
        labelText={useT('new_todo')}
      />
      <StyledAddButton>Add</StyledAddButton>
    </StyledForm>
  );
};

TodoForm.defaultProps = {
  onSubmit: () => console.info('submit'),
};

export default TodoForm;
