import ClientPage from "@/components/fault_notification/ClientPage";
import { getSumFailListDaily } from "@/api/api";
import { FailListItem } from "@/types/type";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  const FailListDailyData = await getSumFailListDaily(searchParams.date);

  const refactorData = (data: FailListItem[]) => {
    const counter: Record<string, { all_fail_quantity: number; Maintenance_fail_quantity: number; other_fail_quantity: number }> = {
      A: { all_fail_quantity: 0, Maintenance_fail_quantity: 0, other_fail_quantity: 0 },
      B: { all_fail_quantity: 0, Maintenance_fail_quantity: 0, other_fail_quantity: 0 },
      C: { all_fail_quantity: 0, Maintenance_fail_quantity: 0, other_fail_quantity: 0 },
      All: { all_fail_quantity: 0, Maintenance_fail_quantity: 0, other_fail_quantity: 0 }
    };

    // Initialize counters
    data.forEach(({ fail_lvl }) => {
      if (counter[fail_lvl]) {
        counter[fail_lvl].all_fail_quantity += 1;
        counter[fail_lvl].Maintenance_fail_quantity += 1; // Assuming all are Maintenance
        counter[fail_lvl].other_fail_quantity += 1; // Assuming all are Other
      }
    });

    // Calculate All totals
    const allLevelCounts = counter["All"];
    ["A", "B", "C"].forEach(lvl => {
      allLevelCounts.all_fail_quantity += counter[lvl].all_fail_quantity;
      allLevelCounts.Maintenance_fail_quantity += counter[lvl].Maintenance_fail_quantity;
      allLevelCounts.other_fail_quantity += counter[lvl].other_fail_quantity;
    });

    // Prepare new data structure in required order
    const ReportLevelCardData = ["A", "B", "C", "All"].map(lvl => ({
      fail_lvl: lvl,
      ...counter[lvl],
    }));

    return ReportLevelCardData;
  };

  const ReportLevelCardData = refactorData(FailListDailyData.fail_list);
 
  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage fail_list={FailListDailyData.fail_list} ReportLevelCardData={ReportLevelCardData}/>
    </main>
  );
}