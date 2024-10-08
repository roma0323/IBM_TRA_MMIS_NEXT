
'use client'
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
// const using_rate_data = [
//   { name: "1號", 本月: 45, 上個月: 50 },
//   { name: "2號", 本月: 30, 上個月: 32 },
//   { name: "3號", 本月: 35, 上個月: 44 },
//   { name: "4號", 本月: 34, 上個月: 39 },
//   { name: "5號", 本月: 31, 上個月: 44 },
//   { name: "6號", 本月: 47, 上個月: 52 },
//   { name: "7號", 本月: 34, 上個月: 34 },
//   { name: "8號", 本月: 39, 上個月: 44 },
//   { name: "9號", 本月: 31, 上個月: 36 },
//   { name: "10號", 本月: 50, 上個月: 55 },
//   { name: "11號", 本月: 48, 上個月: 33 },
//   { name: "12號", 本月: 32, 上個月: 37 },
//   { name: "13號", 本月: 45, 上個月: 30 },
//   { name: "14號", 本月: 43, 上個月: 48 },
//   { name: "15號", 本月: 42, 上個月: 47 },
//   { name: "16號", 本月: 44, 上個月: 39 },
//   { name: "17號", 本月: 44, 上個月: 49 },
//   { name: "18號", 本月: 33, 上個月: 38 },
//   { name: "19號", 本月: 36, 上個月: 31 },
//   { name: "20號", 本月: 46, 上個月: 31 },
//   { name: "21號", 本月: 45, 上個月: 50 },
//   { name: "22號", 本月: 32, 上個月: 57 },
//   { name: "23號", 本月: 46, 上個月: 51 },
//   { name: "24號", 本月: 44, 上個月: 49 },
//   { name: "25號", 本月: 32, 上個月: 37 },
//   { name: "26號", 本月: 47, 上個月: 52 },
//   { name: "27號", 本月: 44, 上個月: 49 },
//   { name: "28號", 本月: 38, 上個月: 43 },
//   { name: "29號", 本月: 36, 上個月: 41 },
//   { name: "30號", 本月: 34, 上個月: 40 },
// ];
const using_rate_data = [
  null
];

export default function UseRateAreaChart({
  styleTemplate,
}: {
  styleTemplate: string;
}) {
  let color = getCarColor(styleTemplate);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={using_rate_data}
        margin={{
          top: 10,
          right: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) => `${value}%`}
          domain={[0, 100]} 
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="上個月"
          fill="#E8E8E8"
          stroke="#D1D1D1"
          activeDot={{ r: 5 }}
        />
        <Area
          type="monotone"
          dataKey="本月"
          fill={`${color}8d`}
          stroke={color}
          activeDot={{ r: 5 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
