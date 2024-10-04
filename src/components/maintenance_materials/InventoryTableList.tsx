import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InventoryListBalance, InventoryListIssue } from "@/types/type";

type InventoryTableListProps = {
  data: (InventoryListBalance | InventoryListIssue)[];
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
  // Type guard to check if item is InventoryListBalance
  const isInventoryListBalance = (
    item: InventoryListBalance | InventoryListIssue
  ): item is InventoryListBalance => {
    return (item as InventoryListBalance).curbal !== undefined;
  };

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
              <TableCell>
                {isInventoryListBalance(inventory_balance_by_row)
                  ? inventory_balance_by_row.curbal
                  : inventory_balance_by_row.quantity}
              </TableCell>
              <TableCell>{inventory_balance_by_row.unit}</TableCell>
              <TableCell>
                {isInventoryListBalance(inventory_balance_by_row)
                  ? inventory_balance_by_row.sum_invbal_mount
                  : inventory_balance_by_row.sum_issue_mount}
              </TableCell>
              <TableCell>??%</TableCell> {/* should be percentage */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTableList;