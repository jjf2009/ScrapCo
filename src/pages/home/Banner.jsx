import React, { useEffect, useRef } from "react";
import plastic from "/src/assets/plastic.png";
import metal from "/src/assets/metal.png";
import rubber from "/src/assets/rubber.png";

const Banner = () => {
  const splineRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const spline = splineRef.current;

    if (spline) {
      spline.addEventListener("mouseenter", () => {
        spline.dispatchEvent(new CustomEvent("openClaw"));
      });

      spline.addEventListener("mouseleave", () => {
        spline.dispatchEvent(new CustomEvent("closeClaw"));
      });
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      {/* Left Section */}
<div
  style={{
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: "10vh",
    alignItems: "center",
  }}
>
  {/* Moveable Wrapper for Title + Description */}
  <div style={{ marginLeft: "80px" }}> {/* Adjust value as needed */}
    <h1 style={{ fontSize: "2rem", color: "#333" }}>Buy! Sell! Scrap!</h1>
  </div>
  <div style={{ marginLeft: "80px" }}> {/* Adjust value as needed */}
  <p>Welcome to SCRAPCO – Your trusted partner for all scrap solutions.
  At SCRAPCO, we make buying and selling scrap materials effortless and reliable. Whether you're looking to dispose of waste responsibly or find quality scrap materials, our platform connects buyers and sellers seamlessly. Join us in promoting sustainable recycling while turning scrap into valuable resources!</p>
  <button className="btn-primary">Get Started</button>
  </div>


  

        {/* Images Section with Fixed Custom Positions */}
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <img
            src={rubber}
            alt="Rubber Scrap"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              position: "absolute",
              top: "120px", // Adjust as needed
              left: "50px", // Adjust as needed
            }}
          />
          <img
            src={plastic}
            alt="Plastic Scrap"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              position: "absolute",
              top: "120px", // Adjust as needed
              left: "300px", // Adjust as needed
            }}
          />
          <img
            src={metal}
            alt="Metal Scrap"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              position: "absolute",
              top: "120px", // Adjust as needed
              left: "550px", // Adjust as needed
            }}
          />
        </div>
      </div>

      {/* Right Section (Spline Model) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <spline-viewer
          ref={splineRef}
          url="https://prod.spline.design/BmICv75mh7yyVS9f/scene.splinecode"
          style={{
            width: "90%",
            height: "90%",
            background: "transparent",
            transform: "translateX(110px)",
          }}
          auto-rotate="true"
          rotation-per-second="20deg"
          interaction="auto"
          camera-orbit="0deg 90deg 2m"
        />
      </div>
    </div>
  );
};

export default Banner;
