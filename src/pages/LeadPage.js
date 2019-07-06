import React, { Component} from 'react';
import { Row, Col, Card, Icon, Modal, Button, Select, Avatar, Form} from 'antd';
import { Input } from 'antd';
import new_lead from "../assets/img/new_lead.svg"

const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;

class LeadPage extends Component {
  
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render(){
    return(
      <>
          <p>
              <h3 style={{ marginBottom: 0}}>
                Total Leads - 120 Leads
                <span style={{ float:'right'}}>
                    <Button type="primary" style={{ marginRight:10}} className="shadow" onClick={this.showModal}>
                      <Icon type="plus-circle" /> Create New Leads
                    </Button>
                    <Select defaultValue="Zhejiang" className="shadow" style={{ marginRight:10}}>
                      <Option value="Zhejiang">Financial</Option>
                      <Option value="Jiangsu">Jiangsu</Option>
                    </Select>
                  <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 300 }}
                    className="shadow"
                  />
                </span>
              </h3>
              <small>List of your leads</small>
          </p>
        
          <Row gutter={24}>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>

            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Meta
                    avatar={
                      <Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff' }}>R</Avatar>
                    }
                    title="Rohmania Ardian Megan"
                    description={
                      <div>
                        <small style={{ marginRight:10}}><Icon type="mail" /> rohamnia@gmail.com</small><br />
                        <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                      </div>
                    }
                  />
  
              </Card>
            </Col>
            
          </Row>

          <Row gutter={24}>
            <Col span={12}>
             
            </Col>
          </Row>

          <Modal
            visible={this.state.visible}
            width={600}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <Form layout="vertical" hideRequiredMark><br />
            <Row gutter={24}>
              <Col span={10}>
                <img src={new_lead} width={200} style={{ marginTop:50}} height="auto" />
              </Col>
              <Col span={14}>
                <h3 style={{ marginBottom:0}}>New Lead Form</h3>
                <small>Fill all lead form below</small>
                <br /><br />
                <Form.Item style={{ marginBottom:10}}>
                  <Input placeholder="Fullname" className="input-form" prefix={<Icon type="user" />}/>
                </Form.Item>

                <Form.Item style={{ marginBottom:10}}>
                  <Input placeholder="Email Address" className="input-form" prefix={<Icon type="mail" />}/>
                </Form.Item>

                <Form.Item style={{ marginBottom:10}}>
                  <Input placeholder="Call Number" className="input-form" prefix={<Icon type="phone" />} />
                </Form.Item><br />
                <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk} style={{float: "left"}}>
                  <Icon type="plus-circle" />
                  Create Lead
                </Button>
              </Col>
              </Row>
              <br />
            </Form>
          </Modal>
      </>
    )
  }
}

export default LeadPage