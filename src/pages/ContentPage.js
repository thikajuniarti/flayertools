import React, { Component} from 'react';
import { Row, Col, Card, Icon, Switch, Button, Select} from 'antd';
import { Input } from 'antd';

const { Search } = Input;
const InputGroup = Input.Group;
const { Option } = Select;

class ContentPage extends Component {
  render(){
    return(
      <>
          <p>
              <h3 style={{ marginBottom: 0}}>
                All Content - 11 Items
                <span style={{ float:'right'}}>
                    <Button type="primary" style={{ marginRight:10}} className="shadow">
                      <Icon type="plus-circle" /> Create New
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
              <small>List of All Your Content</small>
          </p>
        
          <Row gutter={24}>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                    
                  </p>
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                    
                  </p>
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                    
                  </p>
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                  <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                  </p>
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                    
                  </p>
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                    
                  </p>
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                    
                  </p>
              </Card>
            </Col>
            <Col span={6} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                <p>
                    <h4>Ini Adalah Judul ada.. <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <span style={{ marginRight:10}}><Icon type="user" /> 120</span> <span ><Icon type="info-circle" /> info</span>
                    
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

export default ContentPage