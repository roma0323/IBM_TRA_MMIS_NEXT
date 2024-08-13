import PropTypes from "prop-types";
import React, { useState } from "react";
import { LabelChipAndNumber } from "@/components/locomotive_depot/LabelChipAndNumber";

interface Props {
  area_name?: string;
  onLabelClick: (text: string) => void;
}

export const LabelAndNumberByArea = ({ area_name = "臺北機務段車輛配置", onLabelClick }: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col  pt-4 px-5 relative self-stretch">
      <div onClick={handleToggleVisibility} className="w-full p-2 cursor-pointer rounded-xl  cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:bg-slate-100"> -{area_name}</div>
      {isVisible && (
        <>
          <LabelChipAndNumber onClick={onLabelClick} text="All"  />
          <LabelChipAndNumber onClick={onLabelClick} text="客車"  />
          <LabelChipAndNumber onClick={onLabelClick} text="貨車" />
          <LabelChipAndNumber onClick={onLabelClick} text="柴油客車"  />
          <LabelChipAndNumber onClick={onLabelClick} text="柴液機車" />
          <LabelChipAndNumber onClick={onLabelClick} text="柴電機車" />
          <LabelChipAndNumber onClick={onLabelClick} text="電力機車" />
          <LabelChipAndNumber onClick={onLabelClick} text="通勤列車"  />
          <LabelChipAndNumber onClick={onLabelClick} text="城際列車"  />

        </>
      )}
    </div>
  );
};

LabelAndNumberByArea.propTypes = {
  area_name: PropTypes.string,
  onLabelClick: PropTypes.func.isRequired,
};

export default LabelAndNumberByArea;