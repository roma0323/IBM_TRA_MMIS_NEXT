'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface GroupBarChartProps {
  data: { [month: string]: { [kpicartype: string]: number } };
}

const GroupBarChart: React.FC<GroupBarChartProps> = ({ data }) => {
  // Transform the data into a format suitable for the BarChart
  const transformedData = Object.entries(data).map(([month, kpicartypes]) => ({
    month,
    ...kpicartypes,
  }));

  // Extract all kpicartypes from the data
  const kpicartypes = Object.keys(data[Object.keys(data)[0]]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={transformedData}
        margin={{
          top: 20,
          right: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        {kpicartypes.map((kpicartype, index) => (
          <Bar key={kpicartype} dataKey={kpicartype} fill={getColor(index)} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

// Function to get color based on index
const getColor = (index: number) => {
  const colors = ['#82ca9d', '#8884d8', '#821a1d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57', '#8dd1e1'];
  return colors[index % colors.length];
};

export default GroupBarChart;