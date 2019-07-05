import React, { Component} from 'react'
import {Layout, Menu, Icon} from 'antd';

const { Sider  } = Layout;

class Sidebar extends Component{
  render(){
    return (
      <>
        <Sider collapsed={true} className='primary-layout' style={{height: '100vh', position: 'fixed', left:0}}>
          <div className="logo" />
          <Menu theme="dark" className='primary-layout center-side-menu'>
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