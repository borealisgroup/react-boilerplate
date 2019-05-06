import React from 'react';
import styled from 'styled-components';
import { RoundCheckbox } from 'components';
import { ReactComponent as RemoveIcon } from 'assets/icons/remove.svg';
import { StyledHiddenButton } from 'styled';

const StyledListItem = styled.li`
  margin: ${({ theme }) => theme.space[4]}px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  ${({ checked }) => checked && `opacity: 0.5`};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;
`;

const TodoListItem = ({ checked, text, id, onChange, onRemove }) => (
  <StyledListItem>
    <StyledLabel htmlFor={id} checked={checked}>
      {text}
    </StyledLabel>
    <StyledButtonWrapper>
      <RoundCheckbox id={id} checked={checked} onChange={onChange} />
      <form onSubmit={onRemove}>
        <StyledHiddenButton aria-label="Remove this todo">
          <RemoveIcon />
        </StyledHiddenButton>
      </form>
    </StyledButtonWrapper>
  </StyledListItem>
);

TodoListItem.defaultProps = {
  id: 1,
  checked: true,
  text: 'Default todo text',
  onChange: () => console.info('check'),
};

export default TodoListItem;
