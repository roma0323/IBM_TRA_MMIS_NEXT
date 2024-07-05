import PropTypes from "prop-types";
import React from "react";

interface Props {
  value: "text";
  aligment: "left";
  className: any;
}

export const InfoDisplayCard = ({ value, aligment, className }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center justify-center gap-2.5 p-[5px] relative ${className}`}>
      <div className="inline-flex flex-col items-end justify-center gap-[5px] p-2.5 relative flex-[0_0_auto] rounded-[5px] overflow-hidden">
        <div className="relative w-fit mt-[-1.00px] font-label-label-medium-dem font-[number:var(--label-label-medium-dem-font-weight)] text-[#646464] text-[length:var(--label-label-medium-dem-font-size)] tracking-[var(--label-label-medium-dem-letter-spacing)] leading-[var(--label-label-medium-dem-line-height)] [font-style:var(--label-label-medium-dem-font-style)]">
          上次更新時間
        </div>
        <p className="relative w-fit font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#646464] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
          113 / 4 / 1&nbsp;&nbsp;(一) 12:20
        </p>
      </div>
    </div>
  );
};

InfoDisplayCard.propTypes = {
  value: PropTypes.oneOf(["text"]),
  aligment: PropTypes.oneOf(["left"]),
};