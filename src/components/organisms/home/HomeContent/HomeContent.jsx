import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 100vh;
  color: ${({ theme }) => theme.colors.whitefade[0]};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;

const StyledLogo = styled(Logo)`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
  * {
    fill: ${({ theme }) => theme.colors.tertiary};
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.tertiary};
`;

const HomeContent = () => (
  <Wrapper>
    <StyledLogo />
    <p>
      Edit <code>src/components/App.js</code> and save to reload.
    </p>
    <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </Link>
  </Wrapper>
);

export default HomeContent;
