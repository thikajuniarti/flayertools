import React, { Component} from 'react';
import { Row, Col, Card, Icon, Modal, Button, Select, Avatar, Form, Input, Radio} from 'antd';
import logo_v from "../assets/img/login_logo.svg";

class LoginPage extends Component {
  render(){
    const rowButtonStyle = { marginTop: "30px", marginBottom: "20px" };

    return(
      <Row type="flex" align="center" justify="center" className="layoutLogin">
        <Col span={24}>
          <center>
            <Card bordered={true} justify="center" type="flex" align="center">
              <Row type="flex" justify="center" align="center">
                <Col span={12}>
                  <img src={logo_v} width={500} style={{ marginTop: 50 }} alt="Dashby" className="logo" />
                </Col>
                <Col span={12}>
                  <p style={{ textAlign: "left", marginTop: 50 }} >
                    <span className='text-login'>Welcome Back!</span><br />
                    Please input your username and password first
                  </p>
                  <Form onSubmit={this.handleSubmit} className="login-form" style={{ marginTop: 40 }}>
                    <Form.Item>
                      <Input
                        size="large"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        className="input-form"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Input
                        size="large"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        className="input-form"
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

                    <Button type="primary" size='large' block onClick={this.props.onclick}>
                      Sign In
                    </Button>

                  </Form>
                </Col>
              </Row>
            </Card>
          </center>
        </Col>
      </Row>
    )
  }
}

export default LoginPage
