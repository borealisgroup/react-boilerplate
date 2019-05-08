import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'components';
import { StyledButton } from 'styled';
import { useTranslation } from 'react-i18next';

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
`;

const StyledAddButton = styled(StyledButton)`
  margin-left: ${({ theme }) => theme.space[3]}px;
`;

const TodoForm = ({ onSubmit, onChange, value }) => {
  const { t } = useTranslation('TODO');
  return (
    <StyledForm onSubmit={onSubmit}>
      <TextInput
        placeholder={t('FORM.PLACEHOLDER')}
        onChange={onChange}
        value={value}
        labelText={t('FORM.TITLE')}
      />
      <StyledAddButton>{t('FORM.SUBMIT')}</StyledAddButton>
    </StyledForm>
  );
};

TodoForm.defaultProps = {
  onSubmit: () => console.info('submit'),
};

export default TodoForm;
