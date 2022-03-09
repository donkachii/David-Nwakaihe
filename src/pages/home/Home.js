import React, { useState } from "react";
import "./home.css";
import daveSeat from "../../assets/images/daveSeat.svg";
import spreadBg from "../../assets/images/spreadBg.png";
import daveImg from "../../assets/images/daveImg.svg";
import salyman from "../../assets/images/salymanImg.svg";
import scroll from "../../assets/images/scrollImg.svg";
import laptopImg from "../../assets/images/laptopImg.svg";
// import iconOne from "../../assets/images/iconOne.svg";
// import iconTwo from "../../assets/images/iconTwo.svg";
// import iconThree from "../../assets/images/iconThree.svg";
// import iconFour from "../../assets/images/iconFour.svg";
import footerBg from "../../assets/images/footerBG.svg";
import footerBg2 from "../../assets/images/footerBG2.svg";
import twitter from "../../assets/images/twitter.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import copyright from "../../assets/images/copyright.svg";
import love from "../../assets/images/loveImg.svg";
import resume from "../../assets/docs/resume.pdf";
import emailjs from "emailjs-com";
import Typewriter from "typewriter-effect";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import blueySplash from "../../assets/images/blueySplash.svg";

const Home = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Kachi",
    message: "",
    reply_to: "",
  });
  const [alert, setAlert] = useState("");
  const [maillError, setMailError] = useState("");

  const handleChange = (e) => {
    setAlert("");
    setMailError("");
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((toSend.from_name && toSend.reply_to && toSend.message) === "") {
      setAlert("Please fill in all fields.");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(toSend.reply_to)
    ) {
      setMailError("Please enter a valid email address");
    } else {
      emailjs
        .send(
          "service_wmur7jp",
          "template_axck0qk",
          toSend,
          "user_P44BZM072O8sqshl5W1Zf"
        )
        .then((response) => {
          alert(
            "SUCCESS! Email successfully sent!"
            // response.status,
            // response.text
          );
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  // const reactPercentage = 55;

  return (
    <div>
      <section className="dave-background mx-0">
        <div className="dave-background-inner mobile-header">
          <div>
            <div className="dave-header-list">
              <ul className="list-inline m-0 d-flex align-items-center">
                <a href="/">
                  <li className="list-inline-item d-flex align-items-center justify-content-center">
                    Home
                  </li>
                </a>
                <a href="#about">
                  <li className="list-inline-item d-flex align-items-center justify-content-center">
                    About
                  </li>
                </a>
                <a href="#skills">
                  <li className="list-inline-item d-flex align-items-center justify-content-center">
                    Skills
                  </li>
                </a>
                <a href="#works">
                  <li className="list-inline-item d-flex align-items-center justify-content-center">
                    Works
                  </li>
                </a>
                <a href="#contact">
                  <li className="list-inline-item d-flex align-items-center justify-content-center">
                    Contact
                  </li>
                </a>
              </ul>
            </div>
            <div className="row d-flex flex-wrap align-items-center mx-2">
              <article className="col-md-8">
                <article className="dave-circle">
                  <section>
                    <div className="dave-name">
                      <h3 className="d-flex" style={{ gap: 6 }}>
                        Hi, I'm{" "}
                        <Typewriter
                          onInit={(typewriter) => {
                            typewriter

                              .typeString("<span>David</span>")

                              .pauseFor(2000)
                              .deleteAll()
                              .typeString("<span>Onyekachi</span>")
                              .start();
                          }}
                        />
                      </h3>
                    </div>
                    <div>
                      <h4>Software Engineer</h4>
                    </div>
                    <div className="d-flex justify-content-center py-4">
                      <a href="https://twitter.com/donkachii">
                        <img src={twitter} alt="twitter" />
                      </a>
                      <a href="https://github.com/donkachii">
                        <img className="pl-3" src={github} alt="github" />
                      </a>
                      <a href="https://www.linkedin.com/in/david-nwakaihe-26006b174/">
                        <img className="pl-3" src={linkedin} alt="linkedin" />
                      </a>
                      <a href="https://www.instagram.com/don_kachi/">
                        <img className="pl-3" src={instagram} alt="instagram" />
                      </a>
                    </div>
                  </section>
                </article>
              </article>
              <article className="col-md-4">
                <img className="dave-seat" src={daveSeat} alt="David" />
              </article>
            </div>
          </div>
          <div className="mobile-title">
            <h4>Onyekachi's Portfolio</h4>
          </div>
          <section
            className="hams"
            // onClick={() => {
            //   setOpen(!open);
            // }}
          >
            <div></div>
            <div></div>
            <div></div>
          </section>
        </div>
      </section>

      {/* <section className="dave-list-icons">
        <img src={iconOne} alt="Background icon" />
        <img src={iconTwo} alt="Background icon" />
        <img src={iconThree} alt="Background icon" />
        <img src={iconFour} alt="Background icon" />
      </section> */}
      <img className="dave-spreadBg" src={spreadBg} alt="Spread" />

      <section id="about" className="dave-about row">
        <article className="d-flex flex-column col-md-5">
          <img src={daveImg} alt="David" className="david-img" height="588px" />
          <img
            className="scroll"
            src={scroll}
            alt="scroll"
            width="68px"
            height="25px"
          />
        </article>
        <article className="dave-about-article col-md-7">
          <h3 className="dave-heading">About Me</h3>
          <p className="dave-paragraph pb-3 d-flex justify-content-center">
            I am a Software Engineer with 1+ years of experience, building
            software solutions. Proficient in a range of modern technologies
            including JavaScript, ReactJS, SQL, Python, and PHP. <br /> Ardent
            researcher and online trainee to further develop skills and
            knowledge of multiple data and software engineering, websites, and
            web applications, and passionate about software development and a
            developing interest in psychology.
          </p>
          <div className="dave-btn">
            <a
              href={resume}
              download="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              View/Download CV
            </a>
          </div>
          <div className="salyman-img">
            <img
              className=""
              src={salyman}
              alt="Man pressing laptop on floor"
            />
          </div>
        </article>
        {/* <div className="blue-splash"><img src={blueySplash} alt="Splash" /></div> */}
      </section>
      <section id="skills" className="skills row">
        <article className="col-md-7">
          <h3 className="dave-heading">Skills</h3>
          <p className="dave-paragraph pb-3">
            React, JavaScript, Redux, Database (SQL, MySQL, Postgres), NodeJS,
            Python, Java Programming, Php
          </p>
          {/* <div className="skills-progress">
            <div style={{ width: 100, height: 124 }}>
              <CircularProgressbar
                value={reactPercentage}
                text={`${reactPercentage}%`}
                styles={{
                  path: {
                    stroke: `#000C24`,
                  },

                  trail: {
                    stroke: "rgba(146, 138, 151, 0.27)",
                  },

                  text: {
                    fill: "#928A97",
                    fontSize: "16px",
                  },

                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
              <p className="text-center mt-1">ReactJS</p>
            </div>
            <div style={{ width: 100, height: 124 }}>
              <CircularProgressbar
                value={89}
                text={`${89}%`}
                styles={{
                  path: {
                    stroke: `#000C24`,
                  },

                  trail: {
                    stroke: "rgba(146, 138, 151, 0.27)",
                  },

                  text: {
                    fill: "#928A97",
                    fontSize: "16px",
                  },

                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
              <p className="text-center mt-1">HTML5</p>
            </div>
            <div style={{ width: 100, height: 124 }}>
              <CircularProgressbar
                value={78}
                text={`${78}%`}
                styles={{
                  path: {
                    stroke: `#000C24`,
                  },

                  trail: {
                    stroke: "rgba(146, 138, 151, 0.27)",
                  },

                  text: {
                    fill: "#928A97",
                    fontSize: "16px",
                  },

                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
              <p className="text-center mt-1">CSS3</p>
            </div>
            <div style={{ width: 100, height: 124 }}>
              <CircularProgressbar
                value={64}
                text={`${64}%`}
                styles={{
                  path: {
                    stroke: `#000C24`,
                  },

                  trail: {
                    stroke: "rgba(146, 138, 151, 0.27)",
                  },

                  text: {
                    fill: "#928A97",
                    fontSize: "16px",
                  },

                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
              <p className="text-center mt-1">Javascript</p>
            </div>
          </div> */}
          <img
            className="scroll mt-5"
            src={scroll}
            role="button"
            alt="scroll"
            width="68px"
            height="25px"
          />
        </article>
        <article className="col-md-5">
          <img className="laptop" src={laptopImg} alt="laptop" />
        </article>
      </section>

      {/* Develop for projects here */}
      <section>
        
      </section>

      <section
        id="contact"
        className="footer-bg"
        style={{ background: `url(${footerBg})` }}
      >
        <div className="dave-footer">
          <article className="footer-contact row">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <h2 className="footer-drop-line">
                Drop me a line. <br /> I would like to hear <br /> from you.
              </h2>
            </div>
            <div className="col-md-7 footer-contact-input py-3">
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <p className="dave-alert">{alert}</p>
                <div className="pb-3">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="pb-3">
                  <p className="dave-alert">{maillError}</p>
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    required
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                </div>
                <div className="pb-4">
                  <textarea
                    maxLength="1000"
                    rows="5"
                    style={{ resize: "none" }}
                    placeholder="Message"
                    required
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="dave-btn pb-4">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </article>
        </div>
        <article
          className="footer-bg2"
          style={{ background: `url(${footerBg2})` }}
        >
          <div className="d-flex align-items-center justify-content-center py-4">
            <aside className="footer-social">
              <div className="d-flex justify-content-center">
                <h4 className="">don_kachi</h4>
              </div>

              <div className="d-flex justify-content-center py-4">
                <a href="https://twitter.com/donkachii">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https://github.com/donkachii">
                  <img className="pl-3" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/david-nwakaihe-26006b174/">
                  <img className="pl-3" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/don_kachi/">
                  <img className="pl-3" src={instagram} alt="instagram" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <p className="footer-text">
                  All Rights Reserved <img src={copyright} alt="copyright" />{" "}
                  2021 Kachi <img className="pl-3" src={love} alt="love" />
                </p>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
