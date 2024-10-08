import ClientPage from "@/components/fault_notification/annual_report/ClientPage";
import { getSumFailYearType } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  const getSumFailYearTypeA = await getSumFailYearType(searchParams.date, "A");
  const getSumFailYearTypeB = await getSumFailYearType(searchParams.date, "B");
  const getSumFailYearTypeC = await getSumFailYearType(searchParams.date,"C");

  const getSumFailYearTypeAll = getSumFailYearTypeA.concat(getSumFailYearTypeB).concat(getSumFailYearTypeC);


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

    const monthlyDataBykpicartype: {
      [month: string]: { [kpicartype: string]: number };
    } = {};
    const monthlyData: {
      [month: string]: { 故障通報: number; 行車責任事故: number; ATP: number };
    } = {};
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

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

  const aggregatedDataA = processData(getSumFailYearTypeA, "A");
  const aggregatedDataB = processData(getSumFailYearTypeB, "B");
  const aggregatedDataC = processData(getSumFailYearTypeC, "C");
  const aggregatedDataAll = processData(getSumFailYearTypeAll, "All");

  const aggregatedData = [aggregatedDataA, aggregatedDataB,aggregatedDataC,aggregatedDataAll];

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage aggregatedData={aggregatedData} />
    </main>
  );
}
