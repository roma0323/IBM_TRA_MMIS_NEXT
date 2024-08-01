"use client";

type ClientPageProps = {
  initialData: any[];
};
import Link from 'next/link';
import React from "react";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";

const ClientPage: React.FC<ClientPageProps> = ({ initialData }) => {
  const currentDatedata = initialData.filter(item => item.ALL_D === "2024-07-29");

  const ALL_TRAIN_DATA = {
    NAME: "全部車輛",
    AVAILABLE: currentDatedata.reduce((sum, item) => sum + parseFloat(item.AVAILABLE), 0).toString(),
    TOTAL: currentDatedata.reduce((sum, item) => sum + parseFloat(item.TOTAL), 0).toString(),
    get RATION_TODAY() {
      return (parseFloat(this.AVAILABLE) / parseFloat(this.TOTAL)).toString();
    },
  };

  const TRUNK_TRAIN_DATA = {
    NAME: "貨車",
    AVAILABLE: currentDatedata
      .filter(item => item.USUALFLAG === "1" && item.EQ11 === "RSTP" || item.EQ11 === "RSTF")
      .reduce((sum, item) => sum + parseFloat(item.AVAILABLE), 0)
      .toString(),
    TOTAL: currentDatedata
      .filter(item => item.USUALFLAG === "1" && item.EQ11 === "RSTP" || item.EQ11 === "RSTF")
      .reduce((sum, item) => sum + parseFloat(item.TOTAL), 0)
      .toString(),
    get RATION_TODAY() {
      return (parseFloat(this.AVAILABLE) / parseFloat(this.TOTAL)).toString();
    },
  };

  const POWER_TRAIN_DATA = {
    NAME: "動力車",
    AVAILABLE: currentDatedata
      .filter(item => item.USUALFLAG === "1" && item.EQ11 === "RSTL")
      .reduce((sum, item) => sum + parseFloat(item.AVAILABLE), 0)
      .toString(),
    TOTAL: currentDatedata
      .filter(item => item.USUALFLAG === "1" && item.EQ11 === "RSTL")
      .reduce((sum, item) => sum + parseFloat(item.TOTAL), 0)
      .toString(),
    get RATION_TODAY() {
      return (parseFloat(this.AVAILABLE) / parseFloat(this.TOTAL)).toString();
    },
  };

  const UNUSUALLY_USED_TRAIN_DATA = {
    NAME: "非常態車輛",
    AVAILABLE: currentDatedata.filter(item => item.USUALFLAG === "0").reduce((sum, item) => sum + parseFloat(item.AVAILABLE), 0).toString(),
    TOTAL: currentDatedata.filter(item => item.USUALFLAG === "0").reduce((sum, item) => sum + parseFloat(item.TOTAL), 0).toString(),
    get RATION_TODAY() {
      return (parseFloat(this.AVAILABLE) / parseFloat(this.TOTAL)).toString();
    },
  };
const CUSTMOER_TRAIN_DATA = {
  NAME: "客車",
  AVAILABLE: currentDatedata
    .filter(item => item.USUALFLAG === "1" && item.EQ11 === "RSTA" )
    .reduce((sum, item) => sum + parseFloat(item.AVAILABLE), 0)
    .toString(),
  TOTAL: currentDatedata
    .filter(item => item.USUALFLAG === "1" && item.EQ11 === "RSTA" )
    .reduce((sum, item) => sum + parseFloat(item.TOTAL), 0)
    .toString(),
  get RATION_TODAY() {
    return (parseFloat(this.AVAILABLE) / parseFloat(this.TOTAL)).toString();
  },
};




  return (
    <div className="bg-gray-200 p-3 ">
      <BigOverviewCard Data={ALL_TRAIN_DATA} />
      <div className="grid grid-cols-4 flex-grow relative bg-gray-200 overflow-hidden">
      <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${POWER_TRAIN_DATA.NAME}`, }}>
          <OverviewCard Data={POWER_TRAIN_DATA} />
        </Link>
        <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${CUSTMOER_TRAIN_DATA.NAME}`, }}>
          <OverviewCard Data={CUSTMOER_TRAIN_DATA} />
        </Link>
        <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${TRUNK_TRAIN_DATA.NAME}`, }}>
          <OverviewCard Data={TRUNK_TRAIN_DATA} />
        </Link>
        <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${UNUSUALLY_USED_TRAIN_DATA.NAME}`, }}>
          <OverviewCard Data={UNUSUALLY_USED_TRAIN_DATA} />
        </Link>
      </div>
    </div>

  );
};

export default ClientPage;
