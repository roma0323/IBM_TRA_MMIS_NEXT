// import  ClientPage  from "./clientCom";
import  ClientPage  from "@/components/factory_maintenance/ClientPage";

type DataSet = {
  [key: string]: number;
};

async function getData() {
  try {
    const response = await fetch('http://tra.webtw.xyz:8888/maximo/zz_data?method=getFacRepairYearPlan&year=2022', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const transformData = (dataset: DataSet) => {
      return monthNames.map((month, index) => {
        const monthIndex = (index + 1).toString().padStart(2, '0');
        return {
          name: month,
          當月預計: dataset[`${monthIndex}_PLAN`],
          當月達成: dataset[`${monthIndex}_ACT`],
          累積預計: dataset[`${monthIndex}_YTD_SUM_PLAN`],
          累積達成: dataset[`${monthIndex}_YTD_SUM_ACT`]
        };
      });
    };

    const transformedData = data.slice(0, 4).map(transformData);

    return transformedData;

  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
}

export default async function Page() {
  const data = await getData()
  return <main>
      <ClientPage fetchData={data} />
      </main>
}