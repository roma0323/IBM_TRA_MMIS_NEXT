import ClientPage from "@/components/factory_maintenance/ClientPage";
import { getFacRepairListByMonth, getFacRepairYearPlan } from "@/api/api";
import { factoryMaintenanceDataSetByfactory } from "@/types/type"; // Update the import path as needed

const departmentNames: { [key: string]: string } = {
  MXY00: "潮州",
  MZY00: "花蓮",
  WAY00: "富岡",
};
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getChartData(yearString?: string) {
  try {
    const data = await getFacRepairYearPlan(yearString);

    const transformData = (dataset: factoryMaintenanceDataSetByfactory) => {
      const monthData = monthNames.map((month, index) => {
        const monthIndex = (index + 1).toString().padStart(2, "0");
        return {
          name: month,
          當月預計: dataset[`${monthIndex}_PLAN`],
          當月達成: dataset[`${monthIndex}_ACT`],
          累積預計: dataset[`${monthIndex}_YTD_SUM_PLAN`],
          累積達成: dataset[`${monthIndex}_YTD_SUM_ACT`],
        };
      });

      const departmentName = departmentNames[dataset.deptid] || "全部";

      return {
        deptid: dataset.deptid,
        year: dataset.year,
        infaccnt: dataset.infaccnt,
        departmentName: departmentName,
        monthData: monthData,
      };
    };

    // Transform data for the first 4 datasets
    const transformedData = data.slice(0, 4).map(transformData);

    return transformedData;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string ,type?:string};
}) {
  const dateString = searchParams.date || ""; 
  const date = new Date(dateString);
  const year = date.getFullYear();
  const yearString = year.toString();

  const ChartData = await getChartData(yearString);
  const listData = await getFacRepairListByMonth(searchParams.date);
  //FIXME :avoid waterfall

  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
        <ClientPage Data={ChartData} listData={listData.data}/>
    </main>
  );
  
}
