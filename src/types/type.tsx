// src/types.ts
export type FetcheGetSumStatusList = {
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
  

  export type FetcheGetSumStatusListData ={
    Data: FetcheGetSumStatusList["data"];
  }