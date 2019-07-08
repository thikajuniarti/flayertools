import React, { Component} from 'react'
import {Layout, Menu, Icon} from 'antd';

const { Sider  } = Layout;

class Sidebar extends Component{
  render(){
    return (
      <>
        <Sider collapsed={true} className='primary-layout' style={{height: '100vh', position: 'fixed', left:0}}>
          <div className="logo" />
          <Menu theme="dark" className='primary-layout center-side-menu' style={{ background:'transparent'}}>
            <Menu.Item key="1">
            <Icon type="star" />
              <a href="/organization">Organization</a>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="book" />
              <a href="/contents">Content</a>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="contacts" />
              <a href="/leads">Leads</a>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="team" />
              <a href="/staffs">Staff</a>
            </Menu.Item>
            <Menu.Item key="4">
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