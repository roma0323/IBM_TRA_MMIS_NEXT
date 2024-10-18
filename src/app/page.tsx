// "use client";
import React from "react";
import AnimatedNavbar from "@/components/AnimatedNavbar";



export default function Page() {
  return (
    <div className=" h-full relative ">
      
      <div
        style={{
          backgroundImage: `url(${process.env.BASEPATH}/IMG_4777.JPG)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <AnimatedNavbar />


    </div>
  );
}
