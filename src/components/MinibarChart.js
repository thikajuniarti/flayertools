import React,{ Component } from "react";
import { MiniBar } from "ant-design-pro/lib/Charts";
import moment from 'moment'

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 12; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 8,
  });
}

class MinibarChart extends Component{
  render(){
    return(
      <MiniBar color="#2d8dee" height={this.props.height} data={visitData} />
    )
  }
}

export default MinibarChart