import React from "react";
import { LabelChip } from "@/components/locomotive_depot/LabelChip";

interface Props {
  text?: string;
  onClick: (text: string) => void; // Add onClick prop
}

export const LabelChipAndNumber = ({
  text = "ALL",
  onClick,
}: Props): JSX.Element => {
  return (
    <div
      className=" py-1 ml-6 flex   cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:bg-slate-100"
      onClick={() => onClick(text)}
    >
      <LabelChip text={text} />
    </div>
  );
};

export default LabelChipAndNumber;
