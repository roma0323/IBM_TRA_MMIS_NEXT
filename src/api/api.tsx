import { FetcheGetSumStatusList } from "@/types/type"; // Update the import path as needed
function dateFormat(date?: string) {
  let qdate = date ? new Date(date) : new Date();
  // Subtract one day from the date
  qdate.setDate(qdate.getDate() - 1);
  // Format the date as YYYY-MM-DD
  const formattedDate = qdate.toISOString().split("T")[0];
  return formattedDate;
}
//TODO :fetch without internet , error handling
export async function getSumStatusListAndsumtotalEqualone( //fetch 首頁所有車輛資料
  date?: string
): Promise<FetcheGetSumStatusList> {
  let formattedDate = dateFormat(date);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&qdate=${formattedDate}&sumtotal=1`,
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

export async function getSumStatusListAndCarcatalogEqualParam( //fetch 特定車種資料 deployment detail
  id: String,
  date?: string
) {
  let formattedDate = dateFormat(date);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&qdate=${formattedDate}&carcatalog=${id}`,
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

export async function getCarTypeListAndCarcatalogEqualParam(id: String) {
  //fetch 該車種所有車型號
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getCarTypeList&carcatalog=${id}`,
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
export async function getSumStatusDetailListMultiplierZeor(
  date?: string
): Promise<FetcheGetSumStatusList> {
  //fetch All TrainByRow
  let formattedDate = dateFormat(date);
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=${formattedDate}`,
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
export async function getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname( //fetch  TrainByRow  by certain traintype
  id: string,
  trainName: string,
  date?: string
) {
  let formattedDate = dateFormat(date);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&multiplier=0&qdate=${formattedDate}&carcatalog=${id}&cartype=${trainName}`,
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
export async function getSumStatusListEq3Param(
  trainName: string,
  date: string
) {
  //fetch TrainByRow 客車專用
  let formattedDate = dateFormat(date);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&eq3=${trainName}&qdate=${formattedDate}
`,
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
export async function getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam( //fetch 單輛維修詳情
  dept: String,
  cartype: String,
  qtype: string,
  date: string
) {
  let formattedDate = dateFormat(date);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusDetailList&multiplier=0&dept=${dept}&cartype=${cartype}&qtype=${qtype}&qdate=${formattedDate}`,
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

export async function getFacRepairYearPlan(yearString?: string) {
  //fetch 機廠檢修圖表
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getFacRepairYearPlan&year=${yearString}`,
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
export async function getFacRepairListByMonth(date?: string) {
  //fetch 機廠檢修清單
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  const monthString = formattedDate.split("-")[1];
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumFacStatusList&year=${yearString}&month=${monthString}`,
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
export async function getFacRepairList() {
  //fetch 機廠檢修清單
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumFacStatusList`,
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

export async function getSumFailListDaily(date?: string) {
  //fetch 故障通報daily

  let formattedDate = dateFormat(date);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumFailList&qdate=${formattedDate}`,
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

export async function getSumFailYearTypeA(date?: string) {
  //fetch 故障通報annual

  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumFailYearRP&year=${yearString}&failtype=A`,
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
