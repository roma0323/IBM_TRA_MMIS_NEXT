import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type MaintenanceTableProps = {
  maintenanceList: {
    worktype: string;
    description: string;
    interval: string;
    frequency: string;
    frequnit: string;
  }[];
};

const MaintenanceTable: React.FC<MaintenanceTableProps> = ({ maintenanceList }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>檢修級別</TableHead>
          <TableHead>說明</TableHead>
          <TableHead>間隔</TableHead>
          <TableHead>週期</TableHead>
          <TableHead>週期單位</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {maintenanceList.map((item, itemIndex) => (
          <TableRow key={itemIndex}>
            <TableCell>{item.worktype}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.interval}</TableCell>
            <TableCell>{item.frequency}</TableCell>
            <TableCell>{item.frequnit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MaintenanceTable;