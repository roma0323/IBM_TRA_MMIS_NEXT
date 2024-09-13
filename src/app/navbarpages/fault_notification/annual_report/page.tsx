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
      kpicartype: "電力機車",
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
      kpicartype: "電力機車",
      atp: "1",
      duty: "0",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "12",
      kpicartype: "通勤列車",
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
    });

    const monthlyData = [
      { name: "Jan", All: 0, duty: 0, ATP: 0 },
      { name: "Feb", All: 0, duty: 0, ATP: 0 },
      { name: "Mar", All: 0, duty: 0, ATP: 0 },
      { name: "Apr", All: 0, duty: 0, ATP: 0 },
      { name: "May", All: 0, duty: 0, ATP: 0 },
      { name: "Jun", All: 0, duty: 0, ATP: 0 },
      { name: "Jul", All: 0, duty: 0, ATP: 0 },
      { name: "Aug", All: 0, duty: 0, ATP: 0 },
      { name: "Sep", All: 0, duty: 0, ATP: 0 },
      { name: "Oct", All: 0, duty: 0, ATP: 0 },
      { name: "Nov", All: 0, duty: 0, ATP: 0 },
      { name: "Dec", All: 0, duty: 0, ATP: 0 },
    ];

    data.forEach((item) => {
      const monthIndex = parseInt(item.month, 10) - 1;
      monthlyData[monthIndex].All++;
      if (item.atp === "1") {
        monthlyData[monthIndex].ATP++;
      }
      if (item.duty === "1") {
        monthlyData[monthIndex].duty++;
      }
    });

    return {
      failtype,
      total: data.length,
      duty_num,
      atp_num,
      kpicartypeCounts,
      monthlyData,
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