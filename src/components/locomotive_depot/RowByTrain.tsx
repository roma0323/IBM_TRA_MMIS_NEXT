
import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import PropTypes from "prop-types";
import React from "react";

interface Props {
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
}

export const RowByTrain = ({
  className,
  dept,
  deptdesc,
  cartype,
  carcatalog,
  belongto,
  borrowin,
  borrowout,
  current_cnt,
  current_use,
  current_temp,
  current_ready,
  maintain_w,
  maintain_sec,
  maintain_fac,
  oth_waitrep,
  oth_return,
  oth_stop,
  availability,
}: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-18 gap-4 w-full  border-b-2 border-gray-200  text-left">
      {/* <div className="col-span- p-2 flex items-end">{deptdesc}</div> */}
      <div className="col-span-2 p-2 flex items-end"><LabelChip text={carcatalog} className={`bg-[#fffffff2] ${className}`} property1="default" /></div>
      <div className="col-span-2 p-2 flex items-end">{cartype}</div>
      <div className="p-2 flex items-end">{belongto}</div>
      <div className="p-2 flex items-end">{borrowin}</div>
      <div className="p-2 flex items-end">{borrowout}</div>
      <div className="p-2 flex items-end">{current_cnt}</div>
      <div className="p-2 flex items-end">{current_use}</div>
      <div className="p-2 flex items-end">{current_temp}</div>
      <div className="p-2 flex items-end">{current_ready}</div>
      <div className="p-2 flex items-end">{maintain_w}</div>
      <div className="p-2 flex items-end">{maintain_sec}</div>
      <div className="p-2 flex items-end">{maintain_fac}</div>
      <div className="p-2 flex items-end">{oth_waitrep}</div>
      <div className="p-2 flex items-end">{oth_return}</div>
      <div className="p-2 flex items-end">{oth_stop}</div>
      <div className="p-2 flex items-end">{availability}</div>
    </div>
  );
};

RowByTrain.propTypes = {
  className: PropTypes.string,
  dept: PropTypes.string.isRequired,
  deptdesc: PropTypes.string.isRequired,
  cartype: PropTypes.string.isRequired,
  carcatalog: PropTypes.string.isRequired,
  belongto: PropTypes.number.isRequired,
  borrowin: PropTypes.number.isRequired,
  borrowout: PropTypes.number.isRequired,
  current_cnt: PropTypes.number.isRequired,
  current_use: PropTypes.number.isRequired,
  current_temp: PropTypes.number.isRequired,
  current_ready: PropTypes.number.isRequired,
  maintain_w: PropTypes.number.isRequired,
  maintain_sec: PropTypes.number.isRequired,
  maintain_fac: PropTypes.number.isRequired,
  oth_waitrep: PropTypes.number.isRequired,
  oth_return: PropTypes.number.isRequired,
  oth_stop: PropTypes.number.isRequired,
  availability: PropTypes.number.isRequired,
};

export default RowByTrain;
 

      