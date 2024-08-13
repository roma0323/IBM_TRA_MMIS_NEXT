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


export type FetcheGetSumStatusListData = {
  Data: FetcheGetSumStatusList["data"];
}

export type factoryMaintenanceDataSetByfactory = {
  deptid: string;
  year: string;
  infaccnt: number;
  departmentName: string,
  [key: string]: number | string;
}


export type MonthData = {
  name: string;
  '當月預計': number;
  '當月達成': number;
  '累積預計': number;
  '累積達成': number;
  '當月差距': number; 
  '累積差距': number; 
}

export type factoryMaintenanceEachFactory = {
  deptid: string;
  year: string;
  departmentName: string,
  infaccnt: number;
  monthData: MonthData[];
}

export type factoryMaintenanceOverall = {
  Data: factoryMaintenanceEachFactory[];
}