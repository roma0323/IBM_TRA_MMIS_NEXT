import PropTypes from "prop-types";
import React from "react";

interface Props {
  cellType: "body-status";
  className: any;
  statusChipWrapperClassName: any;
  statusChipClassName: any;
  ellipseClassName: any;
  text: string;
}

export const CellTypeBodyWrapper = ({
  cellType,
  className,
  statusChipWrapperClassName,
  statusChipClassName,
  ellipseClassName,
  text = "已開工",
}: Props): JSX.Element => {
  return (
    <div className={`flex items-center gap-2.5 p-[5px] relative bg-white ${className}`}>
      <div
        className={`flex items-center gap-[5px] px-0 py-[5px] relative flex-1 grow rounded-[10px] overflow-hidden ${statusChipWrapperClassName}`}
      >
        <div
          className={`inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] bg-[#f5f5f5f2] rounded-[5px] overflow-hidden ${statusChipClassName}`}
        >
          <div className={`relative w-2 h-2 bg-[#089ada] rounded ${ellipseClassName}`} />
          <div className="relative w-fit mt-[-1.00px] font-title-title-small-semi font-[number:var(--title-title-small-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

CellTypeBodyWrapper.propTypes = {
  cellType: PropTypes.oneOf(["body-status"]),
  text: PropTypes.string,
};