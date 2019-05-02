import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
  &:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }
`;

const RoundCheckbox = () => (
  <Wrapper>
    <input type="checkbox" id="checkbox" />
    <Label htmlFor="checkbox" />
  </Wrapper>
);

export default RoundCheckbox;
