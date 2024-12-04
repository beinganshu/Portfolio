import React, { useState } from "react";
import anshu_mainpg from "../Photos/Anshu_mainpg.jpg";
import anshu_mainpg_gy from "../Photos/Anshu_mainpg-gray.jpg";
import About_white from "../Photos/About_white.png";
import About from "../Photos/About.png";
import skills_white from "../Photos/skills_white.png";
import skills from "../Photos/skills.png";
import resume_white from "../Photos/resume_white.png";
import resume from "../Photos/resume.png";
import projects_white from "../Photos/projects_white.png";
import projects from "../Photos/projects.png";
import contact_white from "../Photos/contact_white.png";
import contact from "../Photos/contact.png";

export default function Sidenavbar({ scrollToSection }) {
  const [imghovered, setImghovered] = useState(false);
  const [abouthovered, setAbouthovered] = useState(false);
  const [skillshovered, setSkillshovered] = useState(false);
  const [resumehovered, setResumehovered] = useState(false);
  const [projectshovered, setProjectshovered] = useState(false);
  const [contacthovered, setContacthovered] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          width: "17%",
          overflowY: "scroll",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          position: "fixed",
          margin: "0",
          border: "0",
          backgroundColor: "black",
          scrollbarWidth: "none",
        }}
      >
        <btn>
          <img
            src={imghovered ? anshu_mainpg : anshu_mainpg_gy}
            alt="Anshuman"
            width={"100px"}
            height={"100px"}
            style={{
              margin: "40px",
              // border: "2px solid",
              // borderColor: imghovered ? "white" : "black",
              borderRadius: "10px",
              transform: imghovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={() => setImghovered(true)}
            onMouseLeave={() => setImghovered(false)}
          />
        </btn>

        <btn
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            backgroundColor: abouthovered ? "white" : "",
            borderRadius: "10px",
            color: abouthovered ? "black" : "white",
            transform: abouthovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s, border-color 0.2s,color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={() => setAbouthovered(true)}
          onMouseLeave={() => setAbouthovered(false)}
          onClick={() => scrollToSection("About")}
        >
          <img
            src={abouthovered ? About : About_white}
            alt="About"
            width={"70px"}
            height={"70px"}
            style={{
              padding: "5px",
            }}
          ></img>
          <p>ABOUT</p>
        </btn>

        <btn
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            backgroundColor: skillshovered ? "white" : "",
            borderRadius: "10px",
            color: skillshovered ? "black" : "white",
            transform: skillshovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s, border-color 0.2s,color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={() => setSkillshovered(true)}
          onMouseLeave={() => setSkillshovered(false)}
          onClick={() => scrollToSection("Skills")}
        >
          <img
            src={skillshovered ? skills : skills_white}
            alt="Skills"
            width={"70px"}
            height={"70px"}
            style={{
              padding: "5px",
            }}
          />
          <p>SKILLS</p>
        </btn>

        <btn
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            backgroundColor: resumehovered ? "white" : "",
            borderRadius: "10px",
            color: resumehovered ? "black" : "white",
            transform: resumehovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s, border-color 0.2s,color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={() => setResumehovered(true)}
          onMouseLeave={() => setResumehovered(false)}
          onClick={() => scrollToSection("Resume")}
        >
          <img
            src={resumehovered ? resume : resume_white}
            alt="Resume"
            width={"60px"}
            height={"70px"}
            style={{
              padding: "5px",
            }}
          />
          <p>RESUME</p>
        </btn>

        <btn
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            backgroundColor: projectshovered ? "white" : "",
            borderRadius: "10px",
            color: projectshovered ? "black" : "white",
            transform: projectshovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s, border-color 0.2s,color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={() => setProjectshovered(true)}
          onMouseLeave={() => setProjectshovered(false)}
          onClick={() => scrollToSection("Projects")}
        >
          <img
            src={projectshovered ? projects : projects_white}
            alt="Projects"
            width={"80px"}
            height={"70px"}
            style={{
              padding: "5px",
            }}
          />
          <p>PROJECTS</p>
        </btn>

        <btn
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            backgroundColor: contacthovered ? "white" : "",
            borderRadius: "10px",
            color: contacthovered ? "black" : "white",
            transform: contacthovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s, border-color 0.2s,color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={() => setContacthovered(true)}
          onMouseLeave={() => setContacthovered(false)}
          onClick={() => scrollToSection("Contact")}
        >
          <img
            src={contacthovered ? contact : contact_white}
            alt="Contact Info"
            width={"70px"}
            height={"70px"}
            style={{
              padding: "5px",
            }}
          />
          <p>CONTACT</p>
        </btn>
      </div>
    </>
  );
}
