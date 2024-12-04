import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import anshu from "../Photos/Anshu.jpg";
import anshu_gy from "../Photos/Anshu-gray.jpg";

function Startpage() {
  const [btnhovered, setBtnhovered] = useState(false);
  const [imghovered, setImghovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        overflow: "hidden",
        position: "fixed",
        margin: "0",
        border: "0",
        backgroundImage: "radial-gradient(#66676B,#3D3D40,#161617,#000000)",
        color: "white",
      }}
    >
      <h5>I am</h5>
      <img
        src={imghovered ? anshu : anshu_gy}
        alt="Anshuman"
        width={"170px"}
        height={"200px"}
        style={{
          margin: "10px",
          border: "3px solid",
          borderColor: imghovered ? "white" : "black",
          borderRadius: "9px",
          transform: imghovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s, border-color 0.2s",
        }}
        onMouseEnter={() => setImghovered(true)}
        onMouseLeave={() => setImghovered(false)}
      />
      <h2>
        <i>
          <b>Anshuman Sahoo</b>
        </i>
      </h2>
      <h5>
        an enthusiastic <i>Web Developer.</i>
      </h5>
      <h6>Want to know more about me :</h6>
      <button
        style={{
          borderRadius: "9px",
          border: "2px solid",
          borderColor: btnhovered ? "white" : "black",
          backgroundColor: btnhovered ? "blue" : "white",
          color: btnhovered ? "white" : "black",
          cursor: "pointer",
          transform: btnhovered ? "scale(1.1)" : "scale(1)",
          transition:
            "transform 0.2s, background-color 0.2s, border-color 0.2s",
        }}
        onMouseEnter={() => setBtnhovered(true)}
        onMouseLeave={() => setBtnhovered(false)}
        onClick={() => navigate("/about")}
      >
        Click Here
      </button>
    </div>
  );
}

export default Startpage;
