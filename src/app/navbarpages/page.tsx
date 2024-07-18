'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [carCatalog, setCarCatalog] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-07-17&sumtotal=1/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      // Assuming you want the "carcatalog" from the first object in the "data" array
      if (data.data && data.data.length > 0) {
        setCarCatalog(data.data[0].carcatalog);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Car Catalog</h1>
      <p>{carCatalog}</p>
    </div>
  );
}