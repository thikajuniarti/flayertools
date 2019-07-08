import React, { Component} from 'react';
import {Typography, Button, Row, Col, Card, Icon, Switch, Statistic, Avatar, List, Tag} from 'antd';
import MinibarChart from '../components/MinibarChart';
import SimplePieChart from '../components/SimplePieChart';
const { Text } = Typography

const data = [{name: 'Payment By Organization', value: 120}, {name: 'Payment by Account', value: 12}];

class DashboardOrg extends Component {
  render(){
    return(
      <>
          
          <Row gutter={24} type="flex">
            <Col span={5}>
              <Card 
                  title={<span> Expired Organization</span>} 
                  bordered={false} className="shadow "
                
                >
                <p style={{ textAlign: "center"}} >
                   <span style={{ fontSize: 60}} className='text-primary'>
                      13
                   </span><br />
                   <Icon type="exclamation-circle" style={{color:"#ff4d4f", marginRight:7}} /> Expired on this month
                </p>
              </Card>
            </Col>

            <Col span={5}>
              <Card title="New Organization" bordered={false} className="shadow">
                <p style={{ textAlign: "center"}} >
                   <span style={{ fontSize: 60}} className='text-primary'>
                      6
                   </span><br />
                   <Icon type="check-circle" style={{color:'#40a9ff', marginRight:7}} /> New Organization on July
                </p>
              </Card>
            </Col>

            <Col span={8}>
              <Card title="Organization - 130 total" bordered={false} className="shadow">
                <p>
                   <SimplePieChart data={data}/>
                </p>
              </Card>
            </Col>
          </Row><br />
          
          <Row gutter={24}>
            <Col span={10}>
              <Card title="Organization" bordered={false} className="shadow">
                <p>
                   
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

export default DashboardOrg