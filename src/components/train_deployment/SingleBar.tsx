import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '台北機務段',
    車輛數: 100,
  },
  {
    name: '新竹機務段',
    車輛數: 60,
  },
  {
    name: '桃園機務段',
    車輛數: 40,
  },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-background-32n2fm';

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={4.5}>
        <BarChart
          layout="vertical"
          data={data}
          barSize={10}
          margin={{
            left:40,
          }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="車輛數" fill="#397EFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}