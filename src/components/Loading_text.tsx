import React from "react";

export default function Loading() {
  const loaderStyle: React.CSSProperties = {
  };

  const cssStyles = `
   .loader {
        height: 30px;
        width: 10px;
        margin-top: 20px;
        border-radius: 4px;
        color: #537FD1;
        background: currentColor;
        position: relative;
        animation: ht 0.7s ease-in infinite alternate;
        box-shadow: 15px 0 0 -1px , -15px 0 0 -1px ,
                    30px 0 0 -2px , -30px 0 0 -2px,
                    45px 0 0 -3px , -45px 0 0 -3px;
      }

      @keyframes ht {
        100% { height: 0px }
      }
    
  `;

  return (
    <div className="flex items-center justify-center size-full">
      <style>{cssStyles}</style>
      <span className="loader" style={loaderStyle}></span>
    </div>
  );
}
