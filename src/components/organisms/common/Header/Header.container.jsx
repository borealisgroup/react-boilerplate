import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './Header';

export const HeaderContainer = ({ ...props }) => {
  return <Header {...props} />;
};

const mapStateToProps = () => createStructuredSelector({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
