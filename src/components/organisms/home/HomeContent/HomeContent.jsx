import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 100vh;
  color: white;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
`;

const StyledLogo = styled(Logo)`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Link = styled.a`
  color: #61dafb;
`;

const HomeContent = () => (
  <Wrapper>
    <StyledLogo />
    <p>
      Edit <code>src/components/App.js</code> and save to reload.
    </p>
    <Button type="primary">Test</Button>
    <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </Link>
  </Wrapper>
);

export default HomeContent;
