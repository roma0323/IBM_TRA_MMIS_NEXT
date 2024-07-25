import React, { PureComponent } from 'react';
import {
  ComposedChart as RechartsComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type ChartData = {
  name: string;
  累積預計: number;
  累積達成: number;
  累積差距: number;
};

type ExampleProps = {
  data: ChartData[];
};

export default class Example extends PureComponent<ExampleProps> {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-composed-chart-lyz572';

  render() {
    const { data } = this.props;
    const dataWithDifference = data.map(entry => ({
      ...entry,
      累積達成: entry.累積達成 + 20,
      累積差距: entry.累積達成 + 20 - entry.累積預計,
    }));

    return (
      <ResponsiveContainer width="90%" aspect={4}>
        <RechartsComposedChart
          data={dataWithDifference}
          margin={{
            
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" label={{ value: '累績差距', angle: -90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="累積預計" barSize={30} fill="#ff1213" />
          <Bar yAxisId="left" dataKey="累積達成" barSize={30} fill="#413ea0" />
          <Line yAxisId="right" type="monotone" dataKey="累積差距" stroke="#ff7300" />
        </RechartsComposedChart>

        
      </ResponsiveContainer>
    );
  }
}