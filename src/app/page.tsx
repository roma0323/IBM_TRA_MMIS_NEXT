// "use client";
import React from "react";
import AnimatedNavbar from "@/components/AnimatedNavbar";

export default function Page() {
  return (
    <div className=" h-full relative  ">
      <div
        style={{
          backgroundImage: `url(${process.env.BASEPATH}/IMG_4789.JPG)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />

      <div style={{ fontSize: "18vh", lineHeight: "1.1" }} className="bottom-[6vh]  left-[4vw]   absolute text-slate-100 cursor-default">
        <div>MMIS</div>
        <div>績效管理</div>
      </div>
      <AnimatedNavbar />
    </div>
  );
}
