import ClientPage from "@/components/fault_notification/ATP_report/ClientPage";
import { getSumFailYearTypeA } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  // Function to refactor cartype array
  type CarType ={
    key: string;
    cnt: number;
    percentage: number;
  }

  const refactorCartype = (cartype: CarType[]): { name: string; value: number }[] => {
    return cartype.map((item) => ({
      name: item.key,
      value: item.cnt,
    }));
  };

  // URL: http://192.168.36.21/maximo/zz_data?method=getATPFailYear&year=2024
  const test = [
    {
      year: "2024",
      month: "01",
      failcnt: "26",
      dailyfailcnt: "0.8400000000000001",
    },
    {
      year: "2024",
      month: "02",
      failcnt: "2",
      dailyfailcnt: "0.06999999999999999",
    },
    {
      year: "2024",
      month: "03",
      failcnt: "3",
      dailyfailcnt: "0.09999999999999999",
    },
    {
      year: "2024",
      month: "04",
      failcnt: "3",
      dailyfailcnt: "0.1",
    },
    {
      year: "2024",
      month: "05",
      failcnt: "3",
      dailyfailcnt: "0.09999999999999999",
    },
  ];

  //http://192.168.36.21/maximo/zz_data?method=getATPFailList&year=2024&key=cartype
  const cartype = [
    {
      key: "E500",
      cnt: 2,
      percentage: 3,
    },
    {
      key: "EMU3000",
      cnt: 7,
      percentage: 12,
    },
    {
      key: "TEMU1000",
      cnt: 3,
      percentage: 5,
    },
    {
      key: "E1000",
      cnt: 4,
      percentage: 7,
    },
  ];
  const refactoredCartype = refactorCartype(cartype);

  // URL: http://192.168.36.21/maximo/zz_data?method=getATPFailList&year=2024&key=factor

  const 故障要因分析 = [
    {
      key: "非ATP故障",
      cnt: 1,
      percentage: 4,
    },
    {
      key: "外部干擾",
      cnt: 1,
      percentage: 4,
    },
    {
      key: "設備故障",
      cnt: 21,
      percentage: 91,
    },
  ];
  const refactored故障要因分析 = refactorCartype(故障要因分析);

  //URL: http://192.168.36.21/maximo/zz_data?method=getATPFailList&year=2024&key=element

  const 故障設備分析 = [
    {
      key: "04.BTM感應子傳輸模組",
      cnt: 4,
      percentage: 17,
      event: [
        {
          key: "CAU天線",
          cnt: 3,
          percentage: 75,
        },
        {
          key: "BTM感應子傳輸模組",
          cnt: 1,
          percentage: 25,
        },
      ],
    },
    {
      key: "非ATP故障",
      cnt: 1,
      percentage: 4,
      event: [
        {
          key: "非ATP故障",
          cnt: 1,
          percentage: 100,
        },
      ],
    },
    {
      key: "外部干擾",
      cnt: 1,
      percentage: 4,
      event: [
        {
          key: "受干擾",
          cnt: 1,
          percentage: 100,
        },
      ],
    },
    {
      key: "05.SDU速度和距離裝置",
      cnt: 2,
      percentage: 9,
      event: [
        {
          key: "SDU2",
          cnt: 1,
          percentage: 50,
        },
        {
          key: "SDU1",
          cnt: 1,
          percentage: 50,
        },
      ],
    },
  ];

  //URL: http://192.168.36.21/maximo/zz_data?method=getATPFailList&year=2024&islist=1&key=cartype
  const list = [
    {
      enterdate: "2024-01-03",
      trainno: "2008",
      assetnum: "ED9152",
      assetgroup: "EMU900",
      dept: "七堵機務段",
      description: "ED9152號車上ATP故障",
    },
    {
      enterdate: "2024-02-24",
      trainno: "401",
      assetnum: "TED1007",
      assetgroup: "TEMU1000",
      dept: "臺北機務段",
      description:
        "機車TED1007車上ATP異常,ATP一直跳地上感應子故障並緊急緊軔數次",
    },
    {
      enterdate: "2024-02-17",
      trainno: "4191",
      assetnum: "EMC584",
      assetgroup: "EMU500",
      dept: "臺北機務段",
      description: "電車EMC584號車上ATP故障",
    },
    
  ];
  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage testData={test} cartypeData={refactoredCartype} refactored故障要因分析={refactored故障要因分析} listData={list} 故障設備分析={故障設備分析} />
    </main>
  );
}