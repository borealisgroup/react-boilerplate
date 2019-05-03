import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[1]}px;
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
  <Wrapper>
    <Label htmlFor={id}>{labelText}</Label>
    <Input id={id} type={type} placeholder={placeholder} {...props} />
  </Wrapper>
);

TextInput.defaultProps = {
  type: 'text',
  labelText: 'Label title',
  placeholder: 'Type something',
  id: 'test',
};

export default TextInput;
