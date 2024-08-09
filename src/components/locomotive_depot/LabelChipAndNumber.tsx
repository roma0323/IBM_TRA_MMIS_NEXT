import PropTypes from "prop-types";
import React from "react";
import { LabelChip } from "@/components/locomotive_depot/LabelChip";

interface Props {
  text?: string;
  onClick: (text: string) => void; // Add onClick prop
}

export const LabelChipAndNumber = ({  text = "ALL", onClick }: Props): JSX.Element => {
  return (
    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200" onClick={() => onClick(text)}>
      <LabelChip text={text}  property1="default" />
    </div>
  );
};

LabelChipAndNumber.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired, // Define prop type for onClick
};

export default LabelChipAndNumber;