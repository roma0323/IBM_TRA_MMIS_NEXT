import PropTypes from "prop-types";
import React from "react";

interface Props {
  selection: "selected" | "unselected";
  text: string;
}

export const LabelChip = ({ selection, text = "臺北機務段" }: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid border-[#397eff] inline-flex items-center gap-[5px] px-3 py-1 overflow-hidden rounded-[20px] justify-center bg-[#fffffff2] relative `}
    >
      {selection === "selected" && <img className="relative w-3 h-3" alt="Check" src="check.png" />}

      <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[11px] text-[#4e4e4e] font-normal leading-[normal] relative">
        {selection === "selected" && <>七堵機務段</>}

        {selection === "unselected" && <>{text}</>}
      </div>
    </div>
  );
};

LabelChip.propTypes = {
  selection: PropTypes.oneOf(["selected", "unselected"]),
  text: PropTypes.string,
};