import React, { Component} from 'react'
import {Layout, Menu, Icon, Avatar} from 'antd';

const { Sider  } = Layout;

class Sidebar extends Component{
  render(){
    return (
      <>
        <Sider collapsed={true} className='primary-layout' style={{ paddingTop: 100}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='primary-layout'>
            <Menu.Item key="1">
              <Icon type="book" />
              <span>Content</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>Leads</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="team" />
              <span>Staff</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="logout" />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </>
    )
  }
}

export default Sidebar