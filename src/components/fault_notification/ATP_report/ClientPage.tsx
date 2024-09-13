"use client";

import React, { useState } from "react";
import BoardTitleSection from "@/components/BoardTitleSection";
import PieChart from "@/components/fault_notification/annual_report/PieChart";
import { DataCard } from "@/components/train_deployment/DataCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ClientPage: React.FC = () => {
  const [selectMonth, setSelectMonth] = useState<string>("A");
  const [selectedCellValue, setSelectedCellValue] = useState<string | null>(
    null
  );

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const handleRowClick = (value: string) => {
    setSelectedCellValue(value);
  };

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 p-4 h-full">
      <div className="relative row-span-1 col-span-1">
        <BoardTitleSection
          title="總覽"
          content={
            <div className="size-full flex justify-around items-center">
              <DataCard text="100" text1="故障通報" />
              <DataCard text="100" text1="行車責任事故" />
            </div>
          }
        />
      </div>
      <div className="row-span-3 col-span-1 relative">
        <BoardTitleSection
          title="各月份故障"
          content={
            <div className="mx-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>月份</TableHead>
                    <TableHead>故障數</TableHead>
                    <TableHead className="text-right">日均故障數</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow onClick={() => handleRowClick("01")}>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">0.01</TableCell>
                  </TableRow>
                  <TableRow onClick={() => handleRowClick("02")}>
                    <TableCell className="font-medium">02</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell className="text-right">0.01</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {selectedCellValue && (
                <div className="mt-4">Selected Month: {selectedCellValue}</div>
              )}
            </div>
          }
        />
      </div>

      <div className="row-span-2 col-span-3 grid grid-cols-3 gap-4 relative">
        <BoardTitleSection
          title="故障車型分析"
          content={
            <div className="size-full">
              <PieChart data={data} />
            </div>
          }
        />
        <BoardTitleSection
          title="故障要因分析"
          content={
            <div className="size-full">
              <PieChart data={data} />
            </div>
          }
        />
        <BoardTitleSection
          title="故障設備分析"
          content={
            <div className=" size-full">
              {" "}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>月份</TableHead>
                    <TableHead>故障數</TableHead>
                    <TableHead className="text-right">日均故障數</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow onClick={() => handleRowClick("01")}>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">0.01</TableCell>
                  </TableRow>
                  <TableRow onClick={() => handleRowClick("02")}>
                    <TableCell className="font-medium">02</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell className="text-right">0.01</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          }
        />
      </div>

      <div className="row-span-2 col-span-3 relative">
        <BoardTitleSection
          title="各月份故障清單"
          content={
            <div className=" size-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>日期</TableHead>
                    <TableHead>車次</TableHead>
                    <TableHead>車型</TableHead>
                    <TableHead>車號</TableHead>
                    <TableHead>所屬段</TableHead>
                    <TableHead className="text-right">故障原因</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow onClick={() => handleRowClick("01")}>
                    <TableCell className="font-medium">2024-09-03</TableCell>
                    <TableCell>2008</TableCell>
                    <TableCell>EMU900</TableCell>
                    <TableCell>ED9152</TableCell>
                    <TableCell>七堵機務段</TableCell>
                    <TableCell className="text-right">
                      機車TED1007車上ATP異常,ATP一直跳地上感應子故障並緊急緊軔數次
                    </TableCell>
                  </TableRow>
                  <TableRow onClick={() => handleRowClick("02")}>
                    <TableCell className="font-medium">02</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>{" "}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ClientPage;
