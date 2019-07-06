import React from 'react';
import './style/theme.less';
import {Layout } from 'antd';
import Sidebar from './layouts/sidebar';
import Topbar from './layouts/topbar';
import ContentRouter from './layouts/ContentRouter';

const { Content, Footer  } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout style={{ marginLeft: 90 }}>
        <Content style={{ padding: '0 50px' }}>
          <Topbar />
          <ContentRouter />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

    </Layout>
  );
}

export default App;
