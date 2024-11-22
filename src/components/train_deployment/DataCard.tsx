import React from "react";
import { getCarColor } from "@/lib/getCarColor"; // Import the getCarColor function

interface Props {
  text: string;
  text1: string;
}

export const DataCard = ({ text, text1 }: Props): JSX.Element => {
  const color = getCarColor(text1); // Get color based on the text

  return (
    <div className="flex  relative flex-col items-center justify-center p-2">
      <div className="text-xl" >{text}</div>
      <div className="text-sm" style={{ color: color }}>{text1}</div>
    </div>
  );
};