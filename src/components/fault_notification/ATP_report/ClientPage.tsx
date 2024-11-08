'use client'
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

import { getATPFailYear, getATPFailListByYearAndCartype, getATPFailListByYearAndFactor, getATPFailListByYearAndElement, getATPFailListAndCartype } from "@/api/api";
import { ATPFailListByMonth, ATPReasonByCarType, RefactoredCarTypeForPieChart, FaultListDetail, FaultEquipmentAnalysis } from "@/types/type";

import BoardTitleSection from "@/components/BoardTitleSection";
import PieChartGradient from "@/components/fault_notification/annual_report/PieChartGradient";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/fault_notification/ATP_report/UseRateAreaChart";
import Loading from "@/components/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type FetcherData = {
  lastYearOverviewNumber: ATPFailListByMonth[];
  overview_number: ATPFailListByMonth[];
  faultListByMonth: ATPReasonByCarType[];
  faultReasonAnalysis: ATPReasonByCarType[];
  faultListDetail: FaultListDetail[];
  faultEquipmentAnalysis: FaultEquipmentAnalysis[];
};

const ClientPage: React.FC = () => {
  const [filteredListData, setFilteredListData] = useState<FaultListDetail[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string | null>("各");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [isLoadingState, setIsLoadingState] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";

  const fetcher = async (): Promise<FetcherData> => {
    const [
      overview_number,
      lastYearOverviewNumber,
      faultListByMonth,
      faultReasonAnalysis,
      faultEquipmentAnalysis,
      faultListDetail
    ] = await Promise.all([
      getATPFailYear(date),
      getATPFailYear(new Date(new Date(date || new Date()).setFullYear(new Date(date || new Date()).getFullYear() - 1)).toISOString().slice(0, 10)),
      getATPFailListByYearAndCartype(date),
      getATPFailListByYearAndFactor(date),
      getATPFailListByYearAndElement(date),
      getATPFailListAndCartype(date)
    ]);

    return {
      overview_number,
      lastYearOverviewNumber,
      faultListByMonth,
      faultReasonAnalysis,
      faultEquipmentAnalysis,
      faultListDetail
    };
  };

  const { data, error } = useSWR(`ATP${date}`, fetcher, {
    onSuccess: () => setIsLoadingState(false),
    onError: () => setIsLoadingState(false),
  });

  if (isLoadingState) {
    return <Loading />;
  }

  if (error) {
    return <div>Failed to load</div>;
  }

  if (data) {
    const {
      overview_number,
      lastYearOverviewNumber,
      faultListByMonth,
      faultReasonAnalysis,
      faultEquipmentAnalysis,
      faultListDetail
    } = data;

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

    const refactoredCartype = refactorCartype(faultListByMonth);
    const refactoredfaultReasonAnalysis = refactorCartype(faultReasonAnalysis);

    const totalFailCnt = overview_number.reduce(
      (sum, item) => sum + parseInt(item.failcnt, 10),
      0
    );
    const averageFailCnt = totalFailCnt / overview_number.length / 30.5;

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
      ...overview_number.map((item) => item.month),
      ...lastYearOverviewNumber.map((item) => item.month),
    ]);

    const combinedData = Array.from(allMonths).map((month) => {
      const thisYearData = overview_number.find((item) => item.month === month);
      const lastYearData = lastYearOverviewNumber.find((item) => item.month === month);

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
                    {overview_number.map((item) => (
                      <TableRow
                        key={item.month}
                        onClick={() => handleRowClick(item.month)}
                        className="hover:bg-primary/30 cursor-pointer"
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
            title="當月故障數趨勢圖"
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
                <PieChartGradient data={refactoredCartype} />
              </div>
            }
          />
          <BoardTitleSection
            title="故障設備分析"
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
                          className={"cursor-pointer"}
                        >
                          <TableCell className="font-medium ">
                            &gt; {item.key}
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
            title={`${selectedMonth}月故障清單`}
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
                      <TableHead className="text-left">故障原因</TableHead>
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
                        <TableCell className="text-left">
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
  }

  return null;
};

export default ClientPage;