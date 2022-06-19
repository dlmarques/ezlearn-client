import React, {PureComponent} from 'react'

import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 5000,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3000,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class ChartActivity extends PureComponent {

  render() {
    return (
        <LineChart width={600} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#00C49F" strokeWidth={8} dot={false} />
        </LineChart>

    );
  }
}