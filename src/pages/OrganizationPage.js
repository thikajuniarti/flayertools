import React,{ Component } from 'react';
import { Row, Col, Card, Avatar, Icon } from 'antd';

const { Meta } = Card;

class OrganizationPage extends Component {
  render(){
    return(
      <>
        <Row gutter={24}>
            <Col span={6} className="card-margin-btm">
              <Card
                className="shadow"
                actions={[
                  <Icon type="edit" />, <Icon type="delete" />, <Icon type="info-circle" />]}
                >
                  <Card.Grid style={{ width: '100%'}}>
                      <div style={{ textAlign: "center"}}><Avatar style={{ color: '#2d8dee', backgroundColor: '#e6f7ff', marginBottom: 5 }}>R</Avatar></div><br />
                      <Meta
                       title="Rohmania Ardian Megan"
                        description={
                          <div>
                            <small style={{ marginRight:10}}><Icon type="environment" /> Jl. Kusuma Bangsa No 20 Surabaya</small><br />
                            <small style={{ marginRight:10}}><Icon type="phone" /> 085606355625</small>
                          </div>
                        }
                      />
                  </Card.Grid>
                 
                  <Card.Grid style={{ width: '50%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>10</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Staff</small> 
                  </Card.Grid>

                  <Card.Grid style={{ width: '50%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>21</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Content</small> 
                  </Card.Grid>
                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>21 Mei 2020</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Staff</small> 
                  </Card.Grid>
                  
                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>21 Mei 2020</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Staff</small> 
                  </Card.Grid>
  
              </Card>
            </Col>
        </Row>
      </>
    )
  }
}

export default OrganizationPage
