import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-composed-chart-lyz572';

  render() {
    const { data } = this.props;
    const dataWithDifference = data.map(entry => ({
      ...entry,
      當月差距: entry.當月達成 - entry.當月預計,
    }));

    return (
      <ResponsiveContainer width="90%" aspect={4}>
        <ComposedChart
          data={dataWithDifference}
          margin={{
            left: 10,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" stackId="a" dataKey="當月達成" barSize={20} fill="#413ea0" />
          <Bar yAxisId="left" stackId="a" dataKey="當月預計" barSize={20} fill="#ff1213" />
          <Line yAxisId="right" type="monotone" dataKey="當月差距" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}