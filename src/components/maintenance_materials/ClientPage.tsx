"use client";

import React, { useState } from "react";
import BoardTitleSection from "@/components/BoardTitleSection";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InventoryTypeCard from "@/components/maintenance_materials/InventoryTypeCard";
import { FailListItem, InventoryOverview } from "@/types/type";
import GroupBarChart from "@/components/fault_notification/annual_report/GroupBarChart";

type Props = {
  inventory_overview: InventoryOverview[];
  inventory_list_balance: any[];
  inventory_list_issue: any[];
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

const ClientPage: React.FC<Props> = ({
  inventory_overview,
  inventory_list_balance,
  inventory_list_issue,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const [selectFactory, setSelectFactory] = useState<string>("A");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const renderTableRows = (data: any[]) => {
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
        <TableCell className="text-right">
          <a
            href={fail_by_row.rep_url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            {fail_by_row.fail_cmwo}
          </a>
        </TableCell>
      </TableRow>
    ));
  };

  const filteredFailList =
    selectFactory === "All"
      ? inventory_list_issue
      : inventory_list_issue.filter(
          (fail_by_row) => selectFactory === fail_by_row.fail_lvl
        );

  const fakeChartData = {
    January: { valueA: 30, valueB: 20 },
    February: { valueA: 20, valueB: 25 },
    March: { valueA: 25, valueB: 30 },
    April: { valueA: 35, valueB: 20 },
    May: { valueA: 40, valueB: 30 },
    June: { valueA: 30, valueB: 25 },
    July: { valueA: 25, valueB: 35 },
    August: { valueA: 20, valueB: 30 },
    September: { valueA: 30, valueB: 20 },
    October: { valueA: 35, valueB: 25 },
    November: { valueA: 40, valueB: 30 },
    December: { valueA: 30, valueB: 25 },
  };

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      <div className="min-w-[400px] flex items-center justify-center">
        <BoardTitleSection
          title={`故障通報分級`}
          content={
            <div className="flex flex-col mx-4">
              {inventory_overview.map((CardDataByLevel, index) => (
                <InventoryTypeCard
                  key={index}
                  CardDataByLevel={CardDataByLevel}
                  isActive={activeCardIndex === index}
                  onToggle={() => {
                    setActiveCardIndex(index);
                    setSelectFactory(CardDataByLevel.dept);
                  }}
                />
              ))}
            </div>
          }
        />
      </div>
      <div className="min-w-[400px] flex items-center justify-center">
        <BoardTitleSection
          title={`${selectFactory}級`}
          content={
            <div className="">
              <div className="w-full h-48">
                <GroupBarChart data={fakeChartData} />
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100 rounded-lg">
                    <TableHead>月份</TableHead>
                    <TableHead>庫存餘額</TableHead>
                    <TableHead>領用金額</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventory_overview.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.month}</TableCell>
                      <TableCell
                        onClick={() => setSelectedValue(item.sum_invbal_mount)}
                      >
                        {item.sum_invbal_mount}
                      </TableCell>
                      <TableCell
                        onClick={() => setSelectedValue(item.sum_issue_mount)}
                      >
                        {item.sum_issue_mount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          }
        />
      </div>
      <div className="grow flex items-center justify-center">
        <BoardTitleSection
          title={` ${selectedValue}`}
          content={
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100 rounded-lg">
                    {headers.map((header, index) => (
                      <TableHead key={index}>{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>{renderTableRows(filteredFailList)}</TableBody>
              </Table>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ClientPage;