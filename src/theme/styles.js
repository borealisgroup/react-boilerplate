import { css } from 'styled-components';

export const card = () => css`
  box-shadow: ${({ theme }) => theme.shadows.level1};
`;
