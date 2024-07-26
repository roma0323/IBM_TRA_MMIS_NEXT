


// import  ClientPage  from "./clientCom";
import  ClientPage  from "@/components/train_deployment/ClientPage";


async function getData() {
  const res = await fetch('http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-07-25&sumtotal=1', {
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
  return <main>
      <ClientPage initialData={data.data} />
      </main>
}