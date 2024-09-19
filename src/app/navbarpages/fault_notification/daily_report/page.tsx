import ClientPage from "@/components/fault_notification/ClientPage";
import { getSumFailListDaily } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  const FailListDailyData = await getSumFailListDaily(searchParams.date);

  const FakeFailListDailyDatatest = [
    {
      trains_no: "7501",
      cartype: "R20",
      kpicartype: "電力機車",
      assetnum: "R31",
      belongto: "MMY00",
      belongtodesc: "汐止機務段",
      repnum: "1130903-42",
      reptime: "2024-09-02 16:32",
      rep_loc: "汐止",
      fail_lvl: "B",
      tcms_code: "",
      fail_loc: "",
      fail_phenomenon: "機車引擎過熱,R31 次無效",
      fail_status: "",
      fail_dept: "",
      fail_cmwo: "113-1A-69879",
      cmwo_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_cmwo&uniqueid=9269861",
      rep_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_fnm_view&uniqueid=49654",
      from: "MAY00",
    },
    {
      trains_no: "7501",
      cartype: "R20",
      kpicartype: "柴電機車",
      assetnum: "R31",
      belongto: "MMY00",
      belongtodesc: "彰化機務段",
      repnum: "1130903-42",
      reptime: "2024-09-02 16:32",
      rep_loc: "桃園",
      fail_lvl: "A",
      tcms_code: "",
      fail_loc: "",
      fail_phenomenon: "機車引擎過熱,R31  LOS作用熄火，復位多次無效",
      fail_status: "",
      fail_dept: "",
      fail_cmwo: "113-1A-69879",
      cmwo_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_cmwo&uniqueid=9269861",
      rep_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_fnm_view&uniqueid=49654",
      from: "MAY00",
    },
    {
      trains_no: "4547",
      cartype: "EMU500",
      kpicartype: "通勤列車",
      assetnum: "EMC577",
      belongto: "MIY00",
      belongtodesc: "臺東機務段",
      repnum: "1130903-43",
      reptime: "2024-09-02 16:54",
      rep_loc: "臺東",
      fail_lvl: "A",
      tcms_code: "",
      fail_loc: "",
      fail_phenomenon: "限速備援系統異常",
      fail_status: "",
      fail_dept: "",
      fail_cmwo: "113-C1-16958",
      cmwo_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_cmwo&uniqueid=9327351",
      rep_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_fnm_view&uniqueid=49656",
      from: "MAY00",
    },
    {
      trains_no: "4547",
      cartype: "EMU500",
      kpicartype: "通勤列車",
      assetnum: "EMC577",
      belongto: "MIY00",
      belongtodesc: "臺東機務段",
      repnum: "1130903-43",
      reptime: "2024-09-02 16:54",
      rep_loc: "臺東",
      fail_lvl: "C",
      tcms_code: "",
      fail_loc: "",
      fail_phenomenon: "限速備援系統異常",
      fail_status: "",
      fail_dept: "",
      fail_cmwo: "113-C1-16958",
      cmwo_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_cmwo&uniqueid=9327351",
      rep_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_fnm_view&uniqueid=49656",
      from: "MAY00",
    },
    {
      trains_no: "4547",
      cartype: "EMU500",
      kpicartype: "通勤列車",
      assetnum: "EMC577",
      belongto: "MIY00",
      belongtodesc: "臺東機務段",
      repnum: "1130903-43",
      reptime: "2024-09-02 16:54",
      rep_loc: "臺東",
      fail_lvl: "B",
      tcms_code: "",
      fail_loc: "",
      fail_phenomenon: "限速備援系統異常",
      fail_status: "",
      fail_dept: "",
      fail_cmwo: "113-C1-16958",
      cmwo_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_cmwo&uniqueid=9327351",
      rep_url:
        "https://ap.nmmis.railway.gov.tw/maximo/ui/maximo.jsp?event=loadapp&value=zz_fnm_view&uniqueid=49656",
      from: "MAY00",
    },
  ];

  const refactorData = (data: typeof FakeFailListDailyDatatest) => {
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