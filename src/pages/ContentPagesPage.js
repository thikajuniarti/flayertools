import React, { Component} from 'react';
import { Row, Col, Card, Icon, Tooltip, Button, Select, Tag} from 'antd';
import { Input } from 'antd';

const { Search } = Input;
const InputGroup = Input.Group;
const { Option } = Select;

class  ContentPagesPage extends Component {
  render(){
    return(
      <>
          <p>
              <h3 style={{ marginBottom: 0}}>
                Making a money quickly - 7 Pages
                <span style={{ float:'right'}}>
                  <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 300 }}
                    className="shadow"
                  />
                </span>
              </h3>
              <small>Page list of contents</small>
          </p>
        
          <Row gutter={24}>
            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 1"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 1"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 2"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 3"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 4"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 5"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 6"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 6"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 6"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 6"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 6"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 6"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card
                title="Page 6"
                className="shadow"
                extra={
                  <Tooltip title="Page Order">
                    <Tag color="blue" style={{ marginRight:0}}>1</Tag>
                  </Tooltip>
                }
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada lah sebuah</h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                  </p>
              </Card>
            </Col>

            <Col span={4} className="card-margin-btm">
              <Card className="shadow" >
                <p style={{ textAlign: 'center'}}>
                    <p>
                      <br /><br />
                      <Icon type="plus-circle" style={{ fontSize:47, color:'#2d8dee'}}/>
                    </p> 
                    
                    <h4>Create New Page</h4>
                    <small style={{ marginRight:10}}>Create new page 8</small>
                    <br /><br />
                  </p>
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

export default ContentPagesPage