import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "default";
  className?: string;
  text: string;
}

export const LabelChip = ({ property1, className = "", text = "ALL" }: Props): JSX.Element => {
  let style_template = "";

  switch (text) {
    case "通勤列車":
      style_template = "text-[#FFBB54]";
      break;
    case "城際列車":
      style_template = "text-[#D9730D]";
      break;
    case "電力列車":
      style_template = "text-[#8F65AF]";
      break;
    case "柴液機車":
      style_template = "text-[#28BF02]";
      break;
    case "客車":
      style_template = "text-[#00BBC7]";
      break;
    case "柴油客車":
      style_template = "text-[#538164]";
      break;
    case "貨車":
      style_template = "text-[#C3554E]";
      break;
    default:
      style_template = "text-[#397EFF]";
  }

  return (
    <div
      className={` items-center justify-center  p-1 relative bg-[#fffffff2] ${style_template} rounded-[5px] ${className}`}>
      {text}
    </div>
  );
};

LabelChip.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  text: PropTypes.string.isRequired,
};

export default LabelChip;