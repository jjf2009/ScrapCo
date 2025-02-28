// import React from 'react'

// import bannerImg from "../../assets/banner.png"

// const Banner = () => {
//   return (
//     <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
//          <div className='md:w-1/2 w-full flex items-center md:justify-end'>
//             <img src={bannerImg} alt="" />
//         </div>
        
//         <div className='md:w-1/2 w-full'>
//             <h1 className='md:text-5xl text-2xl font-medium mb-7'>Buy, Sell, scrap</h1>
//             <p className='mb-10'>Welcome to (name)! An easy solution to all your scrap needs. 
//               We are a platform that lets you buy or sell
//               scrap without any hassles! </p>

//             <button className='btn-primary'>Get Started</button>
            
//         </div>

       
//     </div>
//   )
// }

// export default Banner

import React, { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#fff" }}>
      {/* Left Half - Welcome Text */}
      <div style={{
        flex: 1,
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1 style={{ fontSize: "2rem", color: "#333" }}>Buy! Sell! Scrap!</h1>
        <p2 className='mb-10'>Welcome to (name)! An easy solution to all your scrap needs. 
               We are a platform that lets you buy or sell
               scrap without any hassles! </p2>
      </div>

      {/* Right Half - Spline Model */}
      <div style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <spline-viewer
          url="https://prod.spline.design/BmICv75mh7yyVS9f/scene.splinecode"
          style={{
            width: "90%",  // Increase width to make the model larger
            height: "90%", // Increase height for better visibility
            background: "transparent" // Remove black/gray background
          }}
        ></spline-viewer>
      </div>
    </div>
  );
};

export default Banner;