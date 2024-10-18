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

      <div style={{ fontSize: "18vh", lineHeight: "1.2" }} className="bottom-[10vh]  left-[5vw]   absolute text-white">
        <div >MM I S</div>
        <div>績效</div>
        <div>管理指標</div>
      </div>
      <AnimatedNavbar />
    </div>
  );
}
