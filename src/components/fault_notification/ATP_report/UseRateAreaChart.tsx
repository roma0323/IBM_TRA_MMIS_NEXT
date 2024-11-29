'use client'
import React from "react";

import {
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

export default function UseRateAreaChart({
  data,
}: {
  data: Array<{
    month: string;
    今年日均故障數: string;
    去年日均故障數: string;
  }>;
}) {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
       
      >
        <XAxis dataKey="month" />
        <YAxis
          domain={[0, 'dataMax']}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="去年日均故障數"
          fill="#E8E8E8"
          stroke="#D1D1D1"
          activeDot={{ r: 5 }}
        />
        <Area
          type="monotone"
          dataKey="今年日均故障數"
          fill="#397EFF"
          stroke="#397EFF"
          activeDot={{ r: 5 }}
        />
       
      </ComposedChart>
    </ResponsiveContainer>
  );
}