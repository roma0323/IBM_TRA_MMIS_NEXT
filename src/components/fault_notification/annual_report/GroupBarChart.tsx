'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type MonthlyData = {
  name: string;
  All: number;
  duty: number;
  ATP: number;
};

interface GroupBarChartProps {
  data: MonthlyData[];
}

const GroupBarChart: React.FC<GroupBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
        <Tooltip />
        <Bar yAxisId="left" dataKey="All" fill="#82ca9d" />
        <Bar yAxisId="left" dataKey="duty" fill="#8884d8" />
        <Bar yAxisId="left" dataKey="ATP" fill="#821a1d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GroupBarChart;