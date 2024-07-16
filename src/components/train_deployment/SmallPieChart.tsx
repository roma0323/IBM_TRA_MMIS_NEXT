


import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
];
const COLORS = ['#0088FE', '#fffffd'];
const cx = "50%"
const cy = "50%"
const name = "47%"


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

    
  render() {
    return (
      <ResponsiveContainer width="100%" aspect={1.4}>
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={22}
            outerRadius={27}
            fill="#397EFF"
            dataKey="value"
            
          > {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
          <text x={cx} y={cy} dy={3} textAnchor="middle" fill="#397EFF" fontSize="12px">
            {name}
            </text>
        </PieChart>
        
      </ResponsiveContainer>
    );
  }
}
