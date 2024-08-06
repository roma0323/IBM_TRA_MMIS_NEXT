// import  ClientPage  from "./clientCom";
import ClientPage from "@/components/train_deployment/ClientPage";

// Define the data type for better TypeScript support
type FetchedData = {
  data: Array<{
    index: number;
    dept: string;
    deptdesc: string;
    cartype: string;
    carcatalog: string;
    belongto: number;
    borrowin: number;
    borrowout: number;
    current_cnt: number;
    current_use: number;
    current_temp: number;
    current_ready: number;
    maintain_w: number;
    maintain_sec: number;
    maintain_fac: number;
    oth_waitrep: number;
    oth_return: number;
    oth_stop: number;
    availability: number;
  }>;
  carKpiCatalogcnt: any[];
  oneMonthAvailabilityArr: any[];
};

async function getData(): Promise<FetchedData> {
  const res = await fetch(
    `http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-08-05&sumtotal=1`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
}

export default async function Page() {
  // Await the promise to get the data
  const fetchedData = await getData();
  return (
    <main>
      <ClientPage initialData={fetchedData.data} />
    </main>
  );
}
