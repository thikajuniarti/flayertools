import React from 'react';
import './style/theme.less';

import {Layout, Menu, Typography, Button, Row, Col, Card, Icon, Switch, Statistic, Avatar} from 'antd';
import Sidebar from './layouts/sidebar';
import Topbar from './layouts/topbar';
const { Header, Content, Footer  } = Layout;
const { Text } = Typography

function App() {
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout>
      

      <Content style={{ padding: '0 50px' }}>
        <Topbar />
        <Row gutter={24}>
          <Col span={24}>
            <Card bordered={false} className="card-primary-gradient">
              <Row>
                <Col span={12}>
                  <Row type="flex" justify="start">
                    <Col span={3}>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={64} />
                    </Col>
                    <Col>
                     <strong>PT DIRGANTARA RAHAYU CITRA PERMATA</strong><br />
                      Emanuel Mojave <br />
                      <small>Administrator</small>
                    </Col>
                  </Row>
                   
                </Col>
                <Col span={4}>
                  <Statistic
                    title={<span style={{fontSize:18}}>Leads</span>}
                    value={234}
                    valueStyle={{ color: '#fff' }}
                    prefix={<Icon type="user" />}
                    suffix="peoples"
                  />
                </Col>
                <Col span={4}>
                  <Statistic
                    title={<span style={{fontSize:18}}>Contents</span>}
                    value={23}
                    valueStyle={{ color: '#fff' }}
                    prefix={<Icon type="book" />}
                    suffix="contents"
                  />
                  
                </Col>
                <Col span={4}>
                  <Statistic
                    title={<span style={{fontSize:18}}>Staffs</span>}
                    value={120}
                    valueStyle={{ color: '#fff' }}
                    prefix={<Icon type="team" />}
                    suffix="employees"
                  />
                  
                </Col>
              </Row>
              
              
            </Card>
          </Col>
        </Row><br />
        <p>
            <h3 style={{ marginBottom: 0}}>Popular Content - 4 items</h3>
            <small>Based of data lead in each contents</small>
        </p>
       
        <Row gutter={24}>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src="img.jpg" />}
              actions={[
                <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
              >
              <p>
                  <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                  <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                  
                </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src="img.jpg" />}
              actions={[
                <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
              >
              <p>
                  <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                  <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                  
                </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src="img.jpg" />}
              actions={[
                <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
              >
              <p>
                  <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                  <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                  
                </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src="img.jpg" />}
              actions={[
                <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
              >
                <p>
                  <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                  <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                </p>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      
    </Layout>
  );
}

export default App;
