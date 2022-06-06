import React, {PureComponent} from 'react'
import { PieChart, Pie,  Cell } from 'recharts';



const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];
  const COLORS = ['#007cb5', '#00C49F', '#FFBB28'];

  export default class ChartLearning extends PureComponent {
  
    render() {
      return (
        <PieChart width={205} height={200} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
    }
  }
  