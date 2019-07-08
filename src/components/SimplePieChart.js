import React, { Component } from 'react'
import {
  PieChart, Pie, Cell,
} from 'recharts';
import { Row } from 'antd/es/grid';
import { Col, Icon } from 'antd';


const COLORS = ['#2d8dee',  '#cfdbe0', '#bf04ff']; 

class SimplePieChart extends Component {
  render(){
    const data = this.props.data

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
              {
                data.map((entry, index) => 
                  <li style={{ color: COLORS[index % COLORS.length]}}> 
                    <span className="text-primary">{entry.value} {entry.name}</span></li>)
              }
              
            </ul>
        </Col>
      </Row>
     
    )
  }
}

export default SimplePieChart