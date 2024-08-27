// Refactored LabelChip component to use getCarColor utility function.
import React from "react";
import { getCarColor } from "@/lib/getCarColor"; // Import getCarColor function

interface Props {
  text: string;
}

export const LabelChip = ({ text = "ALL" }: Props): JSX.Element => {
  const color = getCarColor(text);

  return (
    <div
      className="items-center justify-center p-1 relative rounded-[5px]"
      style={{ color }} 
    >
      {text}
    </div>
  );
};

export default LabelChip;