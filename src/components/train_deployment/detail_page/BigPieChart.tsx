import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
 null
];

// const data = [
//   { name: '太魯閣 - TEMU1000', value: 100 },
//   { name: '普悠瑪 - TEMU2000', value: 100 },
//   { name: '新自強號 - MEU3000', value: 150 },
//   { name: 'PP電力機車 - E1000', value: 90 },
// ];

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
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

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
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
      <text x={cx} y={cy} dy={85} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
    </g>
  );
};

type BigPieChartProps = {
  styleTemplate: string;
};

export default class BigPieChart extends PureComponent<BigPieChartProps> {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  getColor = () => {
    const { styleTemplate } = this.props;

    switch (styleTemplate) {
      case "城際列車":
        return `#538164`;
      case "電力機車":
        return `#FFBB54`;
      case "柴電機車":
        return `#D9730D`;
      case "柴液機車":
        return `#C3554E`;
      case "客車":
        return `#00BBC7`;
      case "柴油客車":
        return `#9F8170`;
      case "貨車":
        return `#8F65AF`;
      case "通勤列車":
        return `#28BF02`;
      default:
        return "#397EFF";
    }
  };

  render() {
    const color = this.getColor();

    return (
      <ResponsiveContainer width="100%" aspect={1.5}>
        <PieChart>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape as any}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={55}
            fill={color}
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
