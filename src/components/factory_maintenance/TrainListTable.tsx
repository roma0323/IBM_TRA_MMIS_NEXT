import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { factorySumStatus } from "@/types/type";

type TrainData = {
  TrainDataInArray: factorySumStatus[];
  selectFactory: string;
};

const TrainListTable: React.FC<TrainData> = ({
  TrainDataInArray,
  selectFactory,
}) => {
  const totalChildCarCnt = TrainDataInArray.reduce((sum, item) => {
    if ((selectFactory === "全部機廠" || item.deptdesc.includes(selectFactory)) && item.wojp3) {
      return sum + item.childcarcnt;
    }
    return sum;
  }, 0);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>車號</TableHead>
            <TableHead>進場收容單號</TableHead>
            <TableHead>檢修級別</TableHead>
            <TableHead>工作單號</TableHead>
            <TableHead>交段日期</TableHead>
            <TableHead>車輛數</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TrainDataInArray.length > 0 ? (
            TrainDataInArray.map((item: factorySumStatus, index: number) =>
              ((selectFactory === "全部機廠" || item.deptdesc.includes(selectFactory)) && item.wojp3) ? (
                <TableRow className="" key={index}>
                  <TableCell>{item.assetnum}</TableCell>
                  <TableCell>{item.imnum}</TableCell>
                  <TableCell>{item.worktype}</TableCell>
                  <TableCell>{item.wojp3}</TableCell>
                  <TableCell>{item.facoutdate}</TableCell>
                  <TableCell>{item.childcarcnt}</TableCell>
                </TableRow>
              ) : null
            )
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-left">
                無資料
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="p-2">修理車輛數: {totalChildCarCnt}</div>
    </>
  );
};

export default TrainListTable;
