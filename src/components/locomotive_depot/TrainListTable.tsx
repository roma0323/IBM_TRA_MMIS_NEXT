import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loading2 from "@/components/Loading2";

type TrainDataInArrayProps = {
  TrainDataInArray: {
    className?: string;
    dept: string;
    deptdesc: string;
    cartype: string;
    carcatalog: string;
    belongto: number;
    borrowin: number;
    borrowout: number;
    current_cnt: number;
    current_use: number;
    current_temp: number;
    current_ready: number;
    maintain_w: number;
    maintain_sec: number;
    maintain_fac: number;
    oth_waitrep: number;
    oth_return: number;
    oth_stop: number;
    availability: number;
  }[];
  handleTrainClick: (dept: string, cartype: string, divData: string) => void;
  loading: boolean; // Add loading prop
};

const TrainListTable: React.FC<TrainDataInArrayProps> = ({
  TrainDataInArray,
  handleTrainClick,
  loading,
}) => {
  const CanClickClassName =
    " cursor-pointer hover:font-bold hover:underline  text-primary";

  const handleDivClick = (dept: string, cartype: string, divName: string) => {
    handleTrainClick(dept, cartype, divName);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>車種</TableHead>
          <TableHead>機務段</TableHead>
          <TableHead>型號</TableHead>
          <TableHead>配置</TableHead>
          <TableHead>借入</TableHead>
          <TableHead>借出</TableHead>
          <TableHead>現有</TableHead>
          <TableHead>定期</TableHead>
          <TableHead>臨時</TableHead>
          <TableHead>預備</TableHead>
          <TableHead>保養</TableHead>
          <TableHead>段修</TableHead>
          <TableHead>廠修</TableHead>
          <TableHead>待料 待修</TableHead>
          <TableHead>無火 回送</TableHead>
          <TableHead>停用</TableHead>
          <TableHead>可用率</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
            <div className="pl-5"><Loading2 /></div>
              
        ) : TrainDataInArray.length > 0 ? (
          TrainDataInArray.map((item, itemIndex) => (
            <TableRow className="" key={itemIndex}>
              <TableCell>{item.carcatalog}</TableCell>
              <TableCell>{item.deptdesc}</TableCell>
              <TableCell>{item.cartype}</TableCell>
              <TableCell>{item.belongto}</TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "borrowin")
                }
              >
                {item.borrowin}
              </TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "borrowout")
                }
              >
                {item.borrowout}
              </TableCell>
              <TableCell>{item.current_cnt}</TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "current_use")
                }
              >
                {item.current_use}
              </TableCell>
              <TableCell>{item.current_temp}</TableCell>
              <TableCell>{item.current_ready}</TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "maintain_w")
                }
              >
                {item.maintain_w}
              </TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "maintain_sec")
                }
              >
                {item.maintain_sec}
              </TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "maintain_fac")
                }
              >
                {item.maintain_fac}
              </TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "oth_waitrep")
                }
              >
                {item.oth_waitrep}
              </TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "oth_return")
                }
              >
                {item.oth_return}
              </TableCell>
              <TableCell
                className={CanClickClassName}
                onClick={() =>
                  handleDivClick(item.dept, item.cartype, "oth_stop")
                }
              >
                {item.oth_stop}
              </TableCell>
              <TableCell>
                {Number(item.availability*100).toFixed(2)}%
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={17} className="text-left">
              無資料
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TrainListTable;
