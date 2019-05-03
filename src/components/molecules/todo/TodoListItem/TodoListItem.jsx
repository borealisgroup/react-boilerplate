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

const TodoListItem = ({ checked, onChange }) => (
  <StyledListItem>
    <StyledParagraph checked={checked}>Create a new dashboard</StyledParagraph>
    <StyledButtonWrapper>
      <RoundCheckbox checked={checked} onChange={onChange} />
      <StyledHiddenButton>
        <RemoveIcon />
      </StyledHiddenButton>
    </StyledButtonWrapper>
  </StyledListItem>
);

TodoListItem.defaultProps = {
  checked: true,
  onChange: () => console.info('check'),
};

export default TodoListItem;
