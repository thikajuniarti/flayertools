import React,{ Component } from "react";
import { MiniBar, MiniArea } from "ant-design-pro/lib/Charts";
import moment from 'moment'

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 12; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 8,
  });
}

class MiniareaChart extends Component{
  render(){
    return(
      <MiniArea height={this.props.height} data={visitData} />
    )
  }
}

export default MiniareaChart