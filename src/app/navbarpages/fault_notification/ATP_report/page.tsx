import ClientPage from "@/components/fault_notification/ATP_report/ClientPage";
import { getATPFailYear } from "@/api/api";
import { getATPFailListByYearAndCartype } from "@/api/api";
import { getATPFailListByYearAndFactor } from "@/api/api";
import { getATPFailListByYearAndElement } from "@/api/api";
import { getATPFailListAndCartype } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  // Function to refactor cartype array
  type CarType = {
    key: string;
    cnt: number;
    percentage: number;
  };

  const refactorCartype = (
    cartype: CarType[]
  ): { name: string; value: number }[] => {
    return cartype
      .map((item) => ({
        name: item.key,
        value: item.cnt,
      }))
      .sort((a, b) => b.value - a.value); // Sort by value from big to small
  };

  let overview_number: Array<{
    year: string;
    month: string;
    failcnt: string;
    dailyfailcnt: string;
  }> = [];
  overview_number = await getATPFailYear(searchParams.date);

  let lastYearDate = new Date(searchParams.date||"");
  lastYearDate.setFullYear(lastYearDate.getFullYear() - 1);
  let lastYearOverviewNumber = await getATPFailYear(
    lastYearDate.toISOString().slice(0, 10)
  );

  let faultListByMonth: Array<{
    key: string;
    cnt: number;
    percentage: number;
  }> = [];
  faultListByMonth = await getATPFailListByYearAndCartype(searchParams.date);
  const refactoredCartype = refactorCartype(faultListByMonth);

  let faultReasonAnalysis: Array<{
    key: string;
    cnt: number;
    percentage: number;
  }> = [];

  faultReasonAnalysis = await getATPFailListByYearAndFactor(searchParams.date);
  const refactoredfaultReasonAnalysis = refactorCartype(faultReasonAnalysis);

  let faultEquipmentAnalysis: Array<{
    key: string;
    cnt: number;
    percentage: number;
    event: Array<{
      key: string;
      cnt: number;
      percentage: number;
    }>;
  }> = [];
  faultEquipmentAnalysis = await getATPFailListByYearAndElement(
    searchParams.date
  );

  let faultListDetail: Array<{
    enterdate: string;
    trainno: string;
    assetnum: string;
    assetgroup: string;
    dept: string;
    description: string;
  }>;
  faultListDetail = await getATPFailListAndCartype(searchParams.date);

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage
        lastYearDataForAreaChart={lastYearOverviewNumber}
        thisYearDataForAreaChart={overview_number}
        cartypeData={refactoredCartype}
        refactoredfaultReasonAnalysis={refactoredfaultReasonAnalysis}
        faultListDetail={faultListDetail}
        faultEquipmentAnalysis={faultEquipmentAnalysis}
      />
    </main>
  );
}
