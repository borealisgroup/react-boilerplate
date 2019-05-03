// Inspired from https://codepen.io/AllThingsSmitty/pen/WjZVjo
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
`;

const OuterCircle = styled.label`
  position: absolute;
  border: ${({ theme }) => theme.borders[1]}
    ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiuses[3]};
  cursor: pointer;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerCircle = styled.div`
  height: 0%;
  width: 0%;
  border-radius: ${({ theme }) => theme.borderRadiuses[3]};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;
`;

const Input = styled.input`
  opacity: 0;
  &:focus + ${OuterCircle} {
    outline-color: #4d90fe;
    outline-offset: -2px;
    outline-style: auto;
    outline-width: 5px;
  }
  &:checked + ${OuterCircle} > ${InnerCircle} {
    height: 75%;
    width: 75%;
  }
`;

const RoundCheckbox = ({ checked, onChange, ...props }) => (
  <Wrapper>
    <Input
      checked={checked}
      onChange={onChange}
      type="checkbox"
      id="checkbox"
      {...props}
    />
    <OuterCircle htmlFor="checkbox">
      <InnerCircle />
    </OuterCircle>
  </Wrapper>
);

RoundCheckbox.defaultProps = {
  checked: true,
  onChange: () => console.info('check'),
};

export default RoundCheckbox;
