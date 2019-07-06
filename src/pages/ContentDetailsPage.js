import React, { Component} from 'react';
import { Row, Col, Card, Icon, Tooltip, Switch, Select, Tag} from 'antd';
import { Input } from 'antd';
import BarChart from '../components/BarChart';
import MiniareaChart from '../components/MiniareaChart';
import { ChartCard } from 'ant-design-pro/lib/Charts';

const { Search } = Input;
const InputGroup = Input.Group;
const { Option } = Select;
const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

class  ContentDetailsPage extends Component {
  render(){
    return(
      <>
          <p>
              <h3 style={{ marginBottom: 0}}>
                Making a money quickly

              </h3>
              <small>Page list of contents</small>
          </p>
        
          <Row gutter={24}>
            <Col span={10} className="card-margin-btm">
              <Card
                hoverable
                className="shadow"
                cover={<img alt="example" src="img.jpg" />}
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="share-alt" />, <Icon type="copy" />]}
                >
                  
                  <Card.Grid style={{ width: '100%'}}>
                    <h4 style={{ marginBottom:0}}>Ini Adalah Judul ada yang pernah 
                      <Switch checkedChildren="Publish" unCheckedChildren="Unpublish" defaultChecked style={{float:'right'}} /></h4>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> 12 mei 2019</small>
                    
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                   
                    <span style={{ fontSize: 60}} className='text-primary'>
                      121
                   </span><br />
                   <Icon type="user" /> Leads Of this content
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <span style={{ fontSize: 60}} className='text-primary'>
                        16
                    </span><br />
                    <Icon type="file" /> Total Pages
                  </Card.Grid>
              </Card>
            </Col>
            
            <Col span={14} className="card-margin-btm">
              <Card 
                title="Statistic of This Content"
                bordered={false}
                className="shadow"
              >
              <BarChart />
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

export default ContentDetailsPage