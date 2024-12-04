import React from "react";
import cpr from "../Photos/copyright.png";

export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "center",
          alignItems: "center",
          height: "15px",
          width: "83%",
          left: "17%",
          backgroundColor: "black",
          color: "white",
          bottom: "0",
        }}
      >
        <img src={cpr} alt={"copyright"}></img>
        <p>Anshuman Sahoo</p>
      </div>
    </>
  );
}
