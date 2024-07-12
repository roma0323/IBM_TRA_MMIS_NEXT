import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "flex";
  className: any;
  headerFlexClassName: any;
  text: string;
}

export const Table = ({ property1, className, headerFlexClassName, text = "1,125,578,978" }: Props): JSX.Element => {
  return (
    <div className={`flex items-center gap-2.5 p-[5px] relative bg-white ${className}`}>
      <div
        className={`flex items-center gap-[5px] px-0 py-[5px] relative flex-1 grow mt-[-7.50px] mb-[-7.50px] rounded-[10px] overflow-hidden ${headerFlexClassName}`}
      >
        <div className="relative w-fit mt-[-1.00px] font-label-label-medium-dem font-[number:var(--label-label-medium-dem-font-weight)] text-[#646464] text-[length:var(--label-label-medium-dem-font-size)] tracking-[var(--label-label-medium-dem-letter-spacing)] leading-[var(--label-label-medium-dem-line-height)] [font-style:var(--label-label-medium-dem-font-style)]">
          {text}
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  property1: PropTypes.oneOf(["flex"]),
  text: PropTypes.string,
};