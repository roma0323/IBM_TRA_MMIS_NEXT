import PropTypes from "prop-types";
import React from "react";
import { LabelChip } from "./LabelChip";

interface Props {
  height: "normal";
  cellType: "body" | "header" | "body-label";
  headerNameWrapperClassName: any;
  text: string;
  className: any;
  text1: string;
  labelChipText: string;
  labelChipSeriousClassName: any;
}

export const Header = ({
  height,
  cellType,
  headerNameWrapperClassName,
  text = "車種",
  className,
  text1 = "35FPK10400",
  labelChipText = "城際列車",
  labelChipSeriousClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[100px] flex gap-2.5 p-[5px] relative ${cellType === "header" ? "items-end" : "items-start"} ${
        cellType === "header" ? "h-10" : ""
      } ${cellType === "header" ? "justify-center" : ""} ${
        cellType === "header" ? "bg-[#3034380d]" : "bg-white"
      } ${className}`}
    >
      <div
        className={`flex items-center grow gap-[5px] flex-1 px-0 py-[5px] relative ${
          cellType === "body" ? "overflow-hidden" : ""
        } ${cellType === "body" ? "rounded-[10px]" : ""} ${
          cellType === "header" ? "justify-center" : ""
        } ${headerNameWrapperClassName}`}
      >
        {["body", "header"].includes(cellType) && (
          <div
            className={`mt-[-1.00px] flex-1 text-[#646464] relative ${
              cellType === "body" ? "font-label-label-medium-dem" : "font-label-label-medium-semi"
            } ${
              cellType === "body"
                ? "tracking-[var(--label-label-medium-dem-letter-spacing)]"
                : "tracking-[var(--label-label-medium-semi-letter-spacing)]"
            } ${
              cellType === "body"
                ? "text-[length:var(--label-label-medium-dem-font-size)]"
                : "text-[length:var(--label-label-medium-semi-font-size)]"
            } ${
              cellType === "body"
                ? "[font-style:var(--label-label-medium-dem-font-style)]"
                : "[font-style:var(--label-label-medium-semi-font-style)]"
            } ${
              cellType === "body"
                ? "font-[number:var(--label-label-medium-dem-font-weight)]"
                : "font-[number:var(--label-label-medium-semi-font-weight)]"
            } ${
              cellType === "body"
                ? "leading-[var(--label-label-medium-dem-line-height)]"
                : "leading-[var(--label-label-medium-semi-line-height)]"
            }`}
          >
            {cellType === "header" && <>{text}</>}

            {cellType === "body" && <>{text1}</>}
          </div>
        )}

        {cellType === "body-label" && (
          <LabelChip
            className="!flex-[0_0_auto]"
            property1="default"
            seriousClassName={labelChipSeriousClassName}
            text={labelChipText}
          />
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  height: PropTypes.oneOf(["normal"]),
  cellType: PropTypes.oneOf(["body", "header", "body-label"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  labelChipText: PropTypes.string,
};