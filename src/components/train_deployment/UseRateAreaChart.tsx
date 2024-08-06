import React from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
const data = [
  { name: '1', using_rate: 45 },
  { name: '2', using_rate: 30 },
  { name: '3', using_rate: 35 },
  { name: '4', using_rate: 34 },
  { name: '5', using_rate: 31 },
  { name: '6', using_rate: 47 },
  { name: '7', using_rate: 34 },
  { name: '8', using_rate: 39 },
  { name: '9', using_rate: 31 },
  { name: '10', using_rate: 50 },
  { name: '11', using_rate: 48 },
  { name: '12', using_rate: 32 },
  { name: '13', using_rate: 45 },
  { name: '14', using_rate: 43 },
  { name: '15', using_rate: 42 },
  { name: '16', using_rate: 44 },
  { name: '17', using_rate: 44 },
  { name: '18', using_rate: 33 },
  { name: '19', using_rate: 36 },
  { name: '20', using_rate: 46 },
  { name: '21', using_rate: 45 },
  { name: '22', using_rate: 32 },
  { name: '23', using_rate: 46 },
  { name: '24', using_rate: 44 },
  { name: '25', using_rate: 32 },
  { name: '26', using_rate: 47 },
  { name: '27', using_rate: 44 },
  { name: '28', using_rate: 38 },
  { name: '29', using_rate: 36 },
  { name: '30', using_rate: 34 }
];


export default function UseRateChart() {


  return (
    <ResponsiveContainer width="100%" aspect={4}>

      <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
          <Area type="monotone" dataKey="using_rate" stroke="#397EFF" activeDot={{ r: 5 }} />
        </AreaChart>
    </ResponsiveContainer>
  );
}
