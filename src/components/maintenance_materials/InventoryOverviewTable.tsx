import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GroupBarChart from "@/components/fault_notification/annual_report/GroupBarChart";

type InventoryOverviewTableProps = {
  chartData: { [key: string]: { 庫存餘額: number; 領用金額: number } };
  inventoryOverview: any[];
  handleCellClick: (value: string, month: string) => void;
};

const InventoryOverviewTable: React.FC<InventoryOverviewTableProps> = ({
  chartData,
  inventoryOverview,
  handleCellClick,
}) => {
  return (
    <div className="">
      <div className="w-full h-40">
        <GroupBarChart data={chartData} />
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
          {inventoryOverview.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.month}</TableCell>
              <TableCell onClick={() => handleCellClick("inv", item.month)}>
                {Math.round(Number(item.sum_invbal_mount))}
              </TableCell>
              <TableCell onClick={() => handleCellClick("issue", item.month)}>
                {Math.round(Number(item.sum_issue_mount))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryOverviewTable;