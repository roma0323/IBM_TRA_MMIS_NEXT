import ClientPage from "@/components/fault_notification/annual_report/ClientPage";
import { getSumFailYearTypeA } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  const getSumFailYearTypeAData = await getSumFailYearTypeA(searchParams.date);

  const FakegetSumFailYearTypeADataA = [
    {
      year: "2024",
      month: "01",
      kpicartype: "城際列車",
      atp: "0",
      duty: "1",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "01",
      kpicartype: "通勤列車",
      atp: "1",
      duty: "0",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "12",
      kpicartype: "柴電機車",
      atp: "1",
      duty: "0",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "12",
      kpicartype: "柴液機車",
      atp: "0",
      duty: "1",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "12",
      kpicartype: "客車",
      atp: "0",
      duty: "1",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "12",
      kpicartype: "柴油客車",
      atp: "0",
      duty: "1",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "12",
      kpicartype: "貨車",
      atp: "0",
      duty: "1",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "12",
      kpicartype: "電力機車",
      atp: "0",
      duty: "1",
      dutydept: "",
      failtype: "A",
    },
  ];

  const FakegetSumFailYearTypeADataB = [
    {
      year: "2024",
      month: "01",
      kpicartype: "電力機車",
      atp: "0",
      duty: "1",
      dutydept: "",
      failtype: "B",
    },
    {
      year: "2024",
      month: "02",
      kpicartype: "通勤列車",
      atp: "1",
      duty: "0",
      dutydept: "",
      failtype: "B",
    },
    {
      year: "2024",
      month: "10",
      kpicartype: "客車",
      atp: "1",
      duty: "0",
      dutydept: "",
      failtype: "B",
    },
    
  ];

  // Function to process data
  const processData = (data: any[], failtype: string) => {
    let duty_num = 0;
    let atp_num = 0;
    const kpicartypeCounts: { [key: string]: number } = {};

    const kpicartypes = [
      "城際列車",
      "通勤列車",
      "電力機車",
      "柴電機車",
      "柴液機車",
      "柴油客車",
      "客車",
      "貨車",
    ];

    const monthlyDataBykpicartype: { [month: string]: { [kpicartype: string]: number } } = {};
    const monthlyData: { [month: string]: { 故障通報: number; 行車責任事故: number; ATP: number } } = {};
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    months.forEach((month) => {
      monthlyDataBykpicartype[month] = {};
      kpicartypes.forEach((type) => {
        monthlyDataBykpicartype[month][type] = 0;
      });
      monthlyData[month] = { 故障通報: 0, 行車責任事故: 0, ATP: 0 };
    });

    data.forEach((item) => {
      if (item.atp === "1") {
        atp_num++;
      }
      if (item.duty === "1") {
        duty_num++;
      }
      if (kpicartypeCounts[item.kpicartype]) {
        kpicartypeCounts[item.kpicartype]++;
      } else {
        kpicartypeCounts[item.kpicartype] = 1;
      }

      const monthIndex = parseInt(item.month, 10) - 1;
      const monthName = months[monthIndex];
      monthlyDataBykpicartype[monthName][item.kpicartype]++;
      monthlyData[monthName].故障通報++;
      if (item.atp === "1") {
        monthlyData[monthName].ATP++;
      }
      if (item.duty === "1") {
        monthlyData[monthName].行車責任事故++;
      }
    });

    return {
      failtype,
      total: data.length,
      duty_num,
      atp_num,
      kpicartypeCounts,
      monthlyData,
      monthlyDataBykpicartype,
    };
  };

  const aggregatedDataA = processData(FakegetSumFailYearTypeADataA, "A");
  const aggregatedDataB = processData(FakegetSumFailYearTypeADataB, "B");

  const aggregatedData = [aggregatedDataA, aggregatedDataB];

  console.log(aggregatedData); // For debugging purposes
  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage aggregatedData={aggregatedData} />
    </main>
  );
}