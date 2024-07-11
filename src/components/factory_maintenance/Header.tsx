import PropTypes from "prop-types";
import React from "react";

interface Props {
  height: "normal";
  cellType: "body" | "header" | "body-label";
  className: any;
  headerNameWrapperClassName: any;
  text: string;
  text1: string;
}

export const Header = ({
  height,
  cellType,
  className,
  headerNameWrapperClassName,
  text = "車種",
  text1 = "35FPK10400",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex gap-2.5 p-[5px] relative ${cellType === "header" ? "items-end" : "items-center"} ${
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
        <div
          className={`relative ${cellType === "body-label" ? "inline-flex" : ""} ${
            ["body", "header"].includes(cellType) ? "mt-[-1.00px]" : ""
          } ${
            cellType === "header"
              ? "[font-style:var(--label-label-medium-semi-font-style)]"
              : cellType === "body"
              ? "[font-style:var(--label-label-medium-dem-font-style)]"
              : ""
          } ${cellType === "body-label" ? "items-center" : ""} ${
            cellType === "body-label" ? "flex-[0_0_auto]" : "flex-1"
          } ${["body", "header"].includes(cellType) ? "text-[#646464]" : ""} ${
            cellType === "body-label" ? "p-1" : ""
          } ${
            cellType === "header"
              ? "font-label-label-medium-semi"
              : cellType === "body"
              ? "font-label-label-medium-dem"
              : ""
          } ${
            cellType === "header"
              ? "leading-[var(--label-label-medium-semi-line-height)]"
              : cellType === "body"
              ? "leading-[var(--label-label-medium-dem-line-height)]"
              : ""
          } ${
            cellType === "header"
              ? "font-[number:var(--label-label-medium-semi-font-weight)]"
              : cellType === "body"
              ? "font-[number:var(--label-label-medium-dem-font-weight)]"
              : ""
          } ${cellType === "body-label" ? "rounded-[5px]" : ""} ${
            cellType === "header"
              ? "text-[length:var(--label-label-medium-semi-font-size)]"
              : cellType === "body"
              ? "text-[length:var(--label-label-medium-dem-font-size)]"
              : ""
          } ${cellType === "body-label" ? "gap-[5px]" : ""} ${cellType === "body-label" ? "bg-[#fffffff2]" : ""} ${
            cellType === "header"
              ? "tracking-[var(--label-label-medium-semi-letter-spacing)]"
              : cellType === "body"
              ? "tracking-[var(--label-label-medium-dem-letter-spacing)]"
              : ""
          } ${cellType === "body-label" ? "overflow-hidden" : ""} ${cellType === "body-label" ? "justify-center" : ""}`}
        >
          {cellType === "header" && <>{text}</>}

          {cellType === "body-label" && (
            <div className="relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#d9730d] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
              通勤列車
            </div>
          )}

          {cellType === "body" && <>{text1}</>}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  height: PropTypes.oneOf(["normal"]),
  cellType: PropTypes.oneOf(["body", "header", "body-label"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};