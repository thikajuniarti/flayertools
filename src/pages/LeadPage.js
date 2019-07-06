import React, { Component} from 'react';
import { Row, Col, Card, Icon, Tooltip, Button, Select, Avatar} from 'antd';
import { Input } from 'antd';

const { Meta } = Card;
const { Search } = Input;
const InputGroup = Input.Group;
const { Option } = Select;

class LeadPage extends Component {
  render(){
    return(
      <>
          <p>
              <h3 style={{ marginBottom: 0}}>
                Total Leads - 120 Leads
                <span style={{ float:'right'}}>
                  <Button type="primary" style={{ marginRight:10}} className="shadow">
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
      </>
    )
  }
}

export default LeadPage