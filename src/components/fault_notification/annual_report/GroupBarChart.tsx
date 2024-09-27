'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getCarColor } from "@/lib/getCarColor"; 

interface GroupBarChartProps {
  data: { [month: string]: { [kpicartype: string]: number } };
}
// Dec: {故障通報: 0, 行車責任事故: 0, ATP: 0}

// Feb: {故障通報: 0, 行車責任事故: 0, ATP: 0}

// Jan: {故障通報: 12, 行車責任事故: 0, ATP: 0}
const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div
      className="text-sm"
      style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
      }}
      >
      <p>{`${label}`}</p>
      {payload.map((entry: any, index: number) => (
        <p key={`item-${index}`} style={{ color: entry.fill }}>
        {`${entry.name}: ${entry.value}`}
        </p>
      ))}
      </div>
    );
  }

  return null;
};

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
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        {/* <YAxis /> */}
        <Tooltip content={<CustomTooltip />} />
        {kpicartypes.map((kpicartype) => (
          <Bar key={kpicartype} dataKey={kpicartype} fill={getCarColor(kpicartype)} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GroupBarChart;