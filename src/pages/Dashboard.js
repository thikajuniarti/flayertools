import React, { Component} from 'react';
import {Typography, Button, Row, Col, Card, Icon, Switch, Statistic, Avatar, List, Tag} from 'antd';
import MinibarChart from '../components/MinibarChart';
import SimplePieChart from '../components/SimplePieChart';
const { Text } = Typography

const data = [
  {
    name: 'Irfan Ardiansyah',
    email: 'irfa.ards@mail.com'
  },
  {
    name: 'Mega Khumara',
    email: 'mega.ards@mail.com'
  },
  {
    name: 'Nyoman Khumara',
    email: 'nyoman.ards@mail.com'
  },
];

class Dasboard extends Component {
  render(){
    return(
      <>
        <Row gutter={24}>
            <Col span={24}>
              <Card bordered={false} className="card-primary-gradient shadow">
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
          
          <Row gutter={24} type="flex">
            <Col span={5}>
              <Card title="Leads of this month" bordered={false} className="shadow">
                <p style={{ textAlign: "center"}} >
                   <span style={{ fontSize: 60}} className='text-primary'>
                      123
                   </span><br />
                  Lead of current month
                </p>
              </Card>
            </Col>

            <Col span={7}>
              <p>
                <h3 style={{ marginBottom:0}}>Monthly Leads 
                  <span style={{ float: "right"}} >
                    <Button type="link">See Detail</Button>
                  </span>
                </h3>
              <small>Summary of monthly lead and current month</small>
              </p>
              <MinibarChart height={145}/>
            </Col>
            
            <Col span={5}>
              <Card title="Published Content" bordered={false} className="shadow">
                <p style={{ textAlign: "center"}} >
                   <span style={{ fontSize: 60}} className='text-primary'>
                      12
                   </span><br />
                  Published contents
                </p>
              </Card>
            </Col>

            <Col span={7}>
              <Card title="Staff Summary" bordered={false} className="shadow">
                <p>
                   <SimplePieChart />
                </p>
              </Card>
            </Col>
          </Row><br />
          <p>
              <h3 style={{ marginBottom: 0}}>Popular Content - 4 items</h3>
              <small>Based of data lead in each contents</small>
          </p>
        
          <Row gutter={24}>
            <Col span={6}>
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
            <Col span={6}>
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
            <Col span={6}>
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
            <Col span={6}>
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

export default Dasboard