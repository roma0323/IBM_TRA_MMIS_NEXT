"use client";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomTooltip = ({ active, payload, data }: { active?: boolean; payload?: any; data: any[] }) => {
  if (active && payload && payload.length) {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const value = payload[0].value;
    const percentage = ((value / total) * 100).toFixed(2);

    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p className="label">{`${payload[0].name} : ${percentage}%`}</p>
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
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip data={data} />} />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}