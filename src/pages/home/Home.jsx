import React, { useEffect } from 'react';
// import Banner from './Banner';
// import TopSellers from '../components/TopSellers';
// import Recommended from '../components/Recommended';
// import News from '../components/News';
// import ClawEmbed from './ClawEmbed';

const Home = () => {
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1 style={{ fontSize: "2rem", color: "#333" }}>Welcome to SCRAPCO</h1>
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

      {/* <Banner />
      <TopSellers />
      <Recommended />
      <News /> */}
    </div>
  );
};

export default Home;

