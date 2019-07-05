import React,{ Component } from "react";
import { Bar } from 'ant-design-pro/lib/Charts';

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

class BarChart extends Component{
  render(){
    return(
      <Bar height={300} title="Leads Monthly" data={salesData} color="#2d8dee"  />
    )
  }
}

export default BarChart