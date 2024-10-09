import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type CarStatusTableProps = {
  carChildren: {
    assetnum: string;
    url: string;
    statusdesc: string;
    testrundate: string;
    belongtodeptdesc: string;
    belongtofacdesc: string;
    startdate: string;
    stopdate: string;
    remark: string;
  }[];
};

const CarStatusTable: React.FC<CarStatusTableProps> = ({ carChildren }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>車組車號</TableHead>
          <TableHead>狀態</TableHead>
          <TableHead>試運日期</TableHead>
          <TableHead>配屬段</TableHead>
          <TableHead>配屬廠</TableHead>
          <TableHead>起始日期</TableHead>
          <TableHead>停用/報廢</TableHead>
          <TableHead>備註</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {carChildren.map((item, itemIndex) => (
          <TableRow key={itemIndex}>
            <TableCell>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {item.assetnum}
              </a>
            </TableCell>
            <TableCell>{item.statusdesc}</TableCell>
            <TableCell>{item.testrundate}</TableCell>
            <TableCell>{item.belongtodeptdesc}</TableCell>
            <TableCell>{item.belongtofacdesc}</TableCell>
            <TableCell>{item.startdate}</TableCell>
            <TableCell>{item.stopdate}</TableCell>
            <TableCell>{item.remark}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarStatusTable;