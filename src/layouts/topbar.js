import React, { Component } from 'react';
import { Menu, Layout, Icon, Card, Avatar } from 'antd';

const { Header } = Layout
const { SubMenu } = Menu

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
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={32} style={{ marginRight: 10}}/>
              Emanuel Mojave
            </span>
          }
        >
          <Card bordered={false}>
            Emaanuel Mojave
          </Card>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
        </SubMenu>
      </Menu>
      </Header>
    )
  }
}

export default Topbar;