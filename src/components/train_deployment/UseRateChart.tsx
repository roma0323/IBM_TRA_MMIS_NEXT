import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', using_rate: 52 },
  { name: '2', using_rate: 4 },
  { name: '3', using_rate: 33 },
  { name: '4', using_rate: 32 },
  { name: '5', using_rate: 18 },
  { name: '6', using_rate: 53 },
  { name: '7', using_rate: 32 },
  { name: '8', using_rate: 41 },
  { name: '9', using_rate: 17 },
  { name: '10', using_rate: 99 },
  { name: '11', using_rate: 97 },
  { name: '12', using_rate: 5 },
  { name: '13', using_rate: 61 },
  { name: '14', using_rate: 56 },
  { name: '15', using_rate: 51 },
  { name: '16', using_rate: 59 },
  { name: '17', using_rate: 60 },
  { name: '18', using_rate: 11 },
  { name: '19', using_rate: 34 },
  { name: '20', using_rate: 70 },
  { name: '21', using_rate: 68 },
  { name: '22', using_rate: 7 },
  { name: '23', using_rate: 70 },
  { name: '24', using_rate: 62 },
  { name: '25', using_rate: 6 },
  { name: '26', using_rate: 84 },
  { name: '27', using_rate: 62 },
  { name: '28', using_rate: 23 },
  { name: '29', using_rate: 19 },
  { name: '30', using_rate: 14 }
];

export default function UseRateChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading spinner, or some placeholder content
  }

  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Bar
          dataKey="using_rate"
          fill="#397EFF"
          background={{ fill: '#eee' }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
