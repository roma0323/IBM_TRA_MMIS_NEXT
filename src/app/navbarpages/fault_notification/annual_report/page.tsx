import ClientPage from "@/components/fault_notification/annual_report/ClientPage";
import { getSumFailYearTypeA } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  const getSumFailYearTypeAData = await getSumFailYearTypeA(searchParams.date);

  const FakegetSumFailYearTypeAData = [
    {
        "year": "2024",
        "month": "01",
        "kpicartype": "電力機車",
        "atp": "0",
        "duty": "0",
        "dutydept": "",
        "failtype": "A"
    },
    {
        "year": "2024",
        "month": "01",
        "kpicartype": "通勤列車",
        "atp": "0",
        "duty": "0",
        "dutydept": "",
        "failtype": "A"
    },
    {
        "year": "2024",
        "month": "01",
        "kpicartype": "電力機車",
        "atp": "1",
        "duty": "0",
        "dutydept": "",
        "failtype": "A"
    },
    {
        "year": "2024",
        "month": "01",
        "kpicartype": "柴電機車",
        "atp": "0",
        "duty": "0",
        "dutydept": "",
        "failtype": "A"
    },
    {
        "year": "2024",
        "month": "01",
        "kpicartype": "通勤列車",
        "atp": "0",
        "duty": "0",
        "dutydept": "",
        "failtype": "A"
    },
  ];




  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage />
    </main>
  );
}