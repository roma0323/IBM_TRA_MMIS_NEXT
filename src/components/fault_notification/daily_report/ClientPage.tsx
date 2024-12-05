"use client";

import useSWR from "swr";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FailListData } from "@/types/type";
import { getSumFailListDaily } from "@/api/api";
import { refactorData } from "@/components/fault_notification/daily_report/refactorData";
import { DataTable } from "@/components/ui/DataTable";
import { columns } from "@/components/fault_notification/daily_report/column";
import Loading from "@/components/Loading";


import { ReportLevelCard } from "@/components/fault_notification/daily_report/ReportLevelCard";
import BoardTitleSection from "@/components/BoardTitleSection";


const ClientPage: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const [selectFactory, setSelectFactory] = useState<string>("A");

  //report fetch is current day
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";
  let qdate = date ? new Date(date) : new Date();
  // Subtract one day from the date
  qdate.setDate(qdate.getDate() + 1);
  const formattedDate = qdate.toISOString().split("T")[0];
  

  const fetcher = async () => {
    const FailListDailyData = await getSumFailListDaily(formattedDate);
    return FailListDailyData;
  };
  const { data: FailListDailyData, error, isLoading } = useSWR<FailListData>(`fault${date}`, fetcher);

  //loading page
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div><Loading /></div>;

  const filteredFailList = selectFactory === "All"
    ? FailListDailyData!.fail_list
    : FailListDailyData!.fail_list.filter((fail_by_row) => selectFactory === fail_by_row.fail_lvl);

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      <div className="min-w-[25rem] w-[25vw] max-w-[45rem] flex items-center justify-center">
        <BoardTitleSection
          title={`故障通報分級`}
          content={
            <div className="flex flex-col mx-4">
              {refactorData(FailListDailyData!.fail_list).map((CardDataByLevel, index) => (
                <ReportLevelCard
                  key={index}
                  CardDataByLevel={CardDataByLevel}
                  isActive={activeCardIndex === index}
                  onToggle={() => {
                    setActiveCardIndex(index);
                    setSelectFactory(CardDataByLevel.fail_lvl);
                  }}
                />
              ))}
            </div>
          }
        />
      </div>
      <div className="grow flex items-center justify-center relative">
        <BoardTitleSection
          title={`${selectFactory}級`}
          content={
            <DataTable columns={columns} data={filteredFailList} />

          }
        />
      </div>
    </div>
  );
};


export default ClientPage;