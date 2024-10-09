import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type CarTypeTableProps = {
  carTypeChildrenList: {
    subcartype: string;
    eq3: string;
    RST130: string;
    RST210: string;
    RST080: string;
    RST100: string;
    RST090: string;
    RST190: string;
    RST170: string;
    RST250: string;
    RST140: string;
    RST120: string;
  }[];
};

const CarSetTable: React.FC<CarTypeTableProps> = ({ carTypeChildrenList }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>子車型</TableHead>
          <TableHead>型式</TableHead>
          <TableHead>總重(頓)</TableHead>
          <TableHead>軸重(頓)</TableHead>
          <TableHead>長</TableHead>
          <TableHead>寬</TableHead>
          <TableHead>高</TableHead>
          <TableHead>最高車速(KPH)</TableHead>
          <TableHead>動力連續定額(HP)</TableHead>
          <TableHead>最大牽引力(kg)</TableHead>
          <TableHead>齒輪比</TableHead>
          <TableHead>換算車數</TableHead>
          <TableHead>座位</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {carTypeChildrenList.map((item, itemIndex) => (
          <TableRow key={itemIndex}>
            <TableCell>{item.subcartype}</TableCell>
            <TableCell>{item.eq3}</TableCell>
            <TableCell>{item.RST130}</TableCell>
            <TableCell>{item.RST210}</TableCell>
            <TableCell>{item.RST080}</TableCell>
            <TableCell>{item.RST100}</TableCell>
            <TableCell>{item.RST090}</TableCell>
            <TableCell>{item.RST190}</TableCell>
            <TableCell>???</TableCell>
            <TableCell>{item.RST170}</TableCell>
            <TableCell>{item.RST250}</TableCell>
            <TableCell>{item.RST140}</TableCell>
            <TableCell>{item.RST120}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarSetTable;