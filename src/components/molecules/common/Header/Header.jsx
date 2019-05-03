import React from 'react';
import styled from 'styled-components';
import { Borealis } from '@borealisgroup/components';

const StyledHeader = styled.header`
  height: 60px;
  border-bottom: ${({ theme }) => theme.borders[1]}
    ${({ theme }) => theme.colors.primary};
  padding: 0px ${({ theme }) => theme.space[4]}px;
  display: flex;
  align-items: center;
`;

const StyledLogo = styled(Borealis)`
  height: 75%;
`;

const Header = () => (
  <StyledHeader>
    <StyledLogo />
  </StyledHeader>
);

export default Header;
