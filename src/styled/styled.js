import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: calc(${({ theme }) => theme.space[1]}px - 1px);
  border: ${({ theme }) => theme.borders[1]}
    ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.transparent};
  box-sizing: border-box;
  min-width: 80px;
`;

export const StyledHiddenButton = styled.button`
  background-color: transparent;
  border: none;
`;
