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
    thisyear_failcnt: number;
    lastyear_failcnt: number;
  }>;
}) {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          
        }}
      >
        <XAxis dataKey="month" />
        <YAxis
          domain={[0, 'dataMax']}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="lastyear_failcnt"
          fill="#E8E8E8"
          stroke="#D1D1D1"
          activeDot={{ r: 5 }}
        />
        <Area
          type="monotone"
          dataKey="thisyear_failcnt"
          fill="#397EFF"
          stroke="#397EFF"
          activeDot={{ r: 5 }}
        />
       
      </ComposedChart>
    </ResponsiveContainer>
  );
}