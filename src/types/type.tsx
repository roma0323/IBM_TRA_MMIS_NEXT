// src/types.ts

export type FetcheGetSumStatusListDataInArray = {
  carcatalog: string;
  index: number;
  dept: string;
  deptdesc: string;
  cartype: string;
  current_ready: number;
  current_cnt: number;
  belongto: number;
  borrowin: number;
  borrowout: number;
  current_use: number;
  current_temp: number;
  maintain_w: number;
  maintain_sec: number;
  maintain_fac: number;
  oth_waitrep: number;
  oth_return: number;
  oth_stop: number;
  availability: number;
};

export type FetcheGetSumStatusListData = {
  Data: Array<FetcheGetSumStatusListDataInArray>;
};
export type DataByCarCatalog = {
  [key: string]: FetcheGetSumStatusListDataInArray;
};
export type FetcheGetSumStatusList = {
  data: Array<FetcheGetSumStatusListDataInArray>;
  carKpiCatalogcnt: any[];
  oneMonthAvailabilityArr: any[];
};

export type factoryMaintenanceDataSetByfactory = {
  deptid: string;
  year: string;
  infaccnt: number;
  departmentName: string;
  [key: string]: number | string;
};

export type MonthData = {
  name: string;
  當月預計: number;
  當月達成: number;
  累積預計: number;
  累積達成: number;
  當月差距: number;
  累積差距: number;
};

export type factoryMaintenanceEachFactory = {
  deptid: string;
  year: string;
  departmentName: string;
  infaccnt: number;
  monthData: MonthData[];
};

export type factoryMaintenanceOverall = {
  Data: factoryMaintenanceEachFactory[];
};

export type factorySumStatus = {
  index: number;
  worktype: string;
  dept: string;
  deptdesc: string;
  facindate: string;
  schedfinish: string;
  testdate: string;
  actstart: string;
  actfinish: string;
  facoutdate: string;
  wojp3: string;
  cartype: string;
  assetnum: string;
  imnum: string;
  childcarcnt: number;
  carcatalog: string;
  infacdays: number;
  inwodays: number;
  behindordelaydays: string;
  url: string;
};


export type FacStatusList = {
  data: factorySumStatus[];
  carKpiCatalogcnt: any[];
};

export type FailListItem = {
  trains_no: string;
  cartype: string;
  kpicartype: string;
  assetnum: string;
  belongto: string;
  belongtodesc: string;
  repnum: string;
  reptime: string;
  rep_loc: string;
  fail_lvl: string;
  tcms_code: string;
  fail_loc: string;
  fail_phenomenon: string;
  fail_status: string;
  fail_dept: string;
  fail_cmwo: string;
  cmwo_url: string;
  rep_url: string;
  from: string;
};

export type FailListData = {
  fail_total_cnt_a: number;
  fail_total_cnt_b: number;
  fail_total_cnt_c: number;
  fail_total_cnt_ab: number;
  fail_total_cnt: number;
  fail_ma_cnt_a: number;
  fail_ma_cnt_b: number;
  fail_ma_cnt_c: number;
  fail_ma_cnt_ab: number;
  fail_ma_cnt: number;
  fail_atp_cnt_a: number;
  fail_atp_cnt_b: number;
  fail_atp_cnt_c: number;
  fail_atp_cnt_ab: number;
  fail_atp_cnt: number;
  fail_duty_cnt: number;
  fail_list: FailListItem[];
};

export type FailListItemArray = {
  fail_list: FailListItem[];
};

export type ReportLevelCardDataType = {
  fail_lvl: string;
  all_fail_quantity: number;
  Maintenance_fail_quantity: number;
  other_fail_quantity: number;
};

export type ATPFailListByMonth = {
  year: string;
  month: string;
  failcnt: string;
  dailyfailcnt: string;
};

export type ATPReasonByCarType = {
  key: string;
  cnt: number;
  percentage: number;
};

export type RefactoredCarTypeForPieChart = {
  name: string;
  value: number;
};

export type FaultListDetail = {
  enterdate: string;
  trainno: string;
  assetnum: string;
  assetgroup: string;
  dept: string;
  description: string;
};

export type FaultEquipmentAnalysis = {
  key: string;
  cnt: number;
  percentage: number;
  event: Array<{
    key: string;
    cnt: number;
    percentage: number;
  }>;
};

export type InventoryOverview = {
  dept: string;
  month: string;
  year: string;
  sum_issue_mount: string;
  sum_invbal_mount: string;
};

export type InventoryListBalance = {
  itemnum: string;
  conditioncode: string;
  unitprice: string;
  dept: string;
  month: string;
  year: string;
  unit: string;
  itemdesc: string;
  sum_invbal_mount: string;
  curbal: string;
};

export type InventoryListIssue = {
  itemnum: string;
  conditioncode: string;
  unitprice: string;
  dept: string;
  month: string;
  year: string;
  unit: string;
  itemdesc: string;
  sum_issue_mount: string;
  quantity: string;
};

export type CarSpecChildren = {
  assetnum: string;
  status: string;
  statusdesc: string;
  url: string;
  testrundate: string;
  belongtodept: string;
  belongtodeptdesc: string;
  belongtofac: string;
  belongtofacdesc: string;
  startdate: string;
  stopdate: string;
  remark: string;
};

export type Signal = {
  SOURCE?: string;
  ASSETNUM: string;
  EQ4: string;
  EQ2_C: string;
  DESC?: string;
};

//annual report data refactor
export type AggregatedData = {
  failtype: string;
  total: number;
  duty_num: number;
  atp_num: number;
  kpicartypeCounts: { [key: string]: number };
  monthlyData: { [month: string]: { [kpicartype: string]: number } };
  monthlyDataBykpicartype: {
    [month: string]: { [kpicartype: string]: number };
  };
};

export type Recent30days = {
  ALL_D: string;
  AVAILABLE: string;
  EQ11: string;
  RATION: string;
  TOTAL: string;
  USUALFLAG: string;
};


export type PiechartData = {
  name: string;
  value: number;
};