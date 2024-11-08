"use client";
import React from "react";
import { getCarColor } from "@/lib/getCarColor";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

export default function UseRateAreaChart({
  styleTemplate,
  chartData = [],
}: {
  styleTemplate: string;
  chartData?: Array<{ name: string; RATION: number }>;
}) {
  let color = getCarColor(styleTemplate);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={chartData}
        margin={{
          top: 10,
          right: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="RATION"
          fill={`${color}8d`}
          stroke={color}
          activeDot={{ r: 5 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}