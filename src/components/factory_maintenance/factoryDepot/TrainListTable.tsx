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
};

const TrainListTable: React.FC<TrainData> = ({ TrainDataInArray }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>車種</TableHead>
          <TableHead>廠別</TableHead>
          <TableHead>車型</TableHead>
          <TableHead>車組/車號</TableHead>
          <TableHead>檢修級別</TableHead>
          <TableHead>進場日期</TableHead>
          <TableHead>開工日期</TableHead>
          <TableHead>預計完工日期</TableHead>
          <TableHead>實際完工日期</TableHead>
          <TableHead>出廠日期</TableHead>
          <TableHead>在場天數</TableHead>
          <TableHead>施工天數</TableHead>
          <TableHead>提前/預期天數</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TrainDataInArray.length > 0 ? (
          TrainDataInArray.map((item, itemIndex) => (
            <TableRow className="" key={itemIndex}>
              <TableCell>{item.carcatalog}</TableCell>
              <TableCell>{item.deptdesc}</TableCell>
              <TableCell>{item.cartype}</TableCell>
              <TableCell>{item.assetnum}</TableCell>
              <TableCell>{item.worktype}</TableCell>
              <TableCell>{item.facindate}</TableCell>
              <TableCell>{item.actstart}</TableCell>
              <TableCell>{item.schedfinish}</TableCell>
              <TableCell>{item.actfinish}</TableCell>
              <TableCell>{item.facoutdate}</TableCell>
              <TableCell>{item.infacdays}</TableCell>
              <TableCell>{item.inwodays}</TableCell>
              <TableCell>{item.behindordelaydays}</TableCell>
              {/* <TableCell>{Number(item.availability.toFixed(2))}</TableCell> */}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={10} className="text-left">
              無資料
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TrainListTable;
