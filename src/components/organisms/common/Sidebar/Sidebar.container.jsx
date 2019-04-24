import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Sidebar from './Sidebar';

export const SidebarContainer = ({ ...props }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onSelect = (selectedKeys, info) => {
    console.info('selected', selectedKeys, info);
  };

  const onExpand = () => {
    console.info('Trigger Expand');
  };

  return (
    <Sidebar
      {...props}
      collapsed={collapsed}
      toggleCollapsed={toggleCollapsed}
      onSelect={onSelect}
      onExpand={onExpand}
    />
  );
};

const mapStateToProps = () => createStructuredSelector({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
