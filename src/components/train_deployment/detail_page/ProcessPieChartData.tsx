import {FetcheGetSumStatusListDataInArray,PiechartData} from "@/types/type"
  

  
  export function refactorPieChartData  (originalData: FetcheGetSumStatusListDataInArray[]): PiechartData[]  {
    const result: { [key: string]: number } = {};
  
    originalData.forEach((item) => {
      if (result[item.cartype]) {
        result[item.cartype] += item.belongto;
      } else {
        result[item.cartype] = item.belongto;
      }
    });
  
    return Object.keys(result).map((key) => ({
      name: key,
      value: result[key],
    }));
  };
  
  