import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "default";
  className: any;
  seriousClassName: any;
  text: string;
}

export const LabelChip = ({ property1, className, seriousClassName, text = "ALL" }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[5px] p-1 relative bg-[#fffffff2] rounded-[5px] overflow-hidden ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#397eff] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)] ${seriousClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

LabelChip.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};