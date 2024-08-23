import React from "react";

interface Props {
  text: string;
}

export const LabelChip = ({ text = "ALL" }: Props): JSX.Element => {
  let style_template = "";

  switch (text) {
    case "城際列車":
      style_template = `text-[#538164]`;
      break;
    case "電力機車":
      style_template = `text-[#FFBB54]`;
      break;
    case "柴電機車":
      style_template = `text-[#D9730D]`;
      break;
    case "柴液機車":
      style_template = `text-[#C3554E]`;
      break;
    case "客車":
      style_template = `text-[#00BBC7]`;
      break;
    case "柴油客車":
      style_template = `text-[#9F8170]`;
      break;
    case "貨車":
      style_template = `text-[#8F65AF]`;
      break;
    case "通勤列車":
      style_template = `text-[#28BF02]`;
      break;
    default:
      style_template = "text-[#397EFF]";
  }

  return (
    <div
      className={` items-center justify-center  p-1 relative  ${style_template} rounded-[5px]`}
    >
      {text}
    </div>
  );
};

export default LabelChip;
