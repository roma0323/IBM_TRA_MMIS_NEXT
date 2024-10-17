"use client";

import React, { useState } from "react";
import { ReportLevelCard } from "@/components/fault_notification/ReportLevelCard";
import BoardTitleSection from "@/components/BoardTitleSection";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FailListItem, ReportLevelCardDataType } from "@/types/type";

type Props = {
  fail_list: FailListItem[];
  ReportLevelCardData: ReportLevelCardDataType[];
};

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

const ClientPage: React.FC<Props> = ({ fail_list, ReportLevelCardData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const [selectFactory, setSelectFactory] = useState<string>("A");

  const renderTableRows = (data: FailListItem[]) => {
    return data.map((fail_by_row, index) => (
      <TableRow key={index}>
        <TableCell className="font-medium">{fail_by_row.trains_no}</TableCell>
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
        {/* <TableCell>{fail_by_row.rep_url}</TableCell> */}
        <TableCell className="text-right">
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

  const filteredFailList =
    selectFactory === "All"
      ? fail_list
      : fail_list.filter(
          (fail_by_row) => selectFactory === fail_by_row.fail_lvl
        );

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      <div className="min-w-[25rem] flex items-center justify-center">
        <BoardTitleSection
          title={`故障通報分級`}
          content={
            <div className="flex flex-col mx-4">
              {ReportLevelCardData.map((CardDataByLevel, index) => (
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
            <>
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
            </>
          }
        />
      </div>
    </div>
  );
};

export default ClientPage;
