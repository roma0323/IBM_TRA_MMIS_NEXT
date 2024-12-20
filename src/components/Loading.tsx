import React from 'react';

export default function Loading() {
  const loaderStyle: React.CSSProperties = {
    animation: 'rotate 1s infinite',
    height: '50px',
    width: '50px',
  };

  const cssStyles = `
    .loader:before,
    .loader:after {
      border-radius: 50%;
      content: "";
      display: block;
      height: 20px;
      width: 20px;
    }
    .loader:before {
      animation: ball1 1s infinite;
      background-color: #e2e8f0;
      box-shadow: 30px 0 0 #397EFF;
      margin-bottom: 10px;
    }
    .loader:after {
      animation: ball2 1s infinite;
      background-color: #397EFF;
      box-shadow: 30px 0 0 #e2e8f0;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg) scale(0.8) }
      50% { transform: rotate(360deg) scale(1.2) }
      100% { transform: rotate(720deg) scale(0.8) }
    }

    @keyframes ball1 {
      0% {
        box-shadow: 30px 0 0 #397EFF;
      }
      50% {
        box-shadow: 0 0 0 #397EFF;
        margin-bottom: 0;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 #397EFF;
        margin-bottom: 10px;
      }
    }

    @keyframes ball2 {
      0% {
        box-shadow: 30px 0 0 #e2e8f0;
      }
      50% {
        box-shadow: 0 0 0 #e2e8f0;
        margin-top: -20px;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 #e2e8f0;
        margin-top: 0;
      }
    }
  `;

  return (
    <div className="flex items-center   justify-center size-full  absolute top-0 left-0">
      <style>{cssStyles}</style>
      <div className='size-full bg-background opacity-80 absolute'></div>
      <span className="loader" style={loaderStyle}></span>
    </div>
  );
}
