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

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  ${({ checked }) => checked && `opacity: 0.5`};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
`;

const TodoListItem = ({ checked, text, id, onChange, onRemove }) => (
  <StyledListItem>
    <StyledParagraph checked={checked}>{text}</StyledParagraph>
    <StyledButtonWrapper>
      <RoundCheckbox id={id} checked={checked} onChange={onChange} />
      <form onSubmit={onRemove}>
        <StyledHiddenButton>
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
