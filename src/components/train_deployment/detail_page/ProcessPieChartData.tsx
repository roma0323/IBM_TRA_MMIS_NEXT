import {FetcheGetSumStatusListDataInArray,PiechartData} from "@/types/type"
  
type RefactoredData = {
  name: string;
  value: number;
  value2: number;
};
  
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
  
  export function refactorCardData(originalData: FetcheGetSumStatusListDataInArray[]): RefactoredData[] {
    const result: { [key: string]: { value: number; value2: number } } = {};
  
    originalData.forEach((item) => {
      if (result[item.cartype]) {
        result[item.cartype].value += item.belongto;
        result[item.cartype].value2 += item.current_ready + item.current_temp + item.current_use;
      } else {
        result[item.cartype] = {
          value: item.belongto,
          value2: item.current_ready + item.current_temp + item.current_use,
        };
      }
    });
  
    return Object.keys(result).map((key) => ({
      name: key,
      value: result[key].value,
      value2: result[key].value2,
    }));
  }