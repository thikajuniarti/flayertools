import React,{ Component } from 'react';
import { Row, Col, Card, Avatar, Icon, Button, Select, Form } from 'antd';
import { Input } from 'antd';
import DrawerPage from './Organisation/DrawerPage';

const { Meta } = Card;
const { Search } = Input;
const InputGroup = Input.Group;
const { Option } = Select;

class OrganizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleDrawer: false
    };

    this.onClose = this.onClose.bind(this);
    this.showDrawer = this.showDrawer.bind(this);
  }

  showDrawer() {
    this.setState({
      visibleDrawer: true
    })
  }

  onClose() {
    this.setState({
      visibleDrawer: false,
    });
  }

  render(){
    return(
      <>
        <p>
          <h3 style={{ marginBottom: 0}}>
            All Organisations - 9 Organisations
            <span style={{ float:'right'}}>
                <Button type="primary" style={{ marginRight:10}} className="shadow" onClick={e => this.showDrawer(e)}>
                  <Icon type="plus-circle" /> Create New Organisation
                </Button>
                <Select defaultValue="Zhejiang" className="shadow" style={{ marginRight:10}}>
                  <Option value="Zhejiang">Expired Date</Option>
                  <Option value="Jiangsu">Profile Organisation</Option>
                </Select>
                <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 300 }}
                className="shadow"
              />
            </span>
          </h3>
          <small>List of All Organisations</small>
        </p>

        <DrawerPage
          onClose={e => this.onClose(e)}
          visible={this.state.visibleDrawer}
          form={this.props.form} />

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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
        </Row>
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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
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
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Expired Date</small>
                  </Card.Grid>

                  <Card.Grid style={{ width: '100%', textAlign:"center"}}>
                    <h2 style={{ marginBottom:0}}>Payment by Account</h2>
                    <small style={{ marginRight:10}}><Icon type="calendar" /> Profile Organisation</small>
                  </Card.Grid>

              </Card>
            </Col>
        </Row>
      </>
    )
  }
}

export default OrganizationPage
