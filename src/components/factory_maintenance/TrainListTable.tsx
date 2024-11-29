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
          <TableHead>車號</TableHead>
          <TableHead>進場收容單號</TableHead>
          <TableHead>檢修級別</TableHead>
          <TableHead>工作單號</TableHead>
          <TableHead>交段日期</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TrainDataInArray.length > 0 ? (
          TrainDataInArray.map((item, itemIndex) => (
            <TableRow className="" key={itemIndex}>
              <TableCell>{item.assetnum}</TableCell>
              <TableCell>{item.imnum}</TableCell>
              <TableCell>{item.worktype}</TableCell>
              <TableCell>{item.wojp3}</TableCell>
              <TableCell>{item.facoutdate}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={1} className="text-left">
              無資料
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TrainListTable;
