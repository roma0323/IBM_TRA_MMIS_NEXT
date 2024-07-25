// src/app/api/trainData.js
export default async function handler(req, res) {
  try {
    const response = await fetch('http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=2024-07-18', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok in tarin');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}