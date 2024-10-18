// pages/Page.tsx

import React from "react";
import { getOperationSignal } from "@/api/api";
import ClientPage from "@/components/operation_signal/ClientPage";

export default async function Page() {
  const operation_signal = await getOperationSignal();

  // console.log("Operation Signal:", operation_signal);
  const fake_signal = [
    { ASSETNUM: "E1064", EQ4: "E1000", EQ2_C: "七堵機務段" },
    { ASSETNUM: "EMU3010", EQ4: "EMU5000", EQ2_C: "臺東機務段" },
    {
      SOURCE: "1",
      ASSETNUM: "EMU3020",
      EQ4: "EMU5000",
      EQ2_C: "臺東機務段",
      DESC: "集電弓不良",
    },
    {
      SOURCE: "6",
      ASSETNUM: "EMU3020",
      EQ4: "EMU5000",
      EQ2_C: "臺東機務段",
      DESC: "2022/10/29 8792次 因電車線斷裂 造成車體損傷。",
    },
    { ASSETNUM: "EMU3030", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    {
      SOURCE: "6",
      ASSETNUM: "EMU3040",
      EQ4: "EMU3000",
      EQ2_C: "臺東機務段",
      DESC: "車底受損",
    },
    { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" },{ ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" },{ ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" },{ ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" }, { ASSETNUM: "EMU3050", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
    { ASSETNUM: "EMU3060", EQ4: "EMU3000", EQ2_C: "臺東機務段" },
  ];
  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage signals={operation_signal} />
    </main>
  );
}