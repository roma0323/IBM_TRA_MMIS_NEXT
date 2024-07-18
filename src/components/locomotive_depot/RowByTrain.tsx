import PropTypes from "prop-types";
import React from "react";
import { LabelChip } from "@/components/locomotive_depot/LabelChip";

interface Props {
  className?: string;
  text?: string;
  train_amount: number;
  model: string;
  configuration: number;
  borrowed: number;
  borrowedIn: number;
  available: number;
  periodic: number;
  temporary: number;
  prepared: number;
  maintenance: number;
  stageRepair: number;
  factoryRepair: number;
  awaitingRepair: number;
  returnNoFire: number;
  deactivated: number;
  retained: number;
}

export const RowByTrain = ({
  className,
  text = "ALL",
  train_amount,
  model,
  configuration,
  borrowed,
  borrowedIn,
  available,
  periodic,
  temporary,
  prepared,
  maintenance,
  stageRepair,
  factoryRepair,
  awaitingRepair,
  returnNoFire,
  deactivated,
  retained,
}: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-17 gap-4 border-b-2 border-gray-100 text-left">
      <div className="col-span- p-2 flex items-end"><LabelChip text={text} className={`bg-[#fffffff2] ${className}`} property1="default" /></div>
      <div className="col-span-2 p-2 flex items-end">{model}</div>
      <div className="p-2 flex items-end">{configuration}</div>
      <div className="p-2 flex items-end">{borrowed}</div>
      <div className="p-2 flex items-end">{borrowedIn}</div>
      <div className="p-2 flex items-end">{available}</div>
      <div className="p-2 flex items-end">{periodic}</div>
      <div className="p-2 flex items-end">{temporary}</div>
      <div className="p-2 flex items-end">{prepared}</div>
      <div className="p-2 flex items-end">{maintenance}</div>
      <div className="p-2 flex items-end">{stageRepair}</div>
      <div className="p-2 flex items-end">{factoryRepair}</div>
      <div className="p-2 flex items-end">{awaitingRepair}</div>
      <div className="p-2 flex items-end">{returnNoFire}</div>
      <div className="p-2 flex items-end">{deactivated}</div>
      <div className="p-2 flex items-end">{retained}</div>
    </div>
  );
};

RowByTrain.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  train_amount: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  configuration: PropTypes.number.isRequired,
  borrowed: PropTypes.number.isRequired,
  borrowedIn: PropTypes.number.isRequired,
  available: PropTypes.number.isRequired,
  periodic: PropTypes.number.isRequired,
  temporary: PropTypes.number.isRequired,
  prepared: PropTypes.number.isRequired,
  maintenance: PropTypes.number.isRequired,
  stageRepair: PropTypes.number.isRequired,
  factoryRepair: PropTypes.number.isRequired,
  awaitingRepair: PropTypes.number.isRequired,
  returnNoFire: PropTypes.number.isRequired,
  deactivated: PropTypes.number.isRequired,
  retained: PropTypes.number.isRequired,
};

export default RowByTrain;