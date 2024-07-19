import PropTypes from "prop-types";
import React from "react";
import { LabelChip } from "@/components/locomotive_depot/LabelChip";

interface Props {
  className?: string;
  text?: string;
  train_amount: number;
  onClick: (text: string) => void; // Add onClick prop
}

export const LabelChipAndNumber = ({ className, text = "ALL", train_amount, onClick }: Props): JSX.Element => {
  return (
    <div className="w-full px-6 flex items-center justify-between relative " onClick={() => onClick(text)}>
      <LabelChip text={text} className={`bg-[#fffffff2] ${className}`} property1="default" />
      <div>{train_amount}</div>
    </div>
  );
};

LabelChipAndNumber.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  train_amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired, // Define prop type for onClick
};

export default LabelChipAndNumber;