import ClientPage from "@/components/fault_notification/ATP_report/ClientPage";
import { getATPFailYear, getATPFailListByYearAndCartype, getATPFailListByYearAndFactor, getATPFailListByYearAndElement, getATPFailListAndCartype } from "@/api/api";
import { ATPFailListByMonth, ATPReasonByCarType, RefactoredCarTypeForPieChart, FaultListDetail, FaultEquipmentAnalysis } from "@/types/type";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  const refactorCartype = (
    cartype: ATPReasonByCarType[]
  ): RefactoredCarTypeForPieChart[] => {
    return cartype
      .map((item) => ({
        name: item.key,
        value: item.cnt,
      }))
      .sort((a, b) => b.value - a.value);
  };

  const [overview_number, lastYearOverviewNumber, faultListByMonth, faultReasonAnalysis, faultEquipmentAnalysis, faultListDetail] = await Promise.all([
    getATPFailYear(searchParams.date),
    getATPFailYear(new Date(new Date(searchParams.date || new Date()).setFullYear(new Date(searchParams.date || new Date()).getFullYear() - 1)).toISOString().slice(0, 10)),
    getATPFailListByYearAndCartype(searchParams.date),
    getATPFailListByYearAndFactor(searchParams.date),
    getATPFailListByYearAndElement(searchParams.date),
    getATPFailListAndCartype(searchParams.date)
  ]);

  const refactoredCartype = refactorCartype(faultListByMonth);
  const refactoredfaultReasonAnalysis = refactorCartype(faultReasonAnalysis);

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