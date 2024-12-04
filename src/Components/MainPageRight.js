import React, { useState } from "react";
import anshu_gy from "../Photos/Anshu-gray.jpg";
import anshu from "../Photos/Anshu.jpg";
import linkedin from "../Photos/Linkedin-gray.png";
import fb from "../Photos/facebook.png";
import insta from "../Photos/Instagram.png";
import cpr from "../Photos/copyright.png";
import landingpage from "../Photos/LandingPage.jpg";
import ecommerce from "../Photos/Ecommerce.jpg";
import foodweb from "../Photos/FoodWebsite.jpg";
import newsapp from "../Photos/NewsApp.jpg";
import chatApp from "../Photos/ChatApp.png";
import rpc from "../Photos/Rock,Paper.png";

export default function MainPageRight({
  aboutRef,
  skillsRef,
  resumeRef,
  projectsRef,
  contactRef,
}) {
  const [imghovered, setImghovered] = useState(false);
  const [resumehovered, setResumehovered] = useState(false);
  const [fphovered, setFphovered] = useState(false);
  const [sphovered, setSphovered] = useState(false);
  const [tphovered, setTphovered] = useState(false);
  const [fophovered, setFophovered] = useState(false);
  const [fiphovered, setFiphovered] = useState(false);
  const [siphovered, setSiphovered] = useState(false);
  const [namehovered, setNamehovered] = useState(false);
  const [emailhovered, setEmailhovered] = useState(false);
  const [subjecthovered, setSubjecthovered] = useState(false);
  const [msghovered, setMsghovered] = useState(false);
  const [submithovered, setSubmithovered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setFeedback("Please fill all the details.");
      return;
    }

    const formData = {
      name,
      email,
      subject,
      message,
    };

    const response = await fetch("https://formspree.io/f/xkgnyvaq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFeedback("Your message has been submitted successfully!");
      // Optionally clear the form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setFeedback("There was an error, please try again.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          height: "100%",
          width: "83%",
          overflowY: "auto",
          left: "17%",
          top: "0",
          right: "0",
          bottom: "0",
          position: "relative",
          margin: "0",
          border: "0",
          backgroundImage: "linear-gradient(#66676B,#3D3D40,#161617,#000000)",
          color: "white",
          scrollbarWidth: "none",
          paddingTop: "45px",
        }}
      >
        <p style={{ fontSize: "40px", marginLeft: "18.5%" }}>Hello, It's me</p>
        <img
          src={imghovered ? anshu : anshu_gy}
          alt="Anshuman Sahoo"
          width={"200px"}
          height={"230px"}
          style={{
            margin: "10px",
            marginLeft: "20%",
            // border: "2px solid",
            // borderColor: imghovered ? "white" : "black",
            borderRadius: "10px",
            transform: imghovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s, border-color 0.2s",
          }}
          onMouseEnter={() => setImghovered(true)}
          onMouseLeave={() => setImghovered(false)}
        />
        <h1>
          <span style={{ fontSize: "55px", marginLeft: "10%" }}>
            <i>Anshuman Sahoo</i>
          </span>
        </h1>
        <p style={{ fontSize: "30px", marginLeft: "10%" }}>
          And I am a{" "}
          <span style={{ color: "#6379bf", fontSize: "40px" }}>
            Web Developer
          </span>
          .
        </p>
        {/*About Section*/}
        <div ref={aboutRef}>
          <p style={{ marginLeft: "10%", fontSize: "30px" }}>
            <span>
              <span style={{ fontSize: "40px", display: "inline-block" }}>
                <i>A</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                <i>bout</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  display: "inline-block",
                  marginLeft: "2px",
                }}
              >
                :
              </span>
            </span>
          </p>
          <p
            style={{
              marginLeft: "15%",
              marginRight: "7%",
              fontSize: "25px",
              textAlign: "justify",
            }}
          >
            I am Anshuman Sahoo, a third year undergraduate student of the
            department of Metallurgical and Materials Engineering of Indian
            Institute of Technology, Kharagpur. I am Rourkela, Odisha. My
            hobbies include playing chess and reading books.
          </p>
        </div>
        {/*Skills Section*/}
        <div ref={skillsRef}>
          <p style={{ marginLeft: "10%", fontSize: "30px" }}>
            <span>
              <span style={{ fontSize: "40px", display: "inline-block" }}>
                <i>S</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                <i>kills</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  display: "inline-block",
                  marginLeft: "2px",
                }}
              >
                :
              </span>
            </span>
            <p
              style={{
                marginLeft: "6%",
                marginRight: "7%",
                fontSize: "25px",
                textAlign: "justify",
              }}
            >
              UI/UX Design :
              <div
                style={{
                  width: "80%",
                  height: "20px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "100%",
                    backgroundColor: "black",
                    borderRadius: "5px 0 0 5px",
                  }}
                ></div>
              </div>
            </p>
            <p
              style={{
                marginLeft: "6%",
                marginRight: "7%",
                fontSize: "25px",
                textAlign: "justify",
              }}
            >
              Web Development :
              <div
                style={{
                  width: "80%",
                  height: "20px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "85%",
                    height: "100%",
                    backgroundColor: "black",
                    borderRadius: "5px 0 0 5px",
                  }}
                ></div>
              </div>
            </p>
            <p
              style={{
                marginLeft: "6%",
                marginRight: "7%",
                fontSize: "25px",
                textAlign: "justify",
              }}
            >
              Data Science and AI :
              <div
                style={{
                  width: "80%",
                  height: "20px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    height: "100%",
                    backgroundColor: "black",
                    borderRadius: "5px 0 0 5px",
                  }}
                ></div>
              </div>
            </p>
            <p
              style={{
                marginLeft: "6%",
                marginRight: "7%",
                fontSize: "25px",
                textAlign: "justify",
              }}
            >
              Data Structures and Algorithm :
              <div
                style={{
                  width: "80%",
                  height: "20px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    height: "100%",
                    backgroundColor: "black",
                    borderRadius: "5px 0 0 5px",
                  }}
                ></div>
              </div>
            </p>
          </p>
        </div>

        {/*Resume Section*/}
        <div ref={resumeRef}>
          <p style={{ marginLeft: "10%", fontSize: "30px" }}>
            <span>
              <span style={{ fontSize: "40px", display: "inline-block" }}>
                <i>R</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                <i>esume</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  display: "inline-block",
                  marginLeft: "2px",
                }}
              >
                :
              </span>
            </span>
            <p
              style={{
                marginLeft: "6%",
                marginRight: "7%",
                fontSize: "25px",
                textAlign: "justify",
                marginBottom: "-1px",
              }}
            >
              Please find my resume in the link provided below.
            </p>
            <button
              style={{
                marginLeft: "6%",
                borderRadius: "10px",
                backgroundColor: resumehovered ? "black" : "white",
                color: resumehovered ? "white" : "black",
                height: "40px",
                width: "85px",
                fontSize: "20px",
              }}
              onMouseEnter={() => setResumehovered(true)}
              onMouseLeave={() => setResumehovered(false)}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1cxMfgx-t3-d-GQDtS1M9accG3R3E_S8M/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </button>
          </p>
        </div>

        {/* Projects Section */}
        <div ref={projectsRef}>
          <p style={{ marginLeft: "10%", fontSize: "30px" }}>
            <span>
              <span style={{ fontSize: "40px", display: "inline-block" }}>
                <i>P</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                <i>rojects</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  display: "inline-block",
                  marginLeft: "2px",
                }}
              >
                :
              </span>
            </span>

            {/* Horizontal Scrolling Container */}
            <div
              style={{
                marginLeft: "6%",
                marginRight: "7%",
                overflowX: "auto",
                display: "flex",
                gap: "10px",
                padding: "10px",
                scrollbarWidth: "none",
                width: "calc(100% - 20%)",
              }}
            >
              <div style={{ textAlign: "center", flex: "0 0 22%" }}>
                <div
                  style={{
                    flex: "0 0 22%",
                    height: "180px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    transform: fphovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setFphovered(true)}
                  onMouseLeave={() => setFphovered(false)}
                >
                  <img
                    src={chatApp}
                    alt="Chat Website"
                    style={{
                      height: "180px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/beinganshu/mernchatapp.git",
                        "_blank"
                      )
                    }
                  ></img>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Chat Website
                </p>
              </div>

              <div style={{ textAlign: "center", flex: "0 0 22%" }}>
                <div
                  style={{
                    flex: "0 0 22%",
                    height: "180px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    transform: sphovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setSphovered(true)}
                  onMouseLeave={() => setSphovered(false)}
                >
                  <img
                    src={ecommerce}
                    alt="Ecommerce Website"
                    style={{
                      height: "180px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/beinganshu/ECommerce-Website.git",
                        "_blank"
                      )
                    }
                  ></img>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Ecommerce Website
                </p>
              </div>

              <div style={{ textAlign: "center", flex: "0 0 22%" }}>
                <div
                  style={{
                    flex: "0 0 22%",
                    height: "180px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    transform: tphovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setTphovered(true)}
                  onMouseLeave={() => setTphovered(false)}
                >
                  <img
                    src={newsapp}
                    alt="NewsApp"
                    style={{
                      height: "180px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/beinganshu/News_App.git",
                        "_blank"
                      )
                    }
                  ></img>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  News App
                </p>
              </div>

              <div style={{ textAlign: "center", flex: "0 0 22%" }}>
                <div
                  style={{
                    flex: "0 0 22%",
                    height: "180px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    transform: fophovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setFophovered(true)}
                  onMouseLeave={() => setFophovered(false)}
                >
                  <img
                    src={foodweb}
                    alt="Food Website"
                    style={{
                      height: "180px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/beinganshu/Foodie-Food.git",
                        "_blank"
                      )
                    }
                  ></img>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Food Website
                </p>
              </div>

              <div style={{ textAlign: "center", flex: "0 0 22%" }}>
                <div
                  style={{
                    flex: "0 0 22%",
                    height: "180px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    transform: fiphovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setFiphovered(true)}
                  onMouseLeave={() => setFiphovered(false)}
                >
                  <img
                    src={rpc}
                    alt="Rock, Paper, Scissors Game"
                    style={{
                      height: "180px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/beinganshu/Rock-Paper-Scissors.git",
                        "_blank"
                      )
                    }
                  ></img>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Rock, Paper, Scissors
                </p>
              </div>

              <div style={{ textAlign: "center", flex: "0 0 22%" }}>
                <div
                  style={{
                    flex: "0 0 22%",
                    height: "180px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    transform: siphovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setSiphovered(true)}
                  onMouseLeave={() => setSiphovered(false)}
                >
                  <img
                    src={landingpage}
                    alt="Landing Page"
                    style={{
                      height: "180px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/beinganshu/Landing-page.git",
                        "_blank"
                      )
                    }
                  ></img>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Landing Page
                </p>
              </div>
            </div>
          </p>
        </div>

        {/*Contact Section*/}
        <div ref={contactRef}>
          <p style={{ marginLeft: "10%", fontSize: "30px" }}>
            <span>
              <span style={{ fontSize: "40px", display: "inline-block" }}>
                <i>C</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                <i>ontact Me</i>
              </span>
              <span
                style={{
                  fontSize: "30px",
                  display: "inline-block",
                  marginLeft: "2px",
                }}
              >
                :
              </span>
            </span>
            <br></br>
            <p
              style={{
                fontSize: "20px",
                marginLeft: "6%",
                marginBottom: "-1px",
              }}
            >
              Mob No: 8658054541
            </p>
            <p
              style={{
                fontSize: "20px",
                marginLeft: "6%",
                marginBottom: "-0.25px",
              }}
            >
              Email: anshumanrkl05@gmail.com
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                style={{
                  borderRadius: "10px",
                  width: "350px",
                  height: "60px",
                  opacity: namehovered ? "100%" : "70%",
                  padding: "10px",
                  margin: "10px",
                  marginLeft: "6%",
                  fontSize: "20px",
                  marginBottom: "-1px",
                }}
                onMouseEnter={() => setNamehovered(true)}
                onMouseLeave={() => setNamehovered(false)}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br></br>
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                style={{
                  borderRadius: "10px",
                  width: "350px",
                  height: "60px",
                  opacity: emailhovered ? "100%" : "70%",
                  padding: "10px",
                  margin: "10px",
                  marginLeft: "6%",
                  fontSize: "20px",
                  marginBottom: "-1px",
                }}
                onMouseEnter={() => setEmailhovered(true)}
                onMouseLeave={() => setEmailhovered(false)}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br></br>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                style={{
                  borderRadius: "10px",
                  width: "550px",
                  height: "60px",
                  opacity: subjecthovered ? "100%" : "70%",
                  padding: "10px",
                  margin: "10px",
                  marginLeft: "6%",
                  fontSize: "20px",
                  marginBottom: "-1px",
                }}
                onMouseEnter={() => setSubjecthovered(true)}
                onMouseLeave={() => setSubjecthovered(false)}
                onChange={(e) => setSubject(e.target.value)}
              ></input>
              <br></br>
              <input
                type="text"
                placeholder="Message"
                value={message}
                style={{
                  height: "200px",
                  width: "800px",
                  margin: "10px",
                  marginLeft: "6%",
                  borderRadius: "10px",
                  padding: "10px",
                  opacity: msghovered ? "100" : "70%",
                  fontSize: "20px",
                }}
                onMouseEnter={() => setMsghovered(true)}
                onMouseLeave={() => setMsghovered(false)}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
              <br />
              <button
                type="submit"
                style={{
                  height: "30px",
                  display: "flex",
                  width: "70px",
                  fontSize: "15px",
                  marginLeft: "6%",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: submithovered ? "black" : "white",
                  color: submithovered ? "white" : "black",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setSubmithovered(true)}
                onMouseLeave={() => setSubmithovered(false)}
              >
                Submit
              </button>
              {feedback && <p>{feedback}</p>}
            </form>
          </p>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "16%",
              paddingBottom: "30px",
            }}
          >
            <img
              src={linkedin}
              alt="Linkedin"
              style={{
                height: "30px",
                width: "30px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/anshuman-sahoo-b9627a256/",
                  "_blank"
                )
              }
            ></img>
            <img
              src={insta}
              alt="Instagram"
              style={{
                height: "30px",
                width: "30px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/eternally_wanderer/",
                  "_blank"
                )
              }
            ></img>
            <img
              src={fb}
              alt="Facebook"
              style={{
                height: "30px",
                width: "30px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100087411437503",
                  "_blank"
                )
              }
            ></img>
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              left: "0",
              bottom: "0",
              height: "20px",
              width: "100%",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <img
              src={cpr}
              alt={"copyright"}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            ></img>
            <p style={{ fontSize: "14px", margin: 0 }}>Anshuman Sahoo</p>
          </div>
        </div>
      </div>
    </>
  );
}
