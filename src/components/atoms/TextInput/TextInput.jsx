import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  display: block;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ theme }) => theme.space[1]}px;
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.primary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.darkblue[1]};
  }
`;

const TextInput = ({ type, labelText, id, placeholder, ...props }) => (
  <>
    <Label htmlFor={id}>{labelText}</Label>
    <Input id={id} type={type} placeholder={placeholder} {...props} />
  </>
);

TextInput.defaultProps = {
  type: 'text',
  labelText: 'Label title',
  placeholder: 'Type something',
  id: 'test',
};

export default TextInput;
