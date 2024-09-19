"use client";
import React, { useState } from "react";
import BoardTitleSection from "@/components/BoardTitleSection";
import PieChartGradient from "@/components/fault_notification/annual_report/PieChartGradient";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/fault_notification/ATP_report/UseRateAreaChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ClientPageProps = {
  lastYearDataForAreaChart: Array<{
    year: string;
    month: string;
    failcnt: string;
    dailyfailcnt: string;
  }>;
  thisYearDataForAreaChart: Array<{
    year: string;
    month: string;
    failcnt: string;
    dailyfailcnt: string;
  }>;
  cartypeData: Array<{
    name: string;
    value: number;
  }>;
  refactoredfaultReasonAnalysis: Array<{
    name: string;
    value: number;
  }>;
  faultListDetail: Array<{
    enterdate: string;
    trainno: string;
    assetnum: string;
    assetgroup: string;
    dept: string;
    description: string;
  }>;
  faultEquipmentAnalysis: Array<{
    key: string;
    cnt: number;
    percentage: number;
    event: Array<{
      key: string;
      cnt: number;
      percentage: number;
    }>;
  }>;
};

const ClientPage: React.FC<ClientPageProps> = ({
  lastYearDataForAreaChart,
  thisYearDataForAreaChart,
  cartypeData,
  refactoredfaultReasonAnalysis,
  faultListDetail,
  faultEquipmentAnalysis,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [filteredListData, setFilteredListData] = useState(faultListDetail);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const totalFailCnt = thisYearDataForAreaChart.reduce(
    (sum, item) => sum + parseInt(item.failcnt, 10),
    0
  );
  const averageFailCnt = totalFailCnt / thisYearDataForAreaChart.length / 30.5;

  const handleRowClick = (month: string) => {
    setSelectedMonth(month);
    const filteredData = faultListDetail.filter((item) =>
      item.enterdate.includes(`-${month}-`)
    );
    setFilteredListData(filteredData);
  };

  const handleExpandClick = (key: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };
 


  const allMonths = new Set([
    ...thisYearDataForAreaChart.map((item) => item.month),
    ...lastYearDataForAreaChart.map((item) => item.month),
  ]);

  const combinedData = Array.from(allMonths).map((month) => {
    const thisYearData = thisYearDataForAreaChart.find((item) => item.month === month);
    const lastYearData = lastYearDataForAreaChart.find((item) => item.month === month);

    return {
      month,
      thisyear_failcnt: thisYearData ? parseInt(thisYearData.failcnt, 10) : 0,
      lastyear_failcnt: lastYearData ? parseInt(lastYearData.failcnt, 10) : 0,
    };
  });

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 p-4 h-full">
      <div className="relative row-span-1 col-span-1">
        <BoardTitleSection
          title="年度總覽"
          content={
            <div className="size-full flex justify-around items-center">
              <DataCard text={totalFailCnt.toString()} text1="年度故障次數" />
              <DataCard
                text={averageFailCnt.toFixed(2).toString()}
                text1="年度日均故障數"
              />
            </div>
          }
        />
      </div>
      {/* TODO  1~12 month show  */}
      {/* TODO  add 日均故障件事折線圖 different years in same chart  */}

      <div className="row-span-3 col-span-1 relative">
        <BoardTitleSection
          title="各月份故障"
          content={
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>月份</TableHead>
                    <TableHead>故障數</TableHead>
                    <TableHead className="text-right">日均故障數</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {thisYearDataForAreaChart.map((item) => (
                    <TableRow
                      key={item.month}
                      onClick={() => handleRowClick(item.month)}
                    >
                      <TableCell className="font-medium">
                        {item.month}
                      </TableCell>
                      <TableCell>{item.failcnt}</TableCell>
                      <TableCell className="text-right">
                        {parseFloat(item.dailyfailcnt).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          }
        />
      </div>

      <div className="row-span-2 col-span-3 grid grid-cols-3 gap-4 relative">
        <BoardTitleSection
          title="故障件事折線圖"
          content={
            <div className="size-full py-6 pr-8  ">
              <UseRateAreaChart
                data={combinedData}
              />
            </div>
          }
        />
        <BoardTitleSection
          title="故障要因分析&故障車型分析"
          content={
            <div className="size-full">
              <PieChartGradient data={refactoredfaultReasonAnalysis} />
              <PieChartGradient data={cartypeData} />
            </div>
          }
        />
        <BoardTitleSection
          title="faultEquipmentAnalysis"
          content={
            <div className=" size-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>故障因子</TableHead>
                    <TableHead>值</TableHead>
                    <TableHead className="text-right">百分比</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {faultEquipmentAnalysis.map((item) => (
                    <React.Fragment key={item.key}>
                      <TableRow
                        onClick={() => handleExpandClick(item.key)}
                        className={
                          expandedRows.has(item.key) ? "bg-slate-100" : ""
                        }
                      >
                        <TableCell className="font-medium ">
                          {item.key}
                        </TableCell>
                        <TableCell>{item.cnt}</TableCell>
                        <TableCell className="text-right">
                          {item.percentage}
                        </TableCell>
                      </TableRow>
                      {expandedRows.has(item.key) &&
                        item.event.map((event_item) => (
                          <TableRow key={event_item.key}>
                            <TableCell className="text-center text-xs">
                              {event_item.key}
                            </TableCell>
                            <TableCell>{event_item.cnt}</TableCell>
                            <TableCell className="text-right">
                              {event_item.percentage}
                            </TableCell>
                          </TableRow>
                        ))}
                    </React.Fragment>
                  ))}
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
                  {filteredListData.map((item, itemIndex) => (
                    <TableRow key={itemIndex}>
                      <TableCell className="font-medium">
                        {item.enterdate}
                      </TableCell>
                      <TableCell>{item.trainno}</TableCell>
                      <TableCell>{item.assetgroup}</TableCell>
                      <TableCell>{item.assetnum}</TableCell>
                      <TableCell>{item.dept}</TableCell>
                      <TableCell className="text-right">
                        {item.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ClientPage;
