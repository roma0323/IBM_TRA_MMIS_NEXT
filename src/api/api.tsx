import { FetcheGetSumStatusList } from "@/types/type"; // Update the import path as needed

export async function getSumStatusListAndsumtotalEqualone(
  date?: string,
): Promise<FetcheGetSumStatusList> {
  // If no date is provided, use the current date
  let qdate = date ? new Date(date) : new Date();

  // Subtract one day from the date
  qdate.setDate(qdate.getDate() - 1);

  // Format the date as YYYY-MM-DD
  const formattedDate = qdate.toISOString().split("T")[0];

  // Function to wait for a specified number of milliseconds
  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Wait for 2 seconds (2000 milliseconds) before proceeding
  await wait(2000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&qdate=${formattedDate}&sumtotal=1`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );

  return res.json();
}

export async function getSumStatusListAndCarcatalogEqualParam(id: String) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&qdate=2024-08-04&carcatalog=${id}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );
  return res.json();
}

export async function getCarTypeListAndCarcatalogEqualParam(id: String) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getCarTypeList&carcatalog=${id}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );
  return res.json();
}

export async function getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname(
  id: String,
  trainName: String,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&multiplier=0&qdate=2024-08-04&carcatalog=${id}&cartype=${trainName}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );
  return res.json();
}

export async function getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(
  dept: String,
  cartype: String,
  qtype: string,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusDetailList&multiplier=0&dept=${dept}&cartype=${cartype}&qtype=${qtype}&qdate=2024-08-04`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );
  return res.json();
}
export async function getSumStatusDetailListMultiplierZeor(): Promise<FetcheGetSumStatusList> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=2024-08-04`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );
  return res.json();
}

export async function getFacRepairYearPlan() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getFacRepairYearPlan&year=2024`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );
  return res.json();
}

export async function getSumStatusListEq3Param(trainName: String) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/maximo/zz_data?method=getSumStatusList&eq3=${trainName}&qdate=2024-08-19
`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    },
  );
  return res.json();
}
