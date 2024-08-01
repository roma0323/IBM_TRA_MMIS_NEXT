import DetailClientPage from "@/components/train_deployment/detail_page/DetailClientPage";
interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

// This function runs only on the server
async function getData(id:String) {

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

export default async function Page({ params }:PageProps) {
  const decodedLastPart = decodeURIComponent(params.id);

  const data = await getData(decodedLastPart);
  return (
    <main>
      <DetailClientPage initialData={data.data} /> 
    </main>
  );
}
