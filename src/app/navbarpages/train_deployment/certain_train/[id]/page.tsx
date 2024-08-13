import ClientPage from "@/components/train_deployment/detail_page/ClientPage";
import { getSumStatusListAndCarcatalogEqualParam } from "@/api/api";

interface Params {
  id: string;
}

interface PageProps {
  params: any;
}

export default async function Page({ params }:PageProps) {
  const decodedLastPart = decodeURIComponent(params.id);

  const data = await getSumStatusListAndCarcatalogEqualParam(decodedLastPart);
  return (
    <main>
      <ClientPage Data={data.data} /> 
    </main>
  );
}
