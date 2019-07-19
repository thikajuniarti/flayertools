import React, { Component} from 'react';
import { Row, Col, Card, Icon, Modal, Button, Select, Avatar, Form, Input, Radio} from 'antd';
import { ApolloConsumer } from "react-apollo";
import logo_v from "../assets/img/login_logo.svg";
import { signInUser } from "../config/queries";

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      username: e.target.name === "username" ? e.target.value : this.state.username,
      password: e.target.name === "password" ? e.target.value : this.state.password
    })
  }

  handleSubmit(e){
    e.preventDefault();

    this.aclient
      .mutate({
        mutation: signInUser,
        variables: {
          email: this.state.username,
          password: this.state.password
        }
      })
      .then(result => {
      this.props.onclick(result.data.signInUser)
      })
      .catch(error => {
        console.log(error.toString());
      });
  }

  render(){
    const rowButtonStyle = { marginTop: "30px", marginBottom: "20px" };

    return(
      <>
        <Row
          type="flex"
          justify="center"
          align="middle"
          className="layoutLogin"
        >
          <Col span={24}>
            <center>
              <Card style={{ width: 1000, borderRadius: 7 }}>
                <Row type="flex" justify="center" align="center">
                  <Col span={12}>
                    <img src={logo_v} width={400} style={{ marginTop: 50 }} alt="Dashby" className="logo" />
                  </Col>
                  <Col span={12}>
                    <p style={{ textAlign: "left", marginTop: 50 }} >
                      <span className='text-login'>Welcome Back!</span><br />
                      Please input your username and password first
                    </p>
                    <Form onSubmit={this.handleSubmit} style={{ marginTop: 40 }}>
                      <Form.Item>
                        <Input
                          name="username"
                          size="large"
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                          className="input-form"
                          onChange={this.handleChange}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          name="password"
                          password="password"
                          size="large"
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="Password"
                          className="input-form"
                          onChange={this.handleChange}
                        />
                        <Row style={{ marginTop: 3 }}>
                          <Col span={12} style={{ textAlign: "left" }}>
                            <Radio>
                              Remember Me
                            </Radio>
                          </Col>
                          <Col span={12} style={{ textAlign: "right" }}>
                            <a className="login-form-forgot" href="">
                              Forgot password ?
                            </a>
                          </Col>
                        </Row>
                      </Form.Item>

                      <Input type="submit" value="Login" className="Button-primary" />

                    </Form>
                  </Col>
                </Row>
              </Card>
            </center>
          </Col>
        </Row>

        <ApolloConsumer>
          {client => {
            this.aclient = client;
            return <></>;
          }}
        </ApolloConsumer>
      </>
    )
  }
}

export default LoginPage
