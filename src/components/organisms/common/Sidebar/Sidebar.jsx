// import React from 'react';
// import styled from 'styled-components';
// import { Button, Icon, Menu, Tree } from 'antd';
// import DirectoryTree from 'antd/lib/tree/DirectoryTree';

// // const { SubMenu } = Menu;
// const { TreeNode } = Tree;

// const StyledTreeNode = styled(TreeNode)`
//   color: white;
//   .ant-tree-title,
//   .ant-tree-iconEle {
//     color: white;
//   }
// `;

// const Wrapper = styled.div`
//   position: absolute;
//   height: 100%;
// `;

// const StyledMenu = styled(Menu)`
//   height: 100%;
//   padding: 10px 20px 10px 5px !important;
// `;

// const Sidebar = ({ collapsed, toggleCollapsed, onSelect, onExpand }) => (
//   <Wrapper>
//     <StyledMenu
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       mode="inline"
//       theme="dark"
//       inlineCollapsed={collapsed}
//     >
//       <Button
//         type="primary"
//         onClick={toggleCollapsed}
//         style={{ marginBottom: 16 }}
//       >
//         <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
//       </Button>
//       <DirectoryTree
//         multiple
//         defaultExpandAll
//         onSelect={onSelect}
//         onExpand={onExpand}
//       >
//         <StyledTreeNode title="parent 0" key="0-0">
//           <StyledTreeNode title="leaf 0-0" key="0-0-0" isLeaf />
//           <StyledTreeNode title="leaf 0-1" key="0-0-1" isLeaf />
//         </StyledTreeNode>
//         <StyledTreeNode title="parent 1" key="0-1">
//           <StyledTreeNode title="leaf 1-0" key="0-1-0" isLeaf />
//           <StyledTreeNode title="leaf 1-1" key="0-1-1" isLeaf />
//         </StyledTreeNode>
//       </DirectoryTree>
//     </StyledMenu>
//   </Wrapper>
// );

// Sidebar.propTypes = {};

// export default Sidebar;
