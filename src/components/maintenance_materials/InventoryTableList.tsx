import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type InventoryTableListProps = {
  data: any[];
};
const headers = [
    "廠段",
    "料號",
    "材料名稱",
    "料性",
    "單價",
    "數量",
    "材料單位",
    "金額",
    "金額占比",
  ];
const InventoryTableList: React.FC<InventoryTableListProps> = ({ data }) => {
  return (
    <div className="p-6">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-100 rounded-lg">
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((inventory_balance_by_row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {inventory_balance_by_row.dept}
              </TableCell>
              <TableCell>{inventory_balance_by_row.itemnum}</TableCell>
              <TableCell>{inventory_balance_by_row.itemdesc}</TableCell>
              <TableCell>{inventory_balance_by_row.conditioncode}</TableCell>
              <TableCell>{inventory_balance_by_row.unitprice}</TableCell>
              <TableCell>{inventory_balance_by_row.curbal}</TableCell>
              <TableCell>{inventory_balance_by_row.unit}</TableCell>
              <TableCell>{inventory_balance_by_row.sum_invbal_mount}</TableCell>
              <TableCell>{inventory_balance_by_row.sum_invbal_mount}</TableCell>
              {/* should be percentage */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTableList;