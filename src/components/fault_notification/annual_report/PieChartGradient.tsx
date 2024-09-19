"use client";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Function to interpolate between two colors
const interpolateColor = (color1: string, color2: string, factor: number) => {
  const hex = (x: number) => {
    const hexString = x.toString(16);
    return hexString.length === 1 ? "0" + hexString : hexString;
  };

  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `#${hex(r)}${hex(g)}${hex(b)}`;
};

const CustomTooltip = ({ active, payload, data }: { active?: boolean; payload?: any; data: any[] }) => {
  if (active && payload && payload.length) {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const value = payload[0].value;
    const percentage = ((value / total) * 100).toFixed(2);
    const color = interpolateColor("#397EFF", "#808080", payload[0].index / data.length); // Get gradient color

    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "white",
          border: `1px solid ${color}`,
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p className="label" style={{ color }}>{`${payload[0].name}`}</p>
        <p className="label" style={{ color }}>{`數量 : ${value}`}</p>
        <p className="label" style={{ color }}>{`比例 : ${percentage}%`}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent<{ data: any[] }> {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={interpolateColor("#397EFF", "#808080", index / data.length)} // Use gradient color
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip data={data} />} />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}