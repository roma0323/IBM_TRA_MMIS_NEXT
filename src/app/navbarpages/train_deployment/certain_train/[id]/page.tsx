import DetailClientPage from "@/components/train_deployment/DetailClientPage";

// This function runs only on the server
async function getData(id) {

  const res = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-07-25&carcatalog=${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }) {
  console.log("ssssssssss",params.id)

  const data = await getData(params.id);
  return (
    <main>
      {/* <div>{data.data[0].carcatalog}</div> */}
      <div>sdcsdc</div>

      {/* <DetailClientPage initialData={data.data} /> */}
    </main>
  );
}
