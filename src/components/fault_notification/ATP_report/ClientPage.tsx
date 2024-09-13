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

type ClientPageProps ={
  testData: Array<{
    year: string;
    month: string;
    failcnt: string;
    dailyfailcnt: string;
  }>;
  cartypeData: Array<{
    name: string;
    value: number;
  }>;
  refactored故障要因分析: Array<{
    name: string;
    value: number;
  }>;
  listData: Array<{
    enterdate: string;
    trainno: string;
    assetnum: string;
    assetgroup: string;
    dept: string;
    description: string;
  }>;
}

const ClientPage: React.FC<ClientPageProps> = ({
  testData,
  cartypeData,
  refactored故障要因分析,
  listData,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [filteredListData, setFilteredListData] = useState(listData);

  const totalFailCnt = testData.reduce(
    (sum, item) => sum + parseInt(item.failcnt, 10),
    0
  );
  const averageFailCnt = totalFailCnt / testData.length / 30.5;

  const handleRowClick = (month: string) => {
    setSelectedMonth(month);
    const filteredData = listData.filter(item => item.enterdate.includes(`-${month}-`));
    setFilteredListData(filteredData);
  };

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 p-4 h-full">
      <div className="relative row-span-1 col-span-1">
        <BoardTitleSection
          title="年度總覽"
          content={
            <div className="size-full flex justify-around items-center">
              <DataCard
                text={totalFailCnt.toString()}
                text1="年度故障次數"
              />
              <DataCard
                text={averageFailCnt.toFixed(2).toString()}
                text1="年度日均故障數"
              />
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
                  {testData.map((item) => (
                    <TableRow
                      key={item.month}
                      onClick={() => handleRowClick(item.month)}
                    >
                      <TableCell className="font-medium">{item.month}</TableCell>
                      <TableCell>{item.failcnt}</TableCell>
                      <TableCell className="text-right">
                        {parseFloat(item.dailyfailcnt).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {selectedMonth && (
                <div className="mt-4">Selected Month: {selectedMonth}</div>
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
              <PieChart data={cartypeData} />
            </div>
          }
        />
        <BoardTitleSection
          title="故障要因分析"
          content={
            <div className="size-full">
              <PieChart data={refactored故障要因分析} />
            </div>
          }
        />
        <BoardTitleSection
          title="故障設備分析"
          content={
            <div className=" size-full">
              
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
                  {filteredListData.map((item) => (
                    <TableRow key={item.enterdate} onClick={() => handleRowClick(item.enterdate)}>
                      <TableCell className="font-medium">{item.enterdate}</TableCell>
                      <TableCell>{item.trainno}</TableCell>
                      <TableCell>{item.assetgroup}</TableCell>
                      <TableCell>{item.assetnum}</TableCell>
                      <TableCell>{item.dept}</TableCell>
                      <TableCell className="text-right">{item.description}</TableCell>
                    </TableRow>
                  ))}
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