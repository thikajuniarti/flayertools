import React, { Component} from 'react';
import {Typography, Button, Row, Col, Card, Icon, Switch, Statistic, Avatar} from 'antd';
import MiniareaChart from './../components/MiniareaChart';
const { Text } = Typography

class Dasboard extends Component {
  render(){
    return(
      <>
        <Row gutter={24}>
            <Col span={24}>
              <Card bordered={false} className="card-primary-gradient">
                <Row>
                  <Col span={12}>
                    <Row type="flex" justify="start">
                      <Col span={3}>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={64} />
                      </Col>
                      <Col>
                      <strong>PT DIRGANTARA RAHAYU CITRA PERMATA</strong><br />
                        Emanuel Mojave <br />
                        <small>Administrator</small>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col span={4}>
                    <Statistic
                      title={<span style={{fontSize:18}}>Leads</span>}
                      value={234}
                      valueStyle={{ color: '#fff' }}
                      prefix={<Icon type="user" />}
                      suffix="peoples"
                    />
                  </Col>
                  <Col span={4}>
                    <Statistic
                      title={<span style={{fontSize:18}}>Contents</span>}
                      value={23}
                      valueStyle={{ color: '#fff' }}
                      prefix={<Icon type="book" />}
                      suffix="contents"
                    />
                    
                  </Col>
                  <Col span={4}>
                    <Statistic
                      title={<span style={{fontSize:18}}>Staffs</span>}
                      value={120}
                      valueStyle={{ color: '#fff' }}
                      prefix={<Icon type="team" />}
                      suffix="employees"
                    />
                    
                  </Col>
                </Row>
                
                
              </Card>
            </Col>
          </Row><br />
          
          <Row gutter={24}>
            <Col span={12}>
              <Row>
                <Col span={8}>
                  <p>
                    <h3 style={{ marginBottom:0}}>Leads on July</h3>
                    <small>Number of lead on current month</small>
                  </p>
                  <div style={{ textAlign: "center"}}>
                    <span style={{ fontSize: 60}} className='text-primary'>
                      123
                    </span><br />
                    Lead of current motnh
                  </div>
                </Col>
                <Col span={16}>
                  <p>
                    <h3 style={{ marginBottom:0}}>Monthly Leads 
                      <span style={{ float: "right"}} >
                        <Button type="link">See detail</Button>
                      </span>
                    </h3>
                    <small>Summary of monthly lead and current month</small>
                  </p>
                  <MiniareaChart height={130}/>
                </Col>
              </Row>
            </Col>

            <Col span={6}>
              <Card bordered={false}>
                <Row type="flex">
                  <Col>
                    <Icon type="file" style={{fontSize: 60}} theme='twoTone' twoToneColor="#2d8dee"/>
                  </Col>
                  <Col style={{marginLeft:10}}>
                    Published Content<br />
                    <Text className="text-primary" style={{ fontSize: 30}}>123</Text>
                  </Col>  
                </Row> 
              </Card>
            </Col>

            <Col span={6}>
              <Card bordered={false}>
                <Row type="flex">
                  <Col>
                    <Icon type="file-zip" theme="twoTone" twoToneColor="#2d8dee" style={{fontSize: 60}}/>
                  </Col>
                  <Col style={{marginLeft:10}}>
                    Unpublished Content<br />
                    <Text className="text-primary" style={{ fontSize: 30}}>123</Text>
                  </Col>  
                </Row> 
              </Card>
            </Col>
          
            
          </Row><br /><br />
          <p>
              <h3 style={{ marginBottom: 0}}>Popular Content - 4 items</h3>
              <small>Based of data lead in each contents</small>
          </p>
        
          <Row gutter={24}>
            <Col span={6}>
              <Card
                hoverable
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
            <Col span={6}>
              <Card
                hoverable
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
            <Col span={6}>
              <Card
                hoverable
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
            <Col span={6}>
              <Card
                hoverable
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
       
      </>
    )
  }
}

export default Dasboard