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
      當月達成: entry.當月達成 + 20,
      當月差距: entry.當月達成 + 20 - entry.當月預計,
    }));

    return (
      <ResponsiveContainer width="90%" aspect={4}>
        <ComposedChart
          data={dataWithDifference}
          margin={{
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" label={{ value: '當月差距', angle: -90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="當月達成" barSize={30} fill="#413ea0" />
          <Bar yAxisId="left" dataKey="當月預計" barSize={30} fill="#ff1213" />
          <Line yAxisId="right" type="monotone" dataKey="當月差距" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}