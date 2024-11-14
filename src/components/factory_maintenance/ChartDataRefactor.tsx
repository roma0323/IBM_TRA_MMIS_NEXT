import { factoryMaintenanceDataSetByfactory } from "@/types/type"; // Update the import path as needed

const departmentNames: { [key: string]: string } = {
  MXY00: "潮州",
  MZY00: "花蓮",
  WAY00: "富岡",
};

const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ];
  

function getChartData(data: factoryMaintenanceDataSetByfactory[]) {
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
}

export default getChartData;