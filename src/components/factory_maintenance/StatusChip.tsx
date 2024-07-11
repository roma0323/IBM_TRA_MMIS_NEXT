import PropTypes from "prop-types";
import React from "react";

interface Props {
  status: "critical" | "normal";
  text: string;
}

export const StatusChip = ({
  status,
  text = "EMU3230",
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid inline-flex items-center gap-2.5 px-2.5 py-1 overflow-hidden rounded-[5px] justify-center bg-[#fffffff2] relative ${
        status === "normal" ? "border-[#36aa00]" : "border-[#ea4327]"
      } !flex-[0_0_auto] `}
    >
      <div className={`w-2 h-2 rounded relative ${status === "normal" ? "bg-[#36aa00]" : "bg-[#ea4327]"}`} />
      <div
        className={`w-fit mt-[-1.00px] text-[#4e4e4e] relative `}
      >
        {status === "critical" && <>{text}</>}

        {status === "normal" && <>{text}</>}
      </div>
    </div>
  );
};

StatusChip.propTypes = {
  status: PropTypes.oneOf(["critical", "normal"]),
  text: PropTypes.string,
};