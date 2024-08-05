'use client'
import React, { useState } from "react";
import ClientPage from "@/components/locomotive_depot/ClientPage";

// Sample data for certain train maintenance
const certain_train_maintenance = [
  {
    dept: "MHY00",
    deptdesc: "臺北機務段",
    cartype: "EMU500",
    assetnum: "EMU503",
    worktype: "C2",
    actstart: "2022/11/07",
    actfinish: "2022/11/09",
    type: "64",
    typedesc: "出廠試車",
    borrowdept: "",
    statementdesc: "",
    statement: "",
    current_use_type: "",
    current_use_typedesc: "",
    url: "http://tra.webtw.xyz:8888/maximo/ui/maximo.jsp?event=loadapp&value=zz_pmwo&uniqueid=678482",
  },
  {
    dept: "MHY00",
    deptdesc: "臺北機務段",
    cartype: "EMU500",
    assetnum: "EMU504",
    worktype: "C1",
    actstart: "2012/03/01",
    actfinish: "2012/03/22",
    type: "06",
    typedesc: "進廠檢修(3B,4,C)",
    borrowdept: "",
    statementdesc: "",
    statement: "",
    current_use_type: "",
    current_use_typedesc: "",
    url: "http://tra.webtw.xyz:8888/maximo/ui/maximo.jsp?event=loadapp&value=zz_pmwo&uniqueid=678482",
  },
];

// Function to fetch data from the API
async function getData() {
  const res = await fetch(
    "http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=2024-07-18",
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
}

// Default export for the page
export default async function Page() {
  const data = await getData(); // Fetch data from the API

  const handleRowClick = (cartype: string, belongto: number, clickedData: number) => {
    console.log("Cartype:", cartype);
    console.log("Belongto:", belongto);
    console.log("Clicked Data:", clickedData);
  };

  return (
    <main>
      <ClientPage initialData={data.data} onRowClick={handleRowClick} /> {/* Pass the handler to ClientPage */}
    </main>
  );
}
