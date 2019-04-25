import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Label = ({ text }) => <StyledLabel>{text}</StyledLabel>;

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
