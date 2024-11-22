"use client";

import useSWR from "swr";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FailListItem, FailListData } from "@/types/type";
import { getSumFailListDaily } from "@/api/api";
import { refactorData } from "@/components/fault_notification/daily_report/refactorData";

import Loading from "@/components/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReportLevelCard } from "@/components/fault_notification/daily_report/ReportLevelCard";
import BoardTitleSection from "@/components/BoardTitleSection";

const headers = [
  "車次",
  "車型",
  "車組車號",
  "通報號",
  "事故等級",
  "通報時間",
  "事故地點",
  "TCMS故障代碼",
  "故障位置",
  "故障現象",
  "狀態",
  "責任單位",
  "臨維單",
];

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
            <Table>
              <TableHeader>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableHead key={index}>{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>{renderTableRows(filteredFailList)}</TableBody>
            </Table>
          }
        />
      </div>
    </div>
  );
};

const renderTableRows = (data: FailListItem[]) => {
  return data.map((fail_by_row, index) => (
    <TableRow key={index}>
      <TableCell>{fail_by_row.trains_no}</TableCell>
      <TableCell>{fail_by_row.cartype}</TableCell>
      <TableCell>{fail_by_row.assetnum}</TableCell>
      <TableCell>{fail_by_row.repnum}</TableCell>
      <TableCell>{fail_by_row.fail_lvl}</TableCell>
      <TableCell>{fail_by_row.reptime}</TableCell>
      <TableCell>{fail_by_row.rep_loc}</TableCell>
      <TableCell>{fail_by_row.tcms_code}</TableCell>
      <TableCell>{fail_by_row.fail_loc}</TableCell>
      <TableCell>{fail_by_row.fail_phenomenon}</TableCell>
      <TableCell>{fail_by_row.fail_status}</TableCell>
      <TableCell>{fail_by_row.fail_dept}</TableCell>
      <TableCell className="text-primary underline">
        <a
          href={fail_by_row.rep_url}
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer"
        >
          {fail_by_row.fail_cmwo}
        </a>
      </TableCell>
    </TableRow>
  ));
};

export default ClientPage;