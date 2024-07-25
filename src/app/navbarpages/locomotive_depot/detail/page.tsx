// import  ClientPage  from "./clientCom";
import  ClientPage  from "../page";


async function getData() {
  const res = await fetch('http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=2024-07-18', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
  return res.json()
}

export default async function Page() {
  const data = await getData()
  console.log(data.data)
  return <main>
      <ClientPage initialData={data.data} />
      </main>
}