import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'components';
import { StyledButton } from 'styled';
import { useTranslation } from 'hooks';

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
`;

const StyledAddButton = styled(StyledButton)`
  margin-left: ${({ theme }) => theme.space[3]}px;
`;

const TodoForm = ({ onSubmit, onChange, value }) => {
  const { t } = useTranslation();
  return (
    <StyledForm onSubmit={onSubmit}>
      <TextInput
        placeholder={t('TODO.FORM.TITLE')}
        onChange={onChange}
        value={value}
        labelText={t('TODO.FORM.PLACEHOLDER')}
      />
      <StyledAddButton>{t('TODO.FORM.SUBMIT')}</StyledAddButton>
    </StyledForm>
  );
};

TodoForm.defaultProps = {
  onSubmit: () => console.info('submit'),
};

export default TodoForm;
