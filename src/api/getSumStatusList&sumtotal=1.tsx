import { FetcheGetSumStatusList } from "@/types/type"; // Update the import path as needed

export async function getData(): Promise<FetcheGetSumStatusList> {
  const res = await fetch(
    `http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-08-05&sumtotal=1`,
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
