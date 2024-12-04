import React, { useRef } from "react";
import Sidenavbar from "../Components/Sidenavbar";
import MainPageRight from "../Components/MainPageRight";
// import Footer from "../Components/Footer.js";
export default function MainPage() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "About" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Skills" && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Resume" && resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Sidenavbar scrollToSection={scrollToSection} />
      <MainPageRight
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        resumeRef={resumeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      {/* <Footer /> */}
    </>
  );
}
