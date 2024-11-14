import { FetcheGetSumStatusList,FailListData } from "@/types/type"; // Update the import path as needed
function dateFormat(date?: string) {
  let qdate = date ? new Date(date) : new Date();
  // Subtract one day from the date
  qdate.setDate(qdate.getDate() - 1);
  // Format the date as YYYY-MM-DD
  const formattedDate = qdate.toISOString().split("T")[0];
  return formattedDate;
}
export async function getSumStatusListAndsumtotalEqualone( //fetch 首頁所有車輛資料
  date?: string
) {
  let formattedDate = dateFormat(date);

  

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

//FIXME :can not fetch 30~60days
export async function get30DayData() { //fetch current 30 day data
  try {
    const query = "SELECT ALL_D, EQ11, AVAILABLE, TOTAL, RATION, USUALFLAG FROM ZZ_P_DAILY_REPORT_24_KPI zvdrk WHERE VARCHAR_FORMAT(CURRENT date, 'yyyy-MM-dd') <> ALL_D ORDER BY VARCHAR_FORMAT(ALL_D, 'yyyy-MM-dd') ASC";

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getResult`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: query, // Sending the query string as the body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching operation signal:', error);
    return null; // Return null or handle the error as needed
  }
}



export async function getSumStatusListAndsumtotalEqualoneNotNormaltrain( //fetch 非常態車輛
  date?: string
) {
  let formattedDate = dateFormat(date);

  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&qdate=${formattedDate}&sumtotal=1&multiplier=1&normaltrain=0`,
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
  date?: string
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
  date?: string
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

export async function getFacRepairYearPlan(date?: string) {
  //fetch 機廠檢修圖表
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];


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

// data type :FacStatusList
export async function getFacRepairListByMonth(date?: string) {
  //fetch 機廠檢修清單
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  const monthString = formattedDate.split("-")[1];
  
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
  //fetch 機廠檢修清單 (日期不變)
  
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

export async function getSumFailListDaily(date?: string) : Promise<FailListData>{
  //fetch 故障通報daily

  let formattedDate = dateFormat(date);

  

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

export async function getSumFailYearType(date?: string,failtype?: string) {
  //fetch 故障通報annual

  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  
  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumFailYearRP&year=${yearString}&failtype=${failtype}`,
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
export async function getATPFailYear(date?: string) {
  // Fetch ATP Fail Year data
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];

  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getATPFailYear&year=${yearString}`,
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

export async function getATPFailListByYearAndCartype(date?: string) {
  // Fetch ATP Fail List by year and cartype
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getATPFailList&year=${yearString}&key=cartype`,
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
export async function getATPFailListByYearAndFactor(date?: string) {
  // Fetch ATP Fail List by year and factor
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getATPFailList&year=${yearString}&key=factor`,
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

export async function getATPFailListByYearAndElement(date?: string) {
  // Fetch ATP Fail List by year and element
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getATPFailList&year=${yearString}&key=element`,
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

export async function getATPFailListAndCartype(date?: string) {
  // Fetch ATP Fail List by year and element
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getATPFailList&year=${yearString}&islist=1&key=cartype`,
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

export async function getInvMount(date?: string) {
  // Fetch inventory cost amount
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];
  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getInvMount&year=${yearString}`,
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

export async function getInvMountListRow(date?: string,month?: string,dept?:string , type?: string) {
  // Fetch getInventory List 
  let formattedDate = dateFormat(date);
  const yearString = formattedDate.split("-")[0];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getInvMountList&year=${yearString}&month=${month}&dept=${dept}&type=${type}`,
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


export async function getAllCarSpecInfoByCarType(type?: string) {
  // Fetch car spec
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getCarBaseInfoByCarType&cartype=${type}`,
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


export async function getCarTypeList() {
  // Fetch all car type
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getCarTypeList`,
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


// api.tsx

export async function getOperationSignal() {
  try {
    const query = "SELECT EQ2_C, EQ8_C, ASSETNUM, EQ4, SOURCE, DESC FROM ZZ_V_DRIVER ORDER BY SEQ, ASSETNUM ASC, SOURCE ASC";

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getResult`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: query, // Sending the query string as the body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching operation signal:', error);
    return null; // Return null or handle the error as needed
  }
}
