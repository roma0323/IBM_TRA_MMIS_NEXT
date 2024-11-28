import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import {PiechartData} from "@/types/type"


interface CustomSectorProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: {
    name: string;
  };
  percent: number;
  value: number;
}

const renderActiveShape = (props: CustomSectorProps) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`總數 ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {` ${(percent * 100).toFixed(2)}%`}
      </text>
      <text x={cx} y={cy} dy={85} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
    </g>
  );
};

type BigPieChartProps = {
  styleTemplate: string;
  PieChartData:PiechartData[];
}
export default class BigPieChart extends PureComponent<BigPieChartProps> {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  }
  

  render() {

    return (
      <ResponsiveContainer width="100%" aspect={1.5}>
        
        <PieChart>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape as any}
            data={this.props.PieChartData}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={55}
            fill="#397EFF"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
