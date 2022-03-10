import React, { useState } from "react";
import "./home.css";
import daveSeat from "../../assets/images/daveSeat.svg";
import spreadBg from "../../assets/images/spreadBg.png";
import daveImg from "../../assets/images/daveImg.svg";
import laptopImg from "../../assets/images/laptopImg.svg";
import resume from "../../assets/docs/resume.pdf";
import emailjs from "emailjs-com";
import Typewriter from "typewriter-effect";
import { socials } from "../../data.js";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
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
      <Header />
      <section className="dave-background mx-0">
        <div className="dave-background-inner mobile-header">
          <div className="row d-flex flex-wrap align-items-center px-2 m-0">
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
                    {socials.map((s) => (
                      <a href={s.link} key={s.name}>
                        <img className="pr-3" src={s.image} alt={s.name} />
                      </a>
                    ))}
                  </div>
                </section>
              </article>
            </article>
            <article className="col-md-4">
              <img className="dave-seat" src={daveSeat} alt="David" />
            </article>
          </div>
        </div>
      </section>

      {/* <section className="dave-list-icons">
        <img src={iconOne} alt="Background icon" />
        <img src={iconTwo} alt="Background icon" />
        <img src={iconThree} alt="Background icon" />
        <img src={iconFour} alt="Background icon" />
      </section> */}
      <img className="dave-spreadBg" src={spreadBg} alt="Spread" />

      <section id="about" className="dave-about row m-0">
        <article className="d-flex flex-column col-md-4 ">
          <img src={daveImg} alt="David" className="david-img" height="588px" />

          {/* <img
            className="scroll"
            src={scroll}
            alt="scroll"
            width="68px"
            height="25px"
          /> */}
        </article>
        <article className="dave-about-article col-md-8">
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
          {/* <div className="salyman-img">
            <img
              className=""
              src={salyman}
              alt="Man pressing laptop on floor"
            />
          </div> */}
        </article>
        {/* <div className="blue-splash"><img src={blueySplash} alt="Splash" /></div> */}
      </section>
      <section id="skills" className="skills row m-0">
        <article className="col-md-7">
          <h3 className="dave-heading">Skills</h3>
          <p className="dave-paragraph pb-3">
            React, JavaScript, Redux, Database (SQL, MySQL, Postgres), NodeJS,
            Python, Java Programming, Php
          </p>
        </article>
        <article className="col-md-5 d-flex justify-content-center">
          <img className="laptop" src={laptopImg} alt="laptop" />
        </article>
      </section>

      {/* Develop for projects here */}
      <section></section>
      <Footer
        toSend={toSend}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        maillError={maillError}
      />
    </div>
  );
};

export default Home;
