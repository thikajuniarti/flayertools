import React,{ Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

function DrawerPage(props){
  return(
    <Drawer
      title="Registration Form New Organisation"
      width={720}
      onClose={props.onClose}
      visible={props.visible}
    >
      <Form layout="vertical" hideRequiredMark>
        <div>
          <Form.Item >
            <Input placeholder="Organisation's name" className="input-form" prefix={<Icon type="user" />}/>
          </Form.Item>
        </div>
        <div>
          <Form.Item>
            <TextArea
              className="input-form"
              placeholder="Organisation Address"
              autosize={{ minRows: 2, maxRows: 6 }}
              prefix={<Icon type="user" />}
            />
          </Form.Item>
        </div>
        <Row gutter={10}>
          <Col span={8}>
            <Form.Item >
              <Input placeholder="City" className="input-form" prefix={<Icon type="user" />}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item >
              <Input placeholder="Country" className="input-form" prefix={<Icon type="user" />}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item >
              <Input placeholder="Post Code" className="input-form" prefix={<Icon type="user" />}/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={24}>
            <Form.Item >
              <Input placeholder="Domain name" className="input-form" prefix={<Icon type="user" />}/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item>
              <Select placeholder="Profile Organisation" className="input-form">
                <Option value="organisation">Payment by Organisation</Option>
                <Option value="account">Payment by Account</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }}
      >
        <Button onClick={props.onClose} style={{ marginRight: 8 }}>
          Cancel
        </Button>
        <Button onClick={props.onClose} type="primary">
          Submit
        </Button>
      </div>
    </Drawer>
  )
}

export default DrawerPage;
