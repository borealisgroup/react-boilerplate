import React from 'react';
import styled from 'styled-components';
import { Header, TodoForm, TodoList } from 'components';

const StyledFormAndListWrapper = styled.article`
  padding: 0px ${({ theme }) => theme.space[4]}px;
  max-width: ${({ theme }) => theme.breakPoints[3]};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.space[5]}px;
`;

const TodoTemplate = () => (
  <main>
    <Header />
    <StyledFormAndListWrapper>
      <TodoForm />
      <TodoList />
    </StyledFormAndListWrapper>
  </main>
);

export default TodoTemplate;
