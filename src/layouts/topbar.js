import React, { Component } from 'react';
import { Menu, Layout, Icon } from 'antd';

const { Header } = Layout

class Topbar extends Component {
  render(){
    return(
      <Header style={{ background: 'transparent', border:0, padding: 0 }}>
        <Icon
          className="trigger"
          type={"setting"}
          onClick={this.toggle}
        />
        <Menu
          theme="light"
          mode="horizontal"
          style={{ lineHeight: '74px', float:"right", border:0, background:'transparent' }}
        >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      </Header>
    )
  }
}

export default Topbar;