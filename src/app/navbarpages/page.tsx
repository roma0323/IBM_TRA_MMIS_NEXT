//RSTP RSTF貨車
//RSTA客車
//RSTL 動力車

// [{
//   "AVAILABLE": "2019",
//   "TOTAL": "2490",
//   "ALL_D": "2024-07-29",
//   "USUALFLAG": "1",
//   "RATION": "81.08433734939759036",
//   "EQ11": "RSTL"
// }, {
//   "AVAILABLE": "270",
//   "TOTAL": "376",
//   "ALL_D": "2024-07-29",
//   "USUALFLAG": "1",
//   "RATION": "84.81375358166189111",
//   "EQ11": "RSTP"
// }]

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