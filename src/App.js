import React, { Component } from 'react';
import './style/theme.less';
import {Layout } from 'antd';
import Sidebar from './layouts/sidebar';
import Topbar from './layouts/topbar';
import ContentRouter from './layouts/ContentRouter';
import LoginPage from './pages/LoginPage';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import LoginContext from "./config/LoginContext";

import setting from "./config/settings";
import * as client from "./config/client";
import * as user from "./helpers/user";

const { Content, Footer  } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      user: ""
    };

    this.loginSubmit = this.loginSubmit.bind(this);
  }

  componentDidMount(){
    const storage = user.getUser();
    this.setState({
      ...storage
    })
  }

  loginSubmit(dataUser) {
    this.setState({
      user: dataUser.user,
      token: dataUser.token
    })

    user.setUser(this.state)
  }

  render(){
    return (
      <>
        <LoginContext.Provider value={this.state}>
          <ApolloProvider client={client.createClient(this.state.token)}>
            {!this.state.token && (<LoginPage onclick={this.loginSubmit}/>)}
            {this.state.token && (<Layout className="layout">
              <Sidebar />
              <Layout style={{ marginLeft: 90 }}>
                <Content style={{ padding: '0 50px' }}>
                  <Topbar />
                  <ContentRouter />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>
            </Layout>)}
          </ApolloProvider>
        </LoginContext.Provider>
      </>
    );
  }
}

export default App;
