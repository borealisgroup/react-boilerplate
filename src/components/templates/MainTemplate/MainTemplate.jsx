import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const HeaderWrapper = styled.div``;
const ContentWrapper = styled.div``;

const MainTemplate = ({ header, content, ...props }) => (
  <Wrapper {...props}>
    <HeaderWrapper>{header}</HeaderWrapper>
    <ContentWrapper>{content}</ContentWrapper>
  </Wrapper>
);

MainTemplate.propTypes = {};

MainTemplate.defaultProps = {};

export default MainTemplate;
