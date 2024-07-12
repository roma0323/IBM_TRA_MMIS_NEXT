'use client';
import { useState, useEffect } from 'react';
import { LineChart, Line } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
];

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading spinner, or some placeholder content
  }

  return (
    <LineChart width={400} height={200} data={data}>
      <Line type="monotone" dataKey="uv" stroke="orange" />
    </LineChart>
  );
}