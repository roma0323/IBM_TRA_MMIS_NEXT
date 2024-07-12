import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "one";
  className: any;
  divClassName: any;
  text: string;
}

export const StatusChip = ({ property1, className, divClassName, text = "ALL" }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative bg-[#fffffff2] rounded-2xl overflow-hidden border border-solid border-[#397eff] ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] font-label-text font-[number:var(--label-text-font-weight)] text-[#397eff] text-[length:var(--label-text-font-size)] tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

StatusChip.propTypes = {
  property1: PropTypes.oneOf(["one"]),
  text: PropTypes.string,
};