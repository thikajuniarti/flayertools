import React, { Component } from 'react'
import {
  PieChart, Pie, Cell,
} from 'recharts';
import { Row } from 'antd/es/grid';
import { Col, Icon } from 'antd';


const data = [{name: 'User', value: 14}, {name: 'Content Creator', value: 2}, {name: 'Admin', value: 2}];
const COLORS = ['#2d8dee', '#bf04ff', '#cfdbe0']; 

class SimplePieChart extends Component {
  render(){
    return(
      <Row type="flex">
        <Col style={{ width: 130}}>
          <PieChart width={130} height={110}>
            <Pie
              data={data} 
              cx={60} 
              cy={55} 
              innerRadius={40}
              outerRadius={50} 
              fill="#8884d8"
              paddingAngle={1}
            >
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </Col>
        <Col>
            <ul style={{ margin:15, padding:0}}>
              <li style={{ color: "#cfdbe0"}}> <span className="text-primary">2 Admin Staffs</span></li> 
              <li style={{ color: "#2d8dee"}}> <span className="text-primary">14 Users</span></li> 
              <li style={{ color: "#bf04ff"}}> <span className="text-primary">2 Content Creators</span></li>  
            </ul>
        </Col>
      </Row>
     
    )
  }
}

export default SimplePieChart