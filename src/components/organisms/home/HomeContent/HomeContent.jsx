import React from 'react';
import styled from 'styled-components';
import { Borealis } from '@borealisgroup/components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizesFluid[2]};
`;

const StyledLogo = styled(Borealis)`
  height: 80px;
  pointer-events: none;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.tertiary};
`;

const HomeContent = () => (
  <Wrapper>
    <StyledLogo tagline={false} />
    <p>
      Edit <code>src/components/App.js</code> and save to reload.
    </p>
    <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </Link>
  </Wrapper>
);

export default HomeContent;
