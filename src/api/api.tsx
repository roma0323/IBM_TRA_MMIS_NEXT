import { FetcheGetSumStatusList } from "@/types/type"; // Update the import path as needed
//import { FetcheGetSumStatusListData } from "@/types/type";

export async function getSumStatusListAndsumtotalEqualone(): Promise<FetcheGetSumStatusList> {
  const res = await fetch(
    `http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-08-04&sumtotal=1`,
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

export async function getSumStatusListAndCarcatalogEqualParam(id:String) {

  const res = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-08-04&carcatalog=${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}


export async function getCarTypeListAndCarcatalogEqualParam(id:String) {

  const res = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getCarTypeList&carcatalog=${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
  return res.json();

}


export async function getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname(id:String,trainName:String) {

  const res = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&qdate=2024-08-04&carcatalog=${id}&cartype=${trainName}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
  return res.json();

}

export async function getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(dept:String,cartype:String,qtype:string) {

  const res = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusDetailList&multiplier=0&dept=${dept}&cartype=${cartype}&qtype=${qtype}&qdate=2024-08-04`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
  return res.json();

}
export async function getSumStatusDetailListMultiplierZeor(): Promise<FetcheGetSumStatusList> {

  const res = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=2024-08-04`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
  return res.json();

}

export async function getFacRepairYearPlan() {

  const res = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getFacRepairYearPlan&year=2022`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
  return res.json();

}



