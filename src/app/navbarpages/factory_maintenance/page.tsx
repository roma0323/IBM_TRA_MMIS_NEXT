import ClientPage from "@/components/factory_maintenance/ClientPage";
import { getFacRepairYearPlan } from "@/api/api";
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

async function getData() {
  try {
    const data = await getFacRepairYearPlan();

    // Function to transform the dataset for better readability
    const transformData = (dataset: factoryMaintenanceDataSetByfactory) => {
      // Create an array of objects for each month
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

      // Determine the department name based on deptid
      const departmentName = departmentNames[dataset.deptid] || "全部";

      // Return an object that includes deptid, year, infaccnt, departmentName, and the month data
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

export default async function Page() {
  const data = await getData();
  return <ClientPage Data={data} />;
}
