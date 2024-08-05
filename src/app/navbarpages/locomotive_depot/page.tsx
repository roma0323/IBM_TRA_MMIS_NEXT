'use client';

import React, { useState, useEffect } from "react";
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

function Page() {
  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    // Fetch data from the API
    fetch("http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=2024-07-18", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.data); // Update state with fetched data
      })
      .catch((error) => {
        setError(error.message); // Handle and store any errors
      });
  }, []); // Empty dependency array to run once on mount

  const handleRowClick = (cartype: string, belongto: number, clickedData: number) => {
    console.log("Cartype:", cartype);
    console.log("Belongto:", belongto);
    console.log("Clicked Data:", clickedData);
  };

  if (error) {
    return <div>Error: {error}</div>; // Render error message if there's an error
  }

  if (!data) {
    return <div>Loading...</div>; // Render loading message while data is being fetched
  }

  return (
    <main>
      <ClientPage initialData={data} onRowClick={handleRowClick} />
    </main>
  );
}

export default Page;
